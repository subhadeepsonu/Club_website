"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import GradualSpacing from "../magicui/gradual-spacing";
import { CoolMode } from "../magicui/cool-mode";
import { Button } from "../ui/button";
import { PiConfettiBold } from "react-icons/pi";
import { useRef } from "react";
export default function Hero(){
  const r1 = useRef(null)
    return <HeroHighlight>
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className=" text-4xl px-4 md:text-7xl lg:text-8xl xl:text-9xl font-bold text-neutral-700  max-w-screen-2xl leading-relaxed lg:leading-snug text-center mx-auto bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
    >
      <GradualSpacing
      className="text-center text-4xl font-bold   md:text-9xl  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
      text="Geeks For Geeks"
    />
      <div>
      <Highlight className="text-black dark:text-white text-xl md:text-3xl lg:text-5xl">
      Empowering Innovation Together!
      </Highlight>
      </div>
    </motion.h1>
    <div className="fixed ">
    <CoolMode>
        <Button>
        <PiConfettiBold />
        </Button>
    </CoolMode>
    </div>
  </HeroHighlight>
}