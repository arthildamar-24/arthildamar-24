import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteArtwork } from "./actions";

export default async function AdminObrasPage() {
  const supabase = await createClient();

  const { data: artworks, error } = await supabase
    .from("artworks")
    .select(
      "id, slug, title, collection, image_url, year, price, currency, status, featured, published, updated_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="admin-empty">
        <span>ERROR</span>
        <h2>No se pudieron cargar las obras.</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-header compact">
        <div>
          <div className="admin-eyebrow">OBRAS / CATÁLOGO</div>
          <h1>Tus obras.</h1>
          <p>
            Añade, edita y organiza las piezas que aparecen en ART HILDAMAR.
          </p>
        </div>

        <Link className="admin-primary" href="/admin/obras/nueva">
          + Nueva obra
        </Link>
      </div>

      {!artworks || artworks.length === 0 ? (
        <div className="admin-empty">
          <span>01</span>
          <h2>Aún no hay obras.</h2>
          <p>Empieza creando tu primera pieza.</p>

          <Link className="admin-primary" href="/admin/obras/nueva">
            Crear primera obra
          </Link>
        </div>
      ) : (
        <div className="admin-art-list">
          {artworks.map((artwork) => (
            <article className="admin-art-row" key={artwork.id}>
              <div className="admin-thumb">
                {artwork.image_url ? (
                  <img src={artwork.image_url} alt={artwork.title} />
                ) : (
                  <span>SIN FOTO</span>
                )}
              </div>

              <div className="admin-art-info">
                <div className="admin-art-title">
                  <h2>{artwork.title}</h2>

                  {artwork.featured && (
                    <span className="badge featured">
                      Destacada
                    </span>
                  )}
                </div>

                <p>
                  {artwork.collection || "Sin colección"} ·{" "}
                  {artwork.year || "—"}
                </p>
              </div>

              <div className="admin-art-status">
                <span
                  className={`badge ${
                    artwork.status === "available"
                      ? "available"
                      : artwork.status === "sold"
                      ? "sold"
                      : "reserved"
                  }`}
                >
                  {artwork.status === "available"
                    ? "Disponible"
                    : artwork.status === "sold"
                    ? "Vendida"
                    : "Reservada"}
                </span>

                {!artwork.published && (
                  <span className="badge">Oculta</span>
                )}
              </div>

              <div className="admin-art-actions">
                <Link href={`/admin/obras/${artwork.id}/editar`}>
                  Editar
                </Link>

                <Link
                  href={`/obras/${artwork.slug}`}
                  target="_blank"
                >
                  Ver ↗
                </Link>

                <form action={deleteArtwork}>
                  <input
                    type="hidden"
                    name="id"
                    value={artwork.id}
                  />

                  <button type="submit">
                    Eliminar
                  </button>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
