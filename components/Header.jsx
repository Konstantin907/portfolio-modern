'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import LetterGlitch from "./LetterGlitch"

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
        <Link href="/">
            <h1 className="text-4xl font-semibold">
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
      </div>
    </header>
  )
}

export default Header
