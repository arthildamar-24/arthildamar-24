import Link from "next/link";
import { getArtworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/artwork-card";

export default async function Home() {
  const artworks = await getArtworks();
  const heroArtwork = artworks[0];

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero-editorial">

        <div className="hero-editorial-copy">
          <div>
            <p className="eyebrow">01 / ART HILDAMAR</p>

            <h1>
              El arte
              <br />
              <em>fluye.</em>
            </h1>
          </div>

          <div className="hero-editorial-bottom">
            <p>
              Obras originales construidas con resina,
              pigmento, luz y movimiento.
            </p>

            <Link href="/obras" className="text-link">
              Explorar obras ↗
            </Link>
          </div>
        </div>

        <div className="hero-editorial-art">
          {heroArtwork?.image_url ? (
            <img
              src={heroArtwork.image_url}
              alt={heroArtwork.title}
            />
          ) : (
            <div className="hero-empty">
              <span>ART HILDAMAR</span>
              <small>PRÓXIMAMENTE</small>
            </div>
          )}

          <div className="hero-art-caption">
            <span>
              {heroArtwork?.collection ?? "OBRA ORIGINAL"}
            </span>

            <strong>
              {heroArtwork?.title ?? "Hildamar"}
            </strong>

            <span>
              {heroArtwork?.year ?? "2026"}
            </span>
          </div>
        </div>

      </section>


      {/* MANIFIESTO */}
      <section className="manifesto-editorial">

        <div className="manifesto-number">
          02
        </div>

        <div className="manifesto-label">
          LA MATERIA
        </div>

        <div className="manifesto-content">
          <h2>
            No hay dos
            <br />
            corrientes iguales.
          </h2>

          <p>
            La resina nunca repite exactamente su recorrido.
            Cada capa, cada pigmento y cada movimiento de la materia
            transforma la obra en una pieza irrepetible.
          </p>
        </div>

      </section>


      {/* OBRAS */}
      <section className="collection-editorial">

        <div className="collection-intro">
          <div>
            <p className="eyebrow">03 / OBRAS</p>

            <h2>
              Selección
              <br />
              Hildamar.
            </h2>
          </div>

          <Link href="/obras" className="text-link">
            Ver colección completa ↗
          </Link>
        </div>


        <div className="art-grid editorial-grid">
          {artworks.slice(0, 3).map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
            />
          ))}
        </div>

      </section>


      {/* PROCESO */}
      <section className="process-editorial">

        <div className="process-top">
          <span>04 / EL PROCESO</span>
          <span>RESINA · PIGMENTO · TIEMPO</span>
        </div>

        <div className="process-main">
          <h2>
            La belleza
            <br />
            <em>no se repite.</em>
          </h2>

          <div>
            <p>
              Cada obra nace de un proceso que no puede
              reproducirse exactamente. La materia decide,
              la artista acompaña.
            </p>

            <Link
              href="/proceso"
              className="button button-light"
            >
              Conocer el proceso ↗
            </Link>
          </div>
        </div>

      </section>


      {/* CIERRE */}
      <section className="home-closing">

        <p className="eyebrow">
          ART HILDAMAR
        </p>

        <h2>
          Arte líquido.
          <br />
          <em>Piezas irrepetibles.</em>
        </h2>

        <Link href="/contacto" className="text-link">
          Hablar sobre una obra ↗
        </Link>

      </section>

    </main>
  );
}
