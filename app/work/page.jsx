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
import { useAnimationDelay } from "@/hooks/useAnimationDelay";


const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'Sentinel Observer',
    description: 'Full-stack fleet monitoring dashboard — register nodes, ingest CPU/RAM/ping metrics, and watch live health, alerts, logs, and per-node inspection.',
    stack:[
      { name: 'Next.js'}, {name: 'TailwindCSS'}, {name: 'Typescript'}, {name: 'Supabase'},{name: 'Postgres'},],
    image: '/sentinel.png',
    live: 'https://sentinel-observer.vercel.app/',
    github: 'https://github.com/Konstantin907/sentinel-observer',
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'InterviewAI',
    description:
      'Full-stack mock interview platform — register by role track, run timed sessions with typed or dictated answers, and get scored feedback from a local evaluation engine.',
    stack: [
      { name: 'Next.js' },
      { name: 'Express' },
      { name: 'TypeScript' },
      { name: 'MongoDB' },
      { name: 'TailwindCSS' },
    ],
    image: '/interview-ai.png',
    live: 'https://interview-mock-ai-app.vercel.app/',
    github: 'https://github.com/Konstantin907/interview-mock-ai-app',
  },
  {
    num: '03',
    category: 'Fullstack',
    title: 'Draftly',
    description:
      'Real-time collaborative whiteboard — JWT auth with refresh-token rotation, role-based boards, infinite canvas with pen, shapes and sticky notes, Socket.IO live cursors, and debounced autosave to Postgres.',
    stack: [
      { name: 'Next.js' },
      { name: 'Express' },
      { name: 'TypeScript' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
      { name: 'Socket.IO' },
    ],
    image: '/draftly.png',
    live: 'https://canvas-app-alpha-six.vercel.app/login',
    github: 'https://github.com/Konstantin907/canvas-app',
  },
  {
    num: '04',
    category: 'Fullstack NextJS with PostgreSQL',
    title: 'E-Commerce Application',
    description: 'E-Commerce Platform with GSAP Scroll & Letter animations, register/login, marketplace, Add item, interactive review section and comment section ,cart-items, filtering, Stripe checkout tilting cards, debouced input.',
    stack:[
      { name: 'NextJS'}, { name: 'GSAP'},{name: 'Typescript'},{name: 'GSAP'},
      {name: 'Nodejs'},{name: 'PostreSQL'},{name: 'oAuth'},{name: 'Cloudinary'},{ name: 'Neon DB' }],
    image: '/04.png',
    live: 'https://online-shopping-beige-two.vercel.app/',
    github: 'https://github.com/Konstantin907/online-shopping',
  },
]


const Work = () => {
  const delay = useAnimationDelay(0.35, 2.4)
  const [project, setProject] = useState(projects[0])

  //slider change function:
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:min-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] min-h-[320px] xl:min-h-[400px]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize min-h-[2.6em]">
                {project.category} project
              </h2>
              <p className="text-white/60 min-h-[120px]">{project.description}</p>


              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 min-h-[72px] content-start">
                {project.stack.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ y: -6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-3 py-1 text-[11px] font-semibold rounded-full bg-white/10 border border-white/10 text-accent text-center cursor-pointer"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && "."}
                  </motion.li>
                ))}
              </ul>



              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative h-[400px] w-full">
                    {/* ambient glow */}
                    <div className="pointer-events-none absolute -inset-6 z-0 rounded-3xl bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* browser window frame */}
                    <div className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-2xl shadow-black/40 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                      {/* title bar */}
                      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="mx-auto flex max-w-[70%] items-center gap-2 truncate rounded-md bg-black/30 px-3 py-1 text-[11px] text-white/40">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span className="truncate">{project.live}</span>
                        </div>
                      </div>

                      {/* screenshot */}
                      <div className="relative flex-1 overflow-hidden bg-black/40">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 1280px) 100vw, 600px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  <WorkSliderBtns
                    containerStyles="flex gap-2 text-white absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work
