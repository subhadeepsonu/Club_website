import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RiTeamLine } from "react-icons/ri";
import { MdEmojiEvents } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import DotPattern from "@/components/magicui/dot-pattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
          <Navbar></Navbar>
        {children}
        <div className="fixed w-full top-2 z-50">
        <Dock className="md:w-96 flex justify-evenly items-center">
          <DockIcon>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                  <Link href={'/'}>
                    <Home className="hover:w-9 text-gray-500 hover:text-cyan-500 hover:h-9 w-7 h-7  duration-150 transition-all "></Home>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </DockIcon>
          <DockIcon>
          <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                  <Link href={'/Team'}>
                  <RiTeamLine className="hover:w-9 text-gray-500 hover:h-9 w-7 h-7 hover:text-cyan-500  duration-150 transition-all" />
                  </Link>
                  </TooltipTrigger>
                  
                  <TooltipContent>
                    <p>Departments</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            
          </DockIcon>
          <DockIcon>
          <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={'/Events'}>
                  <MdEmojiEvents className="hover:w-9 text-gray-500 hover:h-9 w-7 h-7 hover:text-cyan-500  duration-150 transition-all" />
                  </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Events</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </DockIcon>
          <DockIcon>
          <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={'/Contact'}>
                  <FaPhoneAlt className="hover:w-9 text-gray-500 hover:h-9 w-7 h-7 hover:text-cyan-500 duration-150 transition-all"/>
                  </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </DockIcon>
          
        </Dock>
        
        </div>
        </div></body>
    </html>
  );
}
