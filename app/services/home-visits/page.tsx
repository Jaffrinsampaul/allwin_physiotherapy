import type { Metadata } from "next"
import HomeVisitsClient from "./HomeVisitsClient"

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Services in Tirunelveli - Allwin Clinic",
  description:
    "Professional physiotherapy at your home in Tirunelveli. Convenient home visit services for elderly, post-surgery patients, and those with mobility issues.",
  keywords: [
    "home visit physiotherapy Tirunelveli",
    "physiotherapist home visits",
    "elderly physiotherapy",
    "post surgery home care",
  ],
}

export default function HomeVisits() {
  return <HomeVisitsClient />
}
