"use client"

import { motion } from "framer-motion"
import Image from "next/image"


const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div 
        initial={{opacity: 0}} 
        animate={{
            opacity:1,
            transition:{delay: 2, duration: 0.4, ease:'easeIn'}
      }}>
        <motion.div 
         initial={{opacity: 0}} 
         animate={{
             opacity:1,
             transition:{delay: 2.4, duration: 0.4, ease:'easeInOut'}
       }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute mt-10 bg-transparent sm:w-[200px] sm:right-12 sm:-mt-4 lg:mt-10 lg:right-0">
            <Image 
                src="/avvatar.png"
                priority
                quality={100}
                fill
                alt="profile"
                className="object-contain"
            />
        </motion.div>
      </motion.div>

      {/* circle */}
      <motion.svg className="w=[290px] xl:w-[506px] h-[300px] xl:h-[506px]" 
      fill='transparent'
      viewBox='0 0 506 506'
      xmlns='hhtp://www.w3.org/2000/svg'
      >
        
        <motion.circle 
            cx='253' 
            cy='253' 
            r='250' 
            stroke='#00ff99' 
            strokeWidth='4'
            strokeLinejoin='round'
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate:[120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType:"reverse",
            }}
        />
      </motion.svg>
    </div>
  )
}

export default Photo
