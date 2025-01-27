'use client'

import type React from "react"
import { useState, useEffect } from "react"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [dateAnimationStarted, setDateAnimationStarted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true)
    })

    setTimeout(() => {
      setDateAnimationStarted(true)
    }, 200)

    setTimeout(() => {
      setLoading(false)
    }, 800)

  }, [])

  return (
    <div className={`fixed inset-0 bg-gray-100 z-50 overflow-hidden transition-all duration-1000 ease-in-out ${loading ? "h-screen" : "h-0"}`}>
      <div className="absolute sm:p-16 h-screen w-screen flex flex-col items-center justify-center">
        <div className="h-full w-full z-30 flex flex-col items-center justify-center ">
          <div className="text-4xl md:text-6xl font-bold relative mb-2">
            {["R", "O", "S", "I", "E", "\u00A0", "&", "\u00A0", "T", "R", "O", "Y"].map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${
                  animationStarted ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-xs translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div
            className={`text-md md:text-lg transition-all duration-500 font-sans font-bold tracking-[6px] ${
              dateAnimationStarted ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-xs translate-y-3"
            }`}
          >
            MAY 17, 2025
          </div>
        </div>
      </div>
    </div>
  )
}

