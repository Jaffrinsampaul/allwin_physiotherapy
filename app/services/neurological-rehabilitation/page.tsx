import type { Metadata } from "next"
import NeurologicalRehabilitationClient from "./NeurologicalRehabilitationClient"

export const metadata: Metadata = {
  title: "Neurological Rehabilitation - Stroke & Brain Injury Recovery in Tirunelveli",
  description:
    "Expert neurological physiotherapy in Tirunelveli. Specialized rehabilitation for stroke, spinal cord injuries, Parkinson's disease, and other neurological conditions.",
  keywords: [
    "neurological rehabilitation Tirunelveli",
    "stroke physiotherapy",
    "Parkinson's treatment",
    "brain injury rehabilitation",
  ],
}

export default function NeurologicalRehabilitation() {
  return <NeurologicalRehabilitationClient />
}
