import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gateway - Guía de Instalación | Asimetrix",
  description: "Guía de instalación y configuración del Gateway Asimetrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}