import type { Metadata } from "next"
import CardiacRehabilitationClient from "./CardiacRehabilitationClient"

export const metadata: Metadata = {
  title: "Cardiac Rehabilitation - Heart Recovery Program in Tirunelveli",
  description:
    "Comprehensive cardiac rehabilitation in Tirunelveli for heart attack recovery, heart surgery, and cardiovascular health improvement. Medically supervised exercise programs.",
  keywords: [
    "cardiac rehabilitation Tirunelveli",
    "heart attack recovery",
    "heart surgery rehabilitation",
    "cardiovascular physiotherapy",
    "cardiac exercise program",
    "heart failure management",
    "cardiac risk reduction",
  ],
}

export default function CardiacRehabilitation() {
  return <CardiacRehabilitationClient />
}
