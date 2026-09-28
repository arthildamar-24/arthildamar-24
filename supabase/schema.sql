create extension if not exists "pgcrypto";

create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  collection text,
  description text,
  image_url text,
  year int,
  price numeric(12,2),
  currency text default 'USD',
  available boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.artworks enable row level security;

drop policy if exists "Public can read artworks" on public.artworks;
create policy "Public can read artworks"
on public.artworks for select
to anon, authenticated
using (true);

insert into public.artworks (slug, title, collection, description, year)
values
('marea-ix', 'Marea IX', 'OCEAN', 'Azul profundo, luz y movimiento.', 2026),
('aurora-mineral', 'Aurora Mineral', 'EARTH', 'Materia mineral y reflejos dorados.', 2026),
('vertice', 'Vértice', 'FLUID', 'Una composición construida alrededor del movimiento.', 2026)
on conflict (slug) do nothing;

-- Para las imágenes: crea un bucket público llamado "artworks"
-- y guarda en image_url la URL pública de cada archivo.
-- Para producción, añadiremos un panel privado para subir y editar obras.
