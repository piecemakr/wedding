'use client'
 
import { useState } from "react"
import RecommendationList from "../elements/list"
import Map from "../elements/map"
import { Location } from "../../types/types"
import { recommendations, allTags } from "../../data/data"

const locations: Location[] = [
  { id: "auburn", name: "Auburn", x: 42, y: 32 },
  { id: "sacramento", name: "Sacramento", x: 40, y: 35 },
  { id: "tahoe", name: "Tahoe", x: 45, y: 30 },
  { id: "sanfrancisco", name: "San Francisco", x: 32, y: 40 },
  { id: "napavalley", name: "Napa Valley", x: 35, y: 37 },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <section className="flex flex-col items-center min-h-screen bg-background">
      <div className="flex w-full max-w-[1440px]">
        <div className="w-[720px] p-4 border-r">
          <RecommendationList
            recommendations={recommendations}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            allTags={allTags}
          />
        </div>
        <div className="flex-1 sticky top-0 h-screen">
          <Map locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        </div>
      </div>
    </section>
  )
}

