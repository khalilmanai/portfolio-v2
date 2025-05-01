import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khalil Manai | Portfolio',
  description: 'Personal portfolio and resume of Khalil Manai, a Software Engineer specializing in web development.',
  openGraph: {
    title: 'Khalil Manai | Portfolio',
    description: 'Explore the portfolio of Khalil Manai: software engineer, mobile & web developer, and AI enthusiast.',
    url: 'https://khalilmanai.vercel.app',
    siteName: 'Khalil Manai Portfolio',
    images: [
      {
        url: 'https://khalilmanai.vercel.app/thumbnail.png',  // ← full public URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Manai | Portfolio',
    description: 'Explore the portfolio of Khalil Manai: software engineer, mobile & web developer, and AI enthusiast.',
    images: ['https://khalilmanai.vercel.app/thumbnail.png'],  // ← full public URL
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}