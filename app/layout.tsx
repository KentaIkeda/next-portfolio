import type { Metadata } from 'next';
import SideBar from './_components/sidebar';
import { ThemeProvider } from './_components/(themes)/_theme-switch';
import { poppins } from './lib/fonts';
import './globals.css';
import NavProvider from './_components/(mdNav)/navProvider';

export const metadata: Metadata = {
  title: '2525KI',
  description: 'This is Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ja'
      suppressHydrationWarning
    >
      <body className='w-full h-full bg-light dark:bg-dark text-dark dark:text-light'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='kenta-portfolio'
        >
          <div
            className={`${poppins.className} lg:grid lg:grid-cols-6 lg:gap-x-2 xl:grid-cols-7 w-full h-auto`}
          >
            <SideBar />
            {children}
          </div>
          <NavProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
