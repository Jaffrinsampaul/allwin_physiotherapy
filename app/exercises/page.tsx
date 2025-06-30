import type { Metadata } from "next"
import ExercisesClient from "./ExercisesClient"

export const metadata: Metadata = {
  title: "Exercise Videos - Physiotherapy Exercises at Home | Allwin Clinic",
  description:
    "Free physiotherapy exercise videos for back pain, neck pain, knee problems, and post-surgery recovery. Professional guidance from Allwin Physiotherapy Clinic Tirunelveli.",
  keywords: [
    "physiotherapy exercises",
    "exercise videos",
    "back pain exercises",
    "neck pain exercises",
    "knee exercises",
    "home exercises",
    "rehabilitation exercises",
    "physical therapy videos",
    "Tirunelveli physiotherapy exercises",
  ],
}

export default function Exercises() {
  return <ExercisesClient />
}
