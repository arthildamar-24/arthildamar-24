"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function deleteArtwork(formData: FormData) {
  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("Falta el ID de la obra.");
  }

  const supabase = await createClient();

  // Comprobar que existe la sesión
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("No autorizado.");
  }

  // Obtener las imágenes asociadas
  const { data: images } = await supabase
    .from("artwork_images")
    .select("storage_path")
    .eq("artwork_id", id);

  // Borrar fotografías del Storage
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

  // Obtener la imagen principal si existe
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

  // Borrar la obra.
  // Las imágenes relacionadas se eliminan por CASCADE.
  const { error } = await supabase
    .from("artworks")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/obras");
  revalidatePath("/obras");

  redirect("/admin/obras");
}
