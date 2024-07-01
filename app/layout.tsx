import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'
import RecoilContextProvider, { ReactQuearyProvider } from "@/utils/quaryProvider";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GFG VIT-AP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" min-h-screen w-full dark  bg-black ">
          <RecoilContextProvider>
          <ReactQuearyProvider>
            <Toaster richColors></Toaster>
          <Nav></Nav>
        {children}
        <div className="h-20 w-full flex items-center justify-center text-white">
      Made With ❤️ By Subhadeep Thandaka
      </div> 
        </ReactQuearyProvider>
        </RecoilContextProvider>
        </div></body>
    </html>
  );
}
