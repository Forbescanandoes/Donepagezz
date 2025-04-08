import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import { siteConfig } from './config/site.config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Landing Page Builder',
    'SaaS Landing Pages',
    'Landing Page System',
    'AI Landing Pages',
  ],
  authors: [{ name: 'DonePagez' }],
  creator: 'DonePagez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://donepagez.com',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@donepagez',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-14 sm:scroll-pt-16">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
