import type { Recommendation } from "../types/types"

export const recommendations: Recommendation[] = [
  {
    id: "1",
    name: "Old Town Auburn",
    location: "auburn",
    description: "Historic district with Gold Rush-era buildings and antique shops.",
    whyWeLoveIt: "We love strolling through the charming streets, imagining life during the Gold Rush era.",
    tags: ["Sight Seeing", "Shopping"],
  },
  {
    id: "2",
    name: "California State Capitol",
    location: "sacramento",
    description: "Seat of California government with beautiful gardens and museum.",
    whyWeLoveIt: "The stunning architecture and lush gardens make for a perfect afternoon picnic spot.",
    tags: ["Sight Seeing", "History"],
  },
  {
    id: "3",
    name: "Lake Tahoe",
    location: "tahoe",
    description: "Crystal-clear lake surrounded by mountains, perfect for outdoor activities.",
    whyWeLoveIt: "We got engaged here! The breathtaking views and serene atmosphere make it our special place.",
    tags: ["Outdoor Activities", "Sight Seeing"],
  },
  {
    id: "4",
    name: "Golden Gate Bridge",
    location: "sanfrancisco",
    description: "Iconic suspension bridge and symbol of San Francisco.",
    whyWeLoveIt: "Walking across the bridge at sunset is our favorite way to end a day in the city.",
    tags: ["Sight Seeing", "Landmark"],
  },
  {
    id: "5",
    name: "Napa Valley Wine Train",
    location: "napavalley",
    description: "Luxury train ride through scenic Napa Valley vineyards.",
    whyWeLoveIt: "It's where we had our first date! The romantic atmosphere and stunning views are unbeatable.",
    tags: ["Food & Beverage", "Sight Seeing"],
  },
  {
    id: "6",
    name: "Auburn State Recreation Area",
    location: "auburn",
    description: "Beautiful park with hiking trails and river access.",
    whyWeLoveIt: "We love spending weekends here, hiking and picnicking by the river.",
    tags: ["Outdoor Activities", "Nature"],
  },
  {
    id: "7",
    name: "Old Sacramento",
    location: "sacramento",
    description: "Restored historic district with Gold Rush-era architecture and museums.",
    whyWeLoveIt: "The old-timey charm and delicious saltwater taffy shops are our guilty pleasure!",
    tags: ["History", "Shopping"],
  },
  {
    id: "8",
    name: "Emerald Bay State Park",
    location: "tahoe",
    description: "Stunning bay with a Scandinavian-style castle and great hiking.",
    whyWeLoveIt: "The view from the top of the trail is our favorite spot for watching the sunset over the lake.",
    tags: ["Outdoor Activities", "Sight Seeing"],
  },
  {
    id: "9",
    name: "Alcatraz Island",
    location: "sanfrancisco",
    description: "Former prison turned national park with audio tour.",
    whyWeLoveIt: "The night tour gave us chills! It's a must-visit for anyone interested in history.",
    tags: ["History", "Sight Seeing"],
  },
  {
    id: "10",
    name: "Castello di Amorosa",
    location: "napavalley",
    description: "13th-century-style Tuscan castle winery with tours and tastings.",
    whyWeLoveIt: "It's like stepping into a fairy tale! We love pretending we're royalty for a day.",
    tags: ["Food & Beverage", "Sight Seeing"],
  },
]

export const allTags = Array.from(new Set(recommendations.flatMap((rec) => rec.tags))).sort()

