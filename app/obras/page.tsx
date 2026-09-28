import { getArtworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/artwork-card";

export default async function Obras() {
  const artworks = await getArtworks();

  return (
    <main className="page">
      <div className="page-intro">
        <p className="eyebrow">ARCHIVO / 001</p>
        <h1>Obras</h1>
        <p>Una colección de piezas originales creadas en resina.</p>
      </div>
      <div className="art-grid art-grid-large">
        {artworks.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}
      </div>
    </main>
  );
}