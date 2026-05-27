"use client"

import { useState, useEffect } from "react"

const VISITED_KEY = "portfolio-visited"

export function useAnimationDelay(routeDelay = 0.35, initialDelay = 2.4) {
  const [delay, setDelay] = useState(initialDelay)

  useEffect(() => {
    if (sessionStorage.getItem(VISITED_KEY)) {
      setDelay(routeDelay)
    }
  }, [routeDelay, initialDelay])

  return delay
}
