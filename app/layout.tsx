import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Canis Technology Solutions',
  description: 'Technology, security, and training solutions by Canis Technology Solutions',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
