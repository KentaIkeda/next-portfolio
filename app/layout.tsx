import type { Metadata } from "next";
import SideBar from './_components/sidebar';
import Title from './_components/title';
import { ThemeProvider } from './_components/(themes)/_theme-switch';
import { poppins } from './lib/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className='w-full h-full px-2 bg-light dark:bg-dark text-dark dark:text-light'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='kenta-portfolio'
        >
          <div className={`${poppins.className} grid grid-cols-6 gap-x-2 w-full h-auto`}>
            <SideBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}