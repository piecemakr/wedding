"use client"

import { useMemo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type { Recommendation } from "../../types/types"
import { Input } from "~/components/ui/input"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"

interface RecommendationListProps {
  recommendations: Recommendation[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedLocation: string | null
  setSelectedLocation: (location: string | null) => void
  selectedTags: string[]
  setSelectedTags: (tags: string[]) => void
  allTags: string[]
}

export default function RecommendationList({
  recommendations,
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedTags,
  setSelectedTags,
  allTags,
}: RecommendationListProps) {
  const [displayedRecommendations, setDisplayedRecommendations] = useState(recommendations)
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((rec) => {
      const matchesSearch =
        rec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rec.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesLocation = !selectedLocation || rec.location === selectedLocation
      const matchesTags = selectedTags.length === 0 || rec.tags.includes(selectedTags[0])
      return matchesSearch && matchesLocation && matchesTags
    })
  }, [recommendations, searchTerm, selectedLocation, selectedTags])

  useEffect(() => {
    if (JSON.stringify(filteredRecommendations) !== JSON.stringify(displayedRecommendations)) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayedRecommendations(filteredRecommendations)
        setIsAnimating(false)
      }, 300) // This should match the exit animation duration
      return () => clearTimeout(timer)
    }
  }, [filteredRecommendations, displayedRecommendations])

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedLocation(null)
    setSelectedTags([])
  }

  const isFiltered = searchTerm !== "" || selectedLocation !== null || selectedTags.length > 0

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Search recommendations or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={resetFilters} variant="outline" size="sm" disabled={!isFiltered}>
          Reset Filters
        </Button>
      </div>
      <Select
        value={selectedTags[0] || "All Tags"}
        onValueChange={(value) => setSelectedTags(value === "All Tags" ? [] : [value])}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Tags">All Tags</SelectItem>
          {allTags.map((tag) => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="space-y-4">
        <AnimatePresence>
          {!isAnimating &&
            displayedRecommendations.map((rec) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 border-b border-gray-200">
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rec.name + " " + rec.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-1">{rec.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{rec.location}</p>
                    <p className="mb-2">{rec.description}</p>
                    <p className="mb-2 italic">&quot;{rec.whyWeLoveIt}&quot;</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

