# ART HILDAMAR

Sitio editorial para una galería de arte en resina.

## Stack

- Next.js + TypeScript
- Vercel para despliegue
- Supabase para catálogo y, en la siguiente fase, Storage/Auth
- GitHub como repositorio

## Arranque local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre http://localhost:3000

## Supabase

1. Crea un proyecto en Supabase.
2. Abre SQL Editor.
3. Ejecuta `supabase/schema.sql`.
4. Copia Project URL y Publishable Key a `.env.local`.
5. Crea un bucket público `artworks`.
6. Sube las fotografías reales y pega sus URLs públicas en `artworks.image_url`.

## Vercel

Importa este repositorio de GitHub en Vercel y configura:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

No subas `.env.local` al repositorio.

## Próxima fase

- Panel /admin para gestionar obras.
- Subida de imágenes a Supabase Storage.
- Colecciones.
- Estado disponible/vendida.
- Formulario de contacto.
- WhatsApp.
- SEO y Open Graph.
- Dominio personalizado.
