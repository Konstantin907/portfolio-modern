'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1)236 867 9118'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'konstantin.dev@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Vancouver, BC, Canada'
  },
]

const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className="py-6"
    >
      <div className="container mx-auto flex justify-center items-center min-h-screen">
  <div className="flex flex-col xl:flex-row gap-[30px]">
    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
      <ul className="flex flex-col gap-10 text-white/60 mt-[-200px]">
        {info.map((item, index) => (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-xl text-white/100">{item.description}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </motion.section>
  )
}

export default Contact
