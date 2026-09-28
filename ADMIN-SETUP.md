# ART HILDAMAR — acceso privado /admin

1. En Supabase: Authentication > Users > Add user > Create new user. Crea UNA sola cuenta con el correo y contraseña del administrador.
2. En Vercel > Settings > Environment Variables añade `ADMIN_EMAIL` con ese mismo correo. Mantén también `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
3. En el repositorio, copia estos archivos respetando las rutas.
4. Añade al `.env.example`: `ADMIN_EMAIL=`.
5. En `app/globals.css` añade estilos propios para `.admin-login`, `.admin-shell`, `.admin-side`, `.admin-content`, `.admin-form`, `.admin-stats`.
6. Haz commit/push. Vercel redeployará.
7. Entra a `/login`. Solo el correo configurado en `ADMIN_EMAIL` puede iniciar sesión.

No subas `.env.local` ni ninguna `service_role`/secret key a GitHub.
