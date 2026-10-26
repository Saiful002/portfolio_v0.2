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
  metadataBase: new URL("https://saifulkabirchowdhury.vercel.app"),

  title: {
    default: "Saiful Kabir Chowdhury | Full Stack & Shopify Developer",
    template: "%s | Saiful Kabir Chowdhury",
  },

  description:
    "Saiful Kabir Chowdhury is a Full Stack Developer and Shopify Expert specializing in modern, responsive, SEO-friendly, and high-performance web applications and eCommerce solutions.",

  keywords: [
    "Saiful Kabir Chowdhury",
    "Saiful Kabir",
    "Full Stack Developer",
    "Full Stack Developer Bangladesh",
    "Web Developer Bangladesh",
    "Shopify Developer",
    "Shopify Developer Bangladesh",
    "WordPress Developer",
    "WordPress Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "eCommerce Developer",
    "Freelance Web Developer",
    "Web Application Developer",
    "Portfolio Saiful Kabir Chowdhury",
  ],

  authors: [
    {
      name: "Saiful Kabir Chowdhury",
      url: "https://saifulkabirchowdhury.vercel.app",
    },
  ],

  creator: "Saiful Kabir Chowdhury",
  publisher: "Saiful Kabir Chowdhury",

  category: "technology",

  alternates: {
    canonical: "https://saifulkabirchowdhury.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Saiful Kabir Chowdhury | Full Stack & Shopify Developer",
    description:
      "Full Stack, Shopify, and WordPress Developer building modern, responsive, SEO-friendly, and high-performance websites and web applications.",
    url: "https://saifulkabirchowdhury.vercel.app/",
    siteName: "Saiful Kabir Chowdhury",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "/images/dp.jpg",
        width: 1200,
        height: 630,
        alt: "Saiful Kabir Chowdhury - Full Stack & Shopify Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saiful Kabir Chowdhury | Full Stack & Shopify Developer",
    description:
      "Full Stack, Shopify, and WordPress Developer specializing in modern web applications and eCommerce solutions.",
    images: ["/images/dp.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
