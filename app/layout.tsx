import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Art Hildamar — Arte líquido. Piezas irrepetibles.",
  description:
    "Obras originales en resina de Art Hildamar. Arte abstracto, materia, luz y movimiento.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}