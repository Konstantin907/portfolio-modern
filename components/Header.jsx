'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import LetterGlitch from "./LetterGlitch"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="relative py-8 xl:py-12 text-white">
      <div className="absolute inset-0 -z-10 opacity-15">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="relative group">
          <h1 className="text-4xl font-semibold">
            {/* TODO LINE HERE */}
            Konstantin<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        <motion.div
          className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "easeInOut",
          }}
        />
      </div>
    </header>
  );
}

export default Header
