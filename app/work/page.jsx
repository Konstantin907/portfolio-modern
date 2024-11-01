"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Star Portfolio',
    description: 'Online T-shirt designing, you can use text, color, and pictures from all platforms. You can be really creative!',
    stack:[
      { name: 'React.js'}, {name: 'Css 3'}, {name: 'Javascript'},],
    image: '/first-4.png',
    live: 'https://threejs-project-delta.vercel.app/',
    github: 'https://github.com/Konstantin907/threejs-project',
  },


  {
    num: '02',
    category: 'fullstack',
    title: 'Online Chat Application',
    description: 'Online chatting app, desiged for a you and your friends, you can upload pictures, messages, anything you want, you cant block users, change profile. Online chatting app for your using.',
    stack:[
      { name: 'React.js'}, {name: 'Css 3'}, {name: 'Javascript'}, {name: 'Nodejs'},{name: 'Firebase'},],
    image: '/projectimgedit.png',
    live: 'https://chat-app-fullstack-teal.vercel.app/',
    github: 'https://github.com/Konstantin907/chat-app-fullstack',
  },
  {
    num: '03',
    category: 'fullstack MERN',
    title: 'Childcare System',
    description: 'Real time application for childcare services with sign-in/out of children and update on the same.',
    stack:[
      { name: 'React.js'}, {name: 'Javascript'},
      {name: 'Nodejs'},{name: 'MongoDb'},{name: 'Firebase'}],
    image: '/childcare.png',
    live: 'https://childcare-system.onrender.com/',
    github: 'https://github.com/Konstantin907/childcare-system',
  },
]


const Work = () => {

  const[project, setProject] = useState(projects[0])

  //slider change function:
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-outline">{project.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index)=>(
                    <li key={index} className="text-lg text-accent">{item.name}
                    {index !== project.stack.length - 1 && '.'}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20 "></div>
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                  </Link>

                  {/* github project button */}
                  <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                  </Link>
                </div>
                </div>
          </div>
            <div className="w-full xl:w-[50%]">
                <Swiper 
                  spaceBetween={30} 
                  slidesPerView={1} 
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                  >
                  {projects.map((project, index)=>(
                      <SwiperSlide key={index} className="w-full">
                          <div className="h-[430px] w-[650px] relative group flex justify-center items-center bg-pink-50/20">
                              <div className="relative w-full h-full">
                               <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* img */}
                                <Image 
                                  src={project.image}
                                  alt="project-image"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                          </div>
                          {/* slider btns */}
                          <WorkSliderBtns containerStyles='flex gap-2 text-white absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none
                          ' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
                      </SwiperSlide>
                  ))}
                </Swiper>
            </div>
          
          </div>
      </div>
    </motion.section>
  )
}

export default Work
