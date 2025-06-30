import type { Metadata } from "next"
import SportsPhysiotherapyClient from "./SportsPhysiotherapyClient"

export const metadata: Metadata = {
  title: "Sports Physiotherapy - Expert Sports Injury Treatment in Tirunelveli",
  description:
    "Professional sports physiotherapy services in Tirunelveli. Specialized treatment for sports injuries, performance enhancement, and injury prevention for athletes of all levels.",
  keywords: [
    "sports physiotherapy Tirunelveli",
    "sports injury treatment",
    "athlete rehabilitation",
    "performance enhancement",
  ],
}

export default function SportsPhysiotherapy() {
  return <SportsPhysiotherapyClient />
}
