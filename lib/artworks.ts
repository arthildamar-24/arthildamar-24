import { createClient } from "@/lib/supabase/server";

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  collection: string | null;
  image_url: string | null;
  year: number | null;
  price: number | null;
  currency: string | null;
  description: string | null;
  available: boolean;
};

const demo: Artwork[] = [
  { id: "1", slug: "marea-ix", title: "Marea IX", collection: "OCEAN", image_url: null, year: 2026, price: null, currency: "USD", description: "Azul profundo, luz y movimiento.", available: true },
  { id: "2", slug: "aurora-mineral", title: "Aurora Mineral", collection: "EARTH", image_url: null, year: 2026, price: null, currency: "USD", description: "Materia mineral y reflejos dorados.", available: true },
  { id: "3", slug: "vertice", title: "Vértice", collection: "FLUID", image_url: null, year: 2026, price: null, currency: "USD", description: "Una composición construida alrededor del movimiento.", available: true }
];

export async function getArtworks() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    return demo;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("artworks")
    .select("id, slug, title, collection, image_url, year, price, currency, description, available")
    .order("created_at", { ascending: false });

  if (error || !data?.length) return demo;
  return data as Artwork[];
}

export async function getArtwork(slug: string) {
  const artworks = await getArtworks();
  return artworks.find((item) => item.slug === slug) ?? null;
}