"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function getAdminClient() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("No autorizado.");
  }

  return supabase;
}

export async function createArtwork(formData: FormData) {
  const supabase = await getAdminClient();

  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const collection = String(formData.get("collection") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const dimensions = String(formData.get("dimensions") || "").trim();
  const yearValue = String(formData.get("year") || "").trim();
  const priceValue = String(formData.get("price") || "").trim();
  const currency = String(formData.get("currency") || "EUR");
  const status = String(formData.get("status") || "available");

  const published = formData.get("published") === "on";
  const featured = formData.get("featured") === "on";

  if (!title || !slug) {
    throw new Error("El título y el slug son obligatorios.");
  }

  if (!["available", "reserved", "sold"].includes(status)) {
    throw new Error("Estado no válido.");
  }

  const year = yearValue ? Number(yearValue) : null;
  const price = priceValue ? Number(priceValue) : null;

  if (year !== null && !Number.isFinite(year)) {
    throw new Error("El año no es válido.");
  }

  if (price !== null && !Number.isFinite(price)) {
    throw new Error("El precio no es válido.");
  }

  const { data: artwork, error } = await supabase
    .from("artworks")
    .insert({
      title,
      slug,
      collection: collection || null,
      description: description || null,
      dimensions: dimensions || null,
      year,
      price,
      currency,
      status,
      published,
      featured,
      available: status === "available",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const image = formData.get("image");

  if (image instanceof File && image.size > 0) {
    const extension =
      image.name.split(".").pop()?.toLowerCase() || "jpg";

    const filePath = `${artwork.id}/main-${Date.now()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("artworks")
      .upload(filePath, image, {
        contentType: image.type,
        upsert: false,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("artworks")
      .getPublicUrl(filePath);

    await supabase
      .from("artworks")
      .update({
        image_url: publicUrl,
      })
      .eq("id", artwork.id);

    await supabase.from("artwork_images").insert({
      artwork_id: artwork.id,
      storage_path: filePath,
      alt_text: title,
      sort_order: 0,
    });
  }

  revalidatePath("/");
  revalidatePath("/obras");
  revalidatePath(`/obras/${slug}`);
  revalidatePath("/admin");
  revalidatePath("/admin/obras");

  redirect("/admin/obras");
}

export async function deleteArtwork(formData: FormData) {
  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("Falta el ID de la obra.");
  }

  const supabase = await getAdminClient();

  const { data: images } = await supabase
    .from("artwork_images")
    .select("storage_path")
    .eq("artwork_id", id);

  if (images && images.length > 0) {
    const paths = images
      .map((image) => image.storage_path)
      .filter(Boolean);

    if (paths.length > 0) {
      await supabase.storage
        .from("artworks")
        .remove(paths);
    }
  }

  const { data: artwork } = await supabase
    .from("artworks")
    .select("image_url")
    .eq("id", id)
    .single();

  if (artwork?.image_url) {
    const marker = "/storage/v1/object/public/artworks/";

    if (artwork.image_url.includes(marker)) {
      const storagePath = artwork.image_url.split(marker)[1];

      if (storagePath) {
        await supabase.storage
          .from("artworks")
          .remove([storagePath]);
      }
    }
  }

  const { error } = await supabase
    .from("artworks")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/obras");
  revalidatePath("/admin");
  revalidatePath("/admin/obras");

  redirect("/admin/obras");
}
