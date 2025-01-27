export interface Recommendation {
  id: string
  name: string
  location: string
  description: string
  whyWeLoveIt: string
  tags: string[]
}

export interface Location {
  id: string
  name: string
  x: number
  y: number
}

