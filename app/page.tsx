import Link from "next/link";

const artworks = [
  {
    slug: "marea-ix",
    title: "Marea IX",
    collection: "OCEAN",
    year: "2026",
    image: null,
    position: "large-left",
  },
  {
    slug: "aurora-mineral",
    title: "Aurora Mineral",
    collection: "EARTH",
    year: "2026",
    image: null,
    position: "small-center",
  },
  {
    slug: "vertice",
    title: "Vértice",
    collection: "FLUID",
    year: "2026",
    image: null,
    position: "large-right",
  },
];

export default function HomePage() {
  return (
    <main className="hildamar-home">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="hildamar-header">
        <Link href="/" className="hildamar-brand">
          <span>ART</span>
          <strong>HILDAMAR</strong>
        </Link>

        <nav className="hildamar-nav">
          <Link href="#obra">Obras</Link>
          <Link href="#hildamar">Hildamar</Link>
          <Link href="#proceso">Proceso</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>

        <span className="hildamar-index">01 — 04</span>
      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="hildamar-hero">

        <div className="hildamar-hero-number">
          01
        </div>

        <div className="hildamar-hero-copy">

          <p className="hildamar-kicker">
            ARTE CONTEMPORÁNEO · RESINA · MATERIA
          </p>

          <h1>
            La materia
            <br />
            <em>se mueve.</em>
          </h1>

          <div className="hildamar-hero-bottom">
            <p>
              Obras originales construidas con resina, pigmento,
              luz y movimiento. Cada pieza nace una sola vez.
            </p>

            <Link href="#obra" className="hildamar-line-link">
              Explorar las obras
              <span>↘</span>
            </Link>
          </div>

        </div>

        <div className="hildamar-hero-visual">

          <div className="hildamar-hero-image">
            <div className="hildamar-image-placeholder">
              <span>ART HILDAMAR</span>
              <small>PRÓXIMAMENTE</small>
            </div>
          </div>

          <div className="hildamar-hero-caption">
            <span>PIEZA 01</span>
            <strong>Marea IX</strong>
            <span>2026</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          FRASE / MANIFIESTO
          ===================================================== */}

      <section className="hildamar-manifesto">

        <div className="hildamar-manifesto-label">
          <span>02</span>
          <span>LA MATERIA</span>
        </div>

        <div className="hildamar-manifesto-main">

          <p className="hildamar-kicker">
            UNA PIEZA NUNCA VUELVE A SER IGUAL
          </p>

          <h2>
            No hay dos
            <br />
            <em>corrientes iguales.</em>
          </h2>

          <p className="hildamar-manifesto-text">
            La resina nunca repite exactamente su recorrido.
            El pigmento cambia, la luz cambia y la materia
            decide su propio movimiento.
          </p>

        </div>

      </section>


      {/* =====================================================
          OBRAS
          ===================================================== */}

      <section id="obra" className="hildamar-works">

        <div className="hildamar-section-top">

          <div>
            <span className="hildamar-section-number">03</span>

            <p className="hildamar-kicker">
              OBRAS
            </p>
          </div>

          <p className="hildamar-section-description">
            Una selección de piezas originales.
            <br />
            Ninguna existe dos veces.
          </p>

        </div>


        <div className="hildamar-works-title">

          <h2>
            Selección
            <br />
            <em>Hildamar.</em>
          </h2>

          <Link href="/obras" className="hildamar-line-link">
            Ver colección completa
            <span>↗</span>
          </Link>

        </div>


        <div className="hildamar-art-wall">

          {artworks.map((artwork, index) => (

            <Link
              key={artwork.slug}
              href={`/obras/${artwork.slug}`}
              className={`hildamar-art-piece ${artwork.position}`}
            >

              <div className="hildamar-art-photo">

                {artwork.image ? (
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                  />
                ) : (
                  <div className="hildamar-art-placeholder">
                    <span>ART HILDAMAR</span>
                  </div>
                )}

                <span className="hildamar-art-number">
                  0{index + 1}
                </span>

              </div>

              <div className="hildamar-art-info">

                <div>
                  <span>{artwork.collection}</span>
                  <h3>{artwork.title}</h3>
                </div>

                <div>
                  <span>{artwork.year}</span>
                  <small>DISPONIBLE</small>
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          HILDAMAR — LA ARTISTA
          ===================================================== */}

      <section id="hildamar" className="hildamar-artist">

        <div className="hildamar-artist-intro">

          <span className="hildamar-section-number">
            04
          </span>

          <p className="hildamar-kicker">
            HILDAMAR
          </p>

        </div>


        <div className="hildamar-artist-grid">

          <div className="hildamar-artist-image">

            <div className="hildamar-artist-photo-placeholder">
              <span>
                HILDAMAR
              </span>

              <small>
                RETRATO DE LA ARTISTA
              </small>
            </div>

          </div>


          <div className="hildamar-artist-copy">

            <p className="hildamar-kicker">
              LA ARTISTA
            </p>

            <h2>
              La obra
              <br />
              empieza
              <br />
              <em>con la materia.</em>
            </h2>

            <div className="hildamar-artist-text">

              <p>
                Hildamar trabaja con resina, pigmento y luz
                para construir piezas en las que el movimiento
                forma parte de la obra.
              </p>

              <p>
                Cada superficie se construye por capas.
                El resultado no se dibuja completamente:
                se descubre durante el proceso.
              </p>

            </div>

            <Link
              href="/hildamar"
              className="hildamar-line-link"
            >
              Conocer a Hildamar
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESO
          ===================================================== */}

      <section id="proceso" className="hildamar-process">

        <div className="hildamar-process-top">

          <span>05 / EL PROCESO</span>

          <span>
            RESINA · PIGMENTO · TIEMPO
          </span>

        </div>


        <div className="hildamar-process-content">

          <div>

            <p className="hildamar-process-small">
              EL PROCESO ES PARTE DE LA OBRA
            </p>

            <h2>
              Nada se
              <br />
              <em>repite.</em>
            </h2>

          </div>


          <div className="hildamar-process-copy">

            <p>
              La resina se mueve, se mezcla y reacciona.
              La artista acompaña ese movimiento sin intentar
              controlarlo completamente.
            </p>

            <Link
              href="/proceso"
              className="hildamar-process-button"
            >
              Ver el proceso
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CIERRE
          ===================================================== */}

      <section id="contacto" className="hildamar-closing">

        <div className="hildamar-closing-number">
          06
        </div>

        <div className="hildamar-closing-content">

          <p className="hildamar-kicker">
            ART HILDAMAR
          </p>

          <h2>
            Arte líquido.
            <br />
            <em>Piezas irrepetibles.</em>
          </h2>

          <div className="hildamar-closing-bottom">

            <p>
              Para conocer una obra, consultar disponibilidad
              o hablar directamente con Hildamar.
            </p>

            <Link
              href="/contacto"
              className="hildamar-line-link"
            >
              Hablar sobre una obra
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="hildamar-footer">

        <div>
          <span>ART</span>
          <strong>HILDAMAR</strong>
        </div>

        <span>
          © {new Date().getFullYear()} ART HILDAMAR
        </span>

        <span>
          ARTE CONTEMPORÁNEO
        </span>

      </footer>

    </main>
  );
}
