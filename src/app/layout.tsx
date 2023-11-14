import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { ContextProvider } from '../context/Context';
// import { GoogleOAuthProvider } from '@react-oauth/google';

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
                <script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/en_US/sdk.js'
                ></script>
                <ContextProvider>
                    {/* <GoogleOAuthProvider clientId='1060704648880-2vqttp1m0jsdkitbh77nn9if0sos43ne.apps.googleusercontent.com'> */}
                    <div
                        className={`${iBM_Plex_Sans.variable} ${poynter_Oldstyle_Display.variable}`}
                    >
                        {/* <Navbar /> */}
                        {children}
                    </div>
                    {/* </GoogleOAuthProvider> */}
                </ContextProvider>
            </body>
        </html>
    );
}
