import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SplashScreen } from '@/components/SplashScreen';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatbotButton } from '@/components/ChatbotButton';
import { CustomCursor } from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://gagana-perera.vercel.app'),
  title: {
    default: 'Gagana Yushan Perera | Project Management & Business Analysis',
    template: '%s | Gagana Yushan Perera'
  },
  description: 'Gagana Yushan Perera - IT undergraduate at SLIIT bridging technology, business, and creativity to build meaningful digital solutions. Specializing in Project Management, Business Analysis, and UI/UX Design.',
  keywords: [
    'Gagana Yushan', 
    'Gagana Perera', 
    'Gagana Yushan Perera', 
    'Project Management',
    'Business Analysis',
    'Creative Design',
    'UI/UX Design',
    'SLIIT',
    'AIESEC in SLIIT',
    'MillionSpaces',
    'Sri Lanka'
  ],
  authors: [{ name: 'Gagana Yushan Perera' }],
  creator: 'Gagana Yushan Perera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gagana-perera.vercel.app/',
    title: 'Gagana Yushan Perera | Project Management & Business Analysis',
    description: 'Bridging technology, business, and creativity to build meaningful digital solutions.',
    siteName: 'Gagana Yushan Perera Portfolio',
    images: [
      {
        url: '/gagana-cutout.png',
        width: 1024,
        height: 1024,
        alt: 'Gagana Yushan Perera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagana Yushan Perera | Portfolio',
    description: 'Bridging technology, business, and creativity to build meaningful digital solutions.',
  },
  alternates: {
    canonical: 'https://gagana-perera.vercel.app/',
  },
  verification: {
    google: 'qiFGO3btglzISkYbypHbqTzDlQ__qZsa6Sr_TImoYrE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SplashScreen />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <ChatbotButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
