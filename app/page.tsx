import Link from "next/link";
import { getArtworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/artwork-card";

export default async function Home() {
  const artworks = await getArtworks();

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ARTE ABSTRACTO · RESINA · PIEZAS ÚNICAS</p>
          <h1>El arte<br /><em>fluye.</em></h1>
          <p className="hero-text">
            Obras construidas con resina, pigmento, luz y movimiento.
            Cada pieza encuentra su propio camino.
          </p>
          <Link className="button" href="/obras">Explorar la colección <span>↗</span></Link>
        </div>
        <div className="hero-art">
          <div className="hero-glow" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-signature">Hildamar / 2026</div>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">01 / LA MATERIA</p>
        <div>
          <h2>No hay dos corrientes iguales.</h2>
          <p>
            La resina nunca repite exactamente su recorrido. Por eso cada obra
            conserva algo que no puede fabricarse dos veces: su propio movimiento.
          </p>
        </div>
      </section>

      <section className="collection">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 / OBRAS</p>
            <h2>Selección Hildamar</h2>
          </div>
          <Link href="/obras" className="text-link">Ver todas →</Link>
        </div>
        <div className="art-grid">
          {artworks.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}
        </div>
      </section>

      <section className="process-teaser">
        <p className="eyebrow">03 / EL PROCESO</p>
        <h2>La belleza<br /><em>no se repite.</em></h2>
        <Link className="button button-light" href="/proceso">Ver cómo nace una obra <span>↗</span></Link>
      </section>
    </main>
  );
}