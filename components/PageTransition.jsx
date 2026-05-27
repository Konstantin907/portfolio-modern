"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const PageTransition = ({ children }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.45, duration: 0.35, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.35, duration: 0.45, ease: "easeOut" },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
