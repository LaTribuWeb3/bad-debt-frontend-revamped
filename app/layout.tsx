import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Footer from './Footer';
import ThemeSwitch from './ThemeSwitch';
import TopBar from './TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Risk DAO | Research & Risk Analysis',
  description: 'Research & Risk Analysis For DeFi Lending Protocols',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/risk-dao-black.svg',
        href: '/images/risk-dao-black.svg'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/risk-dao-white.svg',
        href: '/images/risk-dao-white.svg'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <TopBar />
          <ThemeSwitch />
          <main className="flex bg-white dark:bg-darkThemeBg min-h-screen text-black dark:text-white flex-col items-center justify-between px-72 py-24 pb-0">
            {children}
          </main>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
