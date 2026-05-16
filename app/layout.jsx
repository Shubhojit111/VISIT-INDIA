import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'VISIT INDIA — Premium 10-Day Curated Journey',
  description: 'A premium 10-day curated travel experience across Delhi, Jaipur, and Kerala. Explore golden palaces, Himalayan dawns, saffron skies, sacred ghats, and regal architecture.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-midnight text-ivory font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
