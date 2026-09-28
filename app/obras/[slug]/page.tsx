import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtwork } from "@/lib/artworks";

export default async function Obra({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = await getArtwork(slug);
  if (!artwork) notFound();

  return (
    <main className="detail">
      <Link href="/obras" className="back">← Volver a obras</Link>
      <div className="detail-grid">
        <div className="detail-image">
          {artwork.image_url ? <img src={artwork.image_url} alt={artwork.title} /> : <div className="art-placeholder"><span>ART HILDAMAR</span></div>}
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{artwork.collection ?? "OBRA ORIGINAL"} / {artwork.year ?? "—"}</p>
          <h1>{artwork.title}</h1>
          <p className="detail-description">{artwork.description}</p>
          <div className="detail-line"><span>Estado</span><strong>{artwork.available ? "Disponible" : "Vendida"}</strong></div>
          <div className="detail-line"><span>Certificado</span><strong>Incluido</strong></div>
          <Link className="button" href="/contacto">Consultar esta obra <span>↗</span></Link>
        </div>
      </div>
    </main>
  );
}