import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import CustomCursor from '@/components/CustomCursor/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://port-folio-five-cyan.vercel.app'),
  title: 'Saiful Kabir Chowdhury | Full Stack & Shopify Developer',
  description:
    'Professional portfolio website showcasing full-stack development, Shopify, WordPress, and modern web solutions.',
  keywords: [
    'Saiful Kabir Chowdhury',
    'Full Stack Developer',
    'Shopify Developer',
    'WordPress Developer',
    'Next.js Portfolio',
    'Web Developer Bangladesh',
  ],
  authors: [{ name: 'Saiful Kabir Chowdhury' }],
  openGraph: {
    title: 'Saiful Kabir Chowdhury | Full Stack & Shopify Developer',
    description:
      'Professional portfolio website showcasing full-stack development, Shopify, WordPress, and modern web solutions.',
    url: 'https://port-folio-five-cyan.vercel.app/',
    siteName: 'Saiful Kabir Chowdhury Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Saiful Kabir Chowdhury Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saiful Kabir Chowdhury | Full Stack & Shopify Developer',
    description:
      'Professional portfolio website showcasing full-stack development, Shopify, WordPress, and modern web solutions.',
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#070709] text-zinc-100 antialiased selection:bg-purple-500 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
