import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/general.scss'
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import Head from "next/head";
 
// either Static metadata
export const metadata: Metadata = {
  title: 'track your package with crystal royal logistics',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar  />
        {children}
      <Footer />
      </body>
    </html>
  );
}
