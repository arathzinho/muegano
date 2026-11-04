"use client";

import "./globals.css";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Configuración física del scroll inercial
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="es" className="dark">
      <body className="bg-[#070709] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}