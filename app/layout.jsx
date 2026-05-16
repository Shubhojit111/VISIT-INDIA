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
  openGraph: {
    title: 'VISIT INDIA — Premium 10-Day Curated Journey',
    description: 'A premium 10-day curated travel experience across Delhi, Jaipur, and Kerala.',
    url: 'https://visitindia.travel',
    siteName: 'Visit India',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Visit India — Premium Travel Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VISIT INDIA — Premium 10-Day Curated Journey',
    description: 'A premium 10-day curated travel experience across Delhi, Jaipur, and Kerala.',
    images: ['/images/hero-bg.png'],
  },
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
