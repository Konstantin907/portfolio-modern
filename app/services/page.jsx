"use client";

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs"


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Web development involves using technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, and Next.js to build and maintain websites and web applications.',
    href: "",
  },
  {
    num: '02',
    title: 'Front End Development',
    description: 'Frontend development uses HTML, CSS, JavaScript, and frameworks like React and Next.js to create the visual and interactive aspects of websites and applications.',
    href: "",
  },
  {
    num: '03',
    title: 'Back End Development',
    description: 'Backend development involves technologies like Node.js, SQL, MongoDB, Firebase, and server-side logic to manage databases, authentication, and application functionality behind the scenes.',
    href: "",
  },
  
  
]


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center
    py-12 xl:py-0'>
      <div className="container mx-auto text-white/80">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity:1, transition:{delay:2.4, duration: 0, ease: "easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-[80px] "
        >
          {services.map((service, index)=>(
              // top:
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                    <div
                      className="text-5xl font-extrabold 
                      text-outline text-transparent 
                      group-hover:text-outline-hover transition-all duration-500"
                    >{service.num}</div>
                    <Link href={service.href}
                      className="w-[70px] h-[70px] rounded-full
                      bg-white group-hover:bg-accent transition-all duration-500
                      flex justify-center items-center hover:-rotate-45
                      "
                    ><BsArrowDownRight className="text-primary text-3xl"/></Link> 
                </div>
                {/* heading */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500
                  "
                >{service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div
                className="border-b border-white/20 w-full"
                ></div>
              </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services