"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython
} from 'react-icons/fa'
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiTailwindcss, SiNextdotjs
} from 'react-icons/si'
import { SiPrisma } from "react-icons/si";

import { GrMysql } from "react-icons/gr";


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip' 
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'


//about
const about = {
  title: 'About me',
  description: "Curious, positive, geek. Maybe too curious tech geek.",
  info:[
    {
      fieldName: 'Name',
      fieldValue: 'Konstantin Ivanovic',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1)236 867 9118',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3 Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'konstantin.dev8@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Montengrin',
    },
    
  ]
}

//experience:
const experience = {
  icon: '',
  title: 'My experience',
  description: 'My positions in the past related to Web Development:',
  items: [
    {
      company: 'Stadion DOO Distribution',
      position: 'Full Stack Developer',
      duration: '2021-2022 and remote from 2023 to present.'
    },
    {
      company: 'Telekom T-Mobile',
      position: 'Full Stack Developer and IT sector',
      duration: '2020-2021'
    },
    {
      company: 'E-Commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2018-2021'
    }
  ]

}

//education:
const education = {
  icon: '',
  title: 'My edication',
  description: 'For my education, university education, 2 years of college in Canada, and online learning:',
  items: [
    {
      institution: 'Faculty of Science - University of Montenegro',
      position: 'Full Stack Software Engineer',
      duration: '2017-2021'
    },
    {
      institution: 'Cornerstone Community College of Canada',
      position: 'Web Developer Diploma',
      duration: '2022-2023'
    },
    {
      institution: 'Codecademy - Online coding',
      position: 'Front End Development',
      duration: '2023'
    },
  ]

}
//skills:
const skills = {
  icon: '',
  title: 'My skills',
  description: 'Profficient with Front End modern technologies: React, NextJS, and also backend: Node, SQL, Firebase:',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js'
    },
    {
      icon: <FaFigma />,
      name: 'figma'
    },
    {
      icon: <IoLogoFirebase />,
      name: 'firebase'
    },
    {
      icon: <GrMysql />,
      name: 'SQL'
    },
    {
      icon: <FaPython />,
      name: 'Python'
    },
    {
      icon: <SiPrisma />,
      name: 'Prisma'
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}} 
    animate={{
        opacity:1,
        transition:{delay: 0.4, duration: 0.4, ease:'easeIn'}
  }}
  className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 text-white/80'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' 
        className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList 
          className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'
          >
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
              <TabsContent
              value='experience' className='w-full'
              >
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p
                  className='max-w-[600px] text-white/60 mx-auto xl:mx-0'
                  >{experience.description}
                  </p>
                  <ScrollArea
                  className='h-[400px]'
                  >
                     <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index)=>(
                    
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>
                          {item.duration}
                        </span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-4'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                       
                    ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
        {/* education */}
              <TabsContent
              value='education' className='w-full'
              >
                 <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p
                  className='max-w-[700px] text-white/60 mx-auto xl:mx-0'
                  >{education.description}
                  </p>
                  <ScrollArea
                  className='h-[500px]'
                  >
                     <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item,index)=>(
                    
                      <li key={index} className='bg-[#232329] h-[234px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>
                          {item.position}
                        </span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                        <div className='flex items-center gap-4'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                       
                    ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent
              value='skills' className='w-full'
              >
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 mt-6 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill,index)=>(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300 '>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              {/* about */}
              <TabsContent
              value='about' className='w-full text-center xl:text-left'
              >
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-8 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index)=>(
                      <li key={index}
                      className='flex items-center justify-center xl:justify-start gap-8'
                      >
                        <span className='text-accent'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
