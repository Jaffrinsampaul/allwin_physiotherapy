import type { Metadata } from "next"
import PediatricPhysiotherapyClient from "./PediatricPhysiotherapyClient"

export const metadata: Metadata = {
  title: "Pediatric Physiotherapy - Children's Physical Therapy in Tirunelveli",
  description:
    "Specialized pediatric physiotherapy services in Tirunelveli for children with cerebral palsy, developmental delays, muscular dystrophy, and other conditions. Family-centered care from birth to 18 years.",
  keywords: [
    "pediatric physiotherapy Tirunelveli",
    "children physiotherapy",
    "cerebral palsy treatment",
    "developmental delays therapy",
    "pediatric rehabilitation",
    "child physiotherapist",
    "early intervention",
    "muscular dystrophy treatment",
    "spina bifida therapy",
    "autism physiotherapy",
    "down syndrome therapy",
    "pediatric home visits",
  ],
  openGraph: {
    title: "Pediatric Physiotherapy - Children's Physical Therapy in Tirunelveli",
    description:
      "Specialized pediatric physiotherapy services for children with developmental conditions. Family-centered care with play-based therapy approaches.",
    images: ["/images/allwin-logo.jpeg"],
  },
}

export default function PediatricPhysiotherapy() {
  return <PediatricPhysiotherapyClient />
}
