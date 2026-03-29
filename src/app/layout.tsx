import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://gagana-perera.vercel.app'),
  title: 'Gagana Yushan Perera | Portfolio',
  description: 'A creative tech enthusiast blending design, AI, and product thinking.',
  keywords: [
    'Gagana Yushan', 
    'Gagana Perera', 
    'Gagana Yushan Perera', 
    'Portfolio', 
    'Software Engineer', 
    'AI Enthusiast', 
    'Tech', 
    'Sri Lanka'
  ],
  authors: [{ name: 'Gagana Yushan Perera' }],
  creator: 'Gagana Yushan Perera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gagana-perera.vercel.app/',
    title: 'Gagana Yushan Perera | Portfolio',
    description: 'A creative tech enthusiast blending design, AI, and product thinking.',
    siteName: 'Gagana Yushan Perera Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can later add a specific image for open graph in public folder
        width: 1200,
        height: 630,
        alt: 'Gagana Yushan Perera Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagana Yushan Perera | Portfolio',
    description: 'A creative tech enthusiast blending design, AI, and product thinking.',
    creator: '@gaganaperera', // Change this to your actual twitter handle if you have one
  },
  alternates: {
    canonical: 'https://gagana-perera.vercel.app/',
  },
  verification: {
    google: 'qiFGO3btglzISkYbypHbqTzDlQ__qZsa6Sr_TImoYrE',
  },
};

import { ChatbotButton } from '@/components/ChatbotButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatbotButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
