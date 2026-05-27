"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const VISITED_KEY = "portfolio-visited"

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(VISITED_KEY)) {
      setLoading(false)
      return
    }

    const timer1 = setTimeout(() => setShowWelcome(true), 1500)
    const timer2 = setTimeout(() => {
      sessionStorage.setItem(VISITED_KEY, "1")
      setLoading(false)
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const letters = "Welcome".split("")

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        >
          <div className="min-h-[6rem] flex items-center justify-center">
            {!showWelcome ? (
              <motion.h1
                className="text-8xl font-bold text-accent tracking-widest"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {" </> "}
              </motion.h1>
            ) : (
              <motion.div
                className="flex gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-8xl font-bold text-accent inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      transform: `translateY(${i % 2 === 0 ? "0px" : "8px"})`,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="text-8xl font-bold text-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  .
                </motion.span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
