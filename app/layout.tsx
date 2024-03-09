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
      <body className='p-2 bg-light dark:bg-dark text-dark dark:text-light'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='kenta-portfolio'
        >
          <div className={`${poppins.className} grid grid-cols-6 gap-x-2 h-full`}>
            <SideBar />
            <main className='border border-red-300 col-span-5 grid grid-rows-5 w-full h-full max-h-screen'>
              <div id='title' className='w-auto h-[48px] my-5 ml-7 row-span-1'>
                <Title isInSide /> {/* trueで no text-center */}
              </div>
              <div className='row-span-4'>
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}