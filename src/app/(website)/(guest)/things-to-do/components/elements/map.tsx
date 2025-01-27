'use client'

import { useRef, useEffect, useState } from "react"
import type { Location } from "../../types/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"
import Image from "next/image"

interface MapProps {
  locations: Location[]
  selectedLocation: string | null
  setSelectedLocation: (location: string | null) => void
}

export default function Map({ locations, selectedLocation, setSelectedLocation }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      if (mapRef.current) {
        const { width } = mapRef.current.getBoundingClientRect()
        setScale(width / 1000) // Assuming 1000px is our base width
      }
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <TooltipProvider>
      <div ref={mapRef} className="relative h-full bg-black overflow-hidden">
        <Image
          src="/map.png"
          alt="Map of California"
          fill
          className="w-full h-full object-contain"
        />
        {locations.map((location) => (
          <Tooltip key={location.id}>
            <TooltipTrigger asChild>
              <div
                className="absolute"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex items-center">
                  <button
                    className={cn(
                      "rounded-full transition-colors duration-300",
                      selectedLocation === location.id ? "bg-primary" : "bg-white",
                    )}
                    style={{
                      width: `${Math.max(8 * scale, 6)}px`,
                      height: `${Math.max(8 * scale, 6)}px`,
                    }}
                    onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                    aria-label={`Select ${location.name}`}
                  />
                  <span
                    className="ml-2 text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    style={{ fontSize: `${Math.max(12 * scale, 10)}px` }}
                  >
                    {location.name}
                  </span>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5} className="animate-in zoom-in-50 duration-300">
              <p>{location.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

