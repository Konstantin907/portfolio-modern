"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

// variants:
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center
    py-12 xl:py-0"
    >
      <div className="container mx-auto text-white/80">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-[80px] "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex-1 flex flex-col p-5 justify-center gap-6 group cursor-pointer"
              whileHover={{
                scale: 1.05,
                rotateX: 20,
                rotateY: 10,
                borderRadius: "20px",
                boxShadow: "0px 12px 30px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold 
                      text-outline text-transparent 
                      group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full
                      bg-white group-hover:bg-accent transition-all duration-500
                      flex justify-center items-center hover:-rotate-45
                      "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500
                  "
              >
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services