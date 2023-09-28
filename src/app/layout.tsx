import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-iBM_Plex_Sans',
});

const poynter_Oldstyle_Display = localFont({
  src: '../../public/font/PoynterOldstyleDisplay_Roman.ttf',
  variable: '--font-poynter_Oldstyle_Display',
});

export const metadata: Metadata = {
  title: 'Therapy Note Writer',
  description: 'An AI-Powered Note taking App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <div
          className={`${iBM_Plex_Sans.variable} ${poynter_Oldstyle_Display.variable}`}
        >
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
