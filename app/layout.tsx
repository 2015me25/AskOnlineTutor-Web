import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://askonlinetutor.com'),
  title: 'AskOnlineTutor Engineering — Professional Structural Calculation & Analysis Platform',
  description:
    'Professional engineering tools for beam analysis, structural systems, section properties, and advanced problem solving with step-by-step mathematical solutions. Built for engineering students and practicing engineers.',
  keywords: [
    'Beam Master',
    'AskOnlineTutor',
    'Shear Force Diagram',
    'Bending Moment Diagram',
    'Beam Deflection Calculator',
    'Structural Engineering SaaS',
    'Macaulay Method',
    'Truss Analysis',
  ],
  authors: [{ name: 'AskOnlineTutor Engineering' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
