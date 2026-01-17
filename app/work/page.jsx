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
    category: 'fullstack',
    title: 'Rental Application',
    description: 'Rental application with register/login, dashboard with chat feature, save a rental unit, create a new unit for rent.',
    stack:[
      { name: 'React.js'}, {name: 'SCSS'}, {name: 'Javascript'}, {name: 'MongoDB'},{name: 'Framer'},],
    image: '/project-rental.png',
    live: 'https://estate-fullstack-app.vercel.app/',
    github: 'https://github.com/Konstantin907/estate-fullstack-app',
  },

 
  {
    num: '02',
    category: 'fullstack',
    title: 'Fullstack Blog App',
    description: 'Registering, login, adding posts, create, like and comment all of the posts depending on your filtering.',
    stack:[
      { name: 'Django'}, {name: 'TailwindCSS'}, {name: 'Python'}],
    image: '/blog.png',
    live: 'django-blog-medium.onrender.com/',
    github: 'https://github.com/Konstantin907/django-blog-medium',
  },
  {
    num: '03',
    category: 'fullstack MERN',
    title: 'Planning Application',
    description: 'Planning app register/login feature, diagram planning feature calendar planning , weekly tick tasks , habit tracking and project planning in general.',
    stack:[
      { name: 'React.js'}, { name: 'Vite'},{name: 'Javascript'},
      {name: 'Nodejs'},{name: 'MongoDb'}],
    image: '/cube.png',
    live: 'https://planning-app-fullstack.vercel.app/',
    github: 'https://github.com/Konstantin907/planning-app',
  },
    {
    num: '04',
    category: 'Fullstack NEXTJS with PostgreSQL',
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

  const[project, setProject] = useState(projects[0])

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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>


              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
                  <div className="relative group flex justify-center items-center bg-black/20 rounded-xl overflow-hidden h-[400px]">
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <Image
                      src={project.image}
                      alt="project-image"
                      fill
                      className="object-contain p-4"
                    />
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
