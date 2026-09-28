import Link from "next/link";

type Artwork = {
  id: string;
  slug: string;
  title: string;
  collection: string | null;
  image_url: string | null;
  year: number | null;
  price: number | null;
  currency: string | null;
  available: boolean;
};

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/obras/${artwork.slug}`} className="art-card">
      <div className="art-image">
        {artwork.image_url ? (
          <img src={artwork.image_url} alt={artwork.title} />
        ) : (
          <div className="art-placeholder" aria-label="Imagen pendiente de cargar">
            <span>ART HILDAMAR</span>
          </div>
        )}
        <span className="art-index">{artwork.year ?? "—"}</span>
      </div>
      <div className="art-meta">
        <div>
          <small>{artwork.collection ?? "OBRA ORIGINAL"}</small>
          <h3>{artwork.title}</h3>
        </div>
        <span>{artwork.available ? "Disponible" : "Vendida"}</span>
      </div>
    </Link>
  );
}