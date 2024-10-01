"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import TopMenu from "./components/TopMenu";
import Menu from "./components/Menu";
import { usePathname } from 'next/navigation';
import { BasketProvider } from './context/BasketContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function RootLayoutContent({ children }) {
  const pathname = usePathname();
  const isSpecialPage = pathname.startsWith('/admin') || pathname.startsWith('/login') || pathname.startsWith('/register');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}
      >
        {!isSpecialPage && (
          <>  
            <TopMenu/>
            <TopHeader/>
            <Header/>
            <Menu/>
          </>
        )}
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <BasketProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </BasketProvider>
  );
}
