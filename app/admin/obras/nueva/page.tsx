import Link from "next/link";
import { createArtwork } from "../actions";

export default function NuevaObraPage() {
  return (
    <div>
      <div className="admin-header compact">
        <div>
          <div className="admin-eyebrow">OBRAS / NUEVA PIEZA</div>
          <h1>Nueva obra.</h1>
          <p>
            Añade una pieza al catálogo de ART HILDAMAR.
          </p>
        </div>

        <Link href="/admin/obras" className="admin-secondary">
          ← Volver a obras
        </Link>
      </div>

      <form action={createArtwork} className="admin-form">
        <div className="admin-form-section">
          <div>
            <span className="admin-eyebrow">01</span>
            <h2>Identidad</h2>
          </div>

          <div className="admin-fields">
            <label>
              Título
              <input
                name="title"
                type="text"
                placeholder="Ej. Marea IX"
                required
              />
            </label>

            <label>
              Slug
              <input
                name="slug"
                type="text"
                placeholder="marea-ix"
                required
              />
            </label>

            <label>
              Colección
              <input
                name="collection"
                type="text"
                placeholder="Ej. Ocean"
              />
            </label>

            <label>
              Año
              <input
                name="year"
                type="number"
                placeholder="2026"
              />
            </label>
          </div>
        </div>

        <div className="admin-form-section">
          <div>
            <span className="admin-eyebrow">02</span>
            <h2>La obra</h2>
          </div>

          <div className="admin-fields">
            <label className="full">
              Descripción
              <textarea
                name="description"
                rows={7}
                placeholder="Describe la obra, sus materiales, inspiración, textura..."
              />
            </label>

            <label>
              Dimensiones
              <input
                name="dimensions"
                type="text"
                placeholder="Ej. 100 × 80 cm"
              />
            </label>
                    </div>
          <div className="admin-upload">
  <label className="admin-upload-label">
    <span className="admin-eyebrow">Fotografía principal</span>

    <span className="admin-upload-title">
      Selecciona la imagen de la obra
    </span>

    <span className="admin-upload-help">
      JPG, PNG o WebP · máximo 10 MB
    </span>

    <input
      name="image"
      type="file"
      accept="image/jpeg,image/png,image/webp"
    />
  </label>
</div>
      

        <div className="admin-form-section">
          <div>
            <span className="admin-eyebrow">03</span>
            <h2>Venta</h2>
          </div>

          <div className="admin-fields">
            <label>
              Precio
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="0.00"
              />
            </label>

            <label>
              Moneda
              <select name="currency" defaultValue="EUR">
                <option value="EUR">EUR — Euro</option>
                <option value="USD">USD — Dólar</option>
                <option value="PEN">PEN — Sol</option>
              </select>
            </label>

            <label>
              Estado
              <select name="status" defaultValue="available">
                <option value="available">Disponible</option>
                <option value="reserved">Reservada</option>
                <option value="sold">Vendida</option>
              </select>
            </label>
          </div>
        </div>

        <div className="admin-form-section">
          <div>
            <span className="admin-eyebrow">04</span>
            <h2>Publicación</h2>
          </div>

          <div className="admin-options">
            <label className="admin-check">
              <input
                type="checkbox"
                name="published"
                defaultChecked
              />
              <span>
                <strong>Publicar obra</strong>
                <small>
                  La obra será visible en la galería pública.
                </small>
              </span>
            </label>

            <label className="admin-check">
              <input
                type="checkbox"
                name="featured"
              />
              <span>
                <strong>Obra destacada</strong>
                <small>
                  Puede aparecer en la selección principal.
                </small>
              </span>
            </label>
          </div>
        </div>

        <div className="admin-form-actions">
          <Link href="/admin/obras" className="admin-secondary">
            Cancelar
          </Link>

          <button type="submit" className="admin-primary">
            Crear obra →
          </button>
        </div>
      </form>
    </div>
  );
}
