import type { Metadata } from "next"
import OrthopedicRehabilitationClient from "./OrthopedicRehabilitationClient"

export const metadata: Metadata = {
  title: "Orthopedic Rehabilitation - Post-Surgery Recovery in Tirunelveli",
  description:
    "Expert orthopedic rehabilitation in Tirunelveli for knee replacement, hip surgery, fracture recovery, and musculoskeletal conditions. Comprehensive post-surgical care.",
  keywords: [
    "orthopedic rehabilitation Tirunelveli",
    "post surgery physiotherapy",
    "knee replacement recovery",
    "hip replacement rehabilitation",
    "fracture physiotherapy",
    "joint replacement recovery",
    "orthopedic physiotherapy",
    "musculoskeletal rehabilitation",
  ],
}

export default function OrthopedicRehabilitation() {
  return <OrthopedicRehabilitationClient />
}
