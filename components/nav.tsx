import Link from "next/link";

export function Nav() {
  return (
    <header className="nav">
      <Link className="brand" href="/">
        <span>ART</span>
        <strong>HILDAMAR</strong>
      </Link>

      <nav>
        <Link href="/obras">Obras</Link>
        <Link href="/proceso">El proceso</Link>
        <Link href="/hildamar">Hildamar</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>

      <Link className="nav-mark" href="/obras">01—∞</Link>
    </header>
  );
}