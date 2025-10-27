'use client'
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Link from 'next/link'
import LetterGlitch from "@/components/LetterGlitch";



const Home = () => {
  return (
    <section className=" relative overflow-hidden">

       <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-15">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>


      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-white text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1 mb-6">
            Hello I&apos;m <br /> <span className="text-accent">Konstantin Ivanovic</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white font-">
              I excel at crafting elegant digital experiences and I am proficient in 
              various programming languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">

            <Link 
            href='https://docs.google.com/document/d/1ZomZrN8s8xwkRpX8vXeV8itww1BxYmAGj67Gke4-uPQ/edit?usp=sharing'
            >
              <Button 
                  variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                    Check Out My CV
                    <FiDownload className="text-xl "/>
                </Button>
            </Link>              
              
              <div className="mb-8 xl:mb-0">
                <Social containerStyle='flex gap-6' 
                iconStyles='w-9 h-9 border border-accent 
                rounded-full flex justify-center items-center text-accent hover:bg-accent 
                hover:text-primary hover:transition-all duration-500'/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home

