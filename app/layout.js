"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import TopMenu from "./components/TopMenu";
import Menu from "./components/Menu";
import { usePathname } from 'next/navigation';

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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}
      >
        {!isAdminPage && !isAuthPage && (
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
