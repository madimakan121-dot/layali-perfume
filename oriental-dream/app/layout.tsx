import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oriental Dream | Perfumes árabes de lujo',
  description: 'Una tienda de perfumes árabes premium con un diseño cinematográfico y elegante.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
