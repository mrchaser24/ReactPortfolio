
"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "CHASE",
//   description: "Chase portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className="h-screen">
        <Header/>
        <div className="content">
          {children}
        </div>
        {pathname !== '/'?<Footer/>:''}
      </body>
    </html>
  );
}
