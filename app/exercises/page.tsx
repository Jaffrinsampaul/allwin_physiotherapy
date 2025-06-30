import type { Metadata } from "next"
import ExercisesClient from "./ExercisesClient"

export const metadata: Metadata = {
  title: "Free Physiotherapy Exercise Videos - Home Rehabilitation | Allwin Clinic Tirunelveli",
  description:
    "Watch professional physiotherapy exercise videos for back pain, neck pain, knee problems, shoulder issues, and post-surgery recovery. Free home rehabilitation exercises with step-by-step instructions from certified physiotherapists in Tirunelveli.",
  keywords: [
    // Primary exercise keywords
    "physiotherapy exercises",
    "exercise videos",
    "home physiotherapy exercises",
    "rehabilitation exercises",
    "physical therapy videos",
    "physiotherapy exercise videos",

    // Condition-specific keywords
    "back pain exercises",
    "neck pain exercises",
    "knee strengthening exercises",
    "shoulder exercises",
    "posture correction exercises",
    "core strengthening exercises",
    "spinal mobility exercises",
    "joint pain exercises",

    // Specific exercise names
    "cat cow stretch",
    "wall push ups",
    "knee to chest stretch",
    "seated spinal twist",
    "straight leg raises",
    "doorway chest stretch",
    "bridge exercise",
    "neck rolls exercise",

    // Location-based keywords
    "physiotherapy exercises Tirunelveli",
    "exercise videos Tirunelveli",
    "home exercises Tirunelveli",
    "rehabilitation videos Tirunelveli",
    "Allwin physiotherapy exercises",

    // Treatment-specific keywords
    "post surgery exercises",
    "stroke rehabilitation exercises",
    "sports injury exercises",
    "elderly exercises",
    "beginner physiotherapy exercises",
    "intermediate exercises",

    // Educational keywords
    "how to do physiotherapy exercises",
    "exercise instructions",
    "safe exercise techniques",
    "home workout for pain relief",
    "therapeutic exercises",
    "corrective exercises",

    // Professional keywords
    "physiotherapist recommended exercises",
    "certified exercise videos",
    "professional exercise guidance",
    "clinical exercise demonstrations",
    "evidence based exercises",
  ],
  authors: [{ name: "Allwin Physiotherapy Clinic" }],
  creator: "Allwin Physiotherapy Clinic",
  publisher: "Allwin Physiotherapy Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://allwinphysiotherapy.com"),
  alternates: {
    canonical: "/exercises",
  },
  openGraph: {
    title: "Free Physiotherapy Exercise Videos - Home Rehabilitation | Allwin Clinic",
    description:
      "Professional physiotherapy exercise videos for effective home rehabilitation. Step-by-step instructions for back pain, neck pain, knee problems, and recovery exercises.",
    url: "https://allwinphysiotherapy.com/exercises",
    siteName: "Allwin Physiotherapy Clinic",
    images: [
      {
        url: "/images/allwin-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Allwin Physiotherapy Clinic - Exercise Videos for Home Rehabilitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Physiotherapy Exercise Videos - Home Rehabilitation",
    description:
      "Professional exercise videos for back pain, neck pain, knee problems. Step-by-step physiotherapy instructions from certified therapists.",
    images: ["/images/allwin-logo.jpeg"],
    creator: "@allwinphysio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "healthcare",
  other: {
    // Additional SEO meta tags
    "article:section": "Healthcare",
    "article:tag": "physiotherapy, exercises, rehabilitation, pain relief",
    "og:video": "https://www.youtube.com/watch?v=K9bK0BwKFjs", // Featured video
    "video:duration": "600", // Average video duration in seconds
    "video:tag": "physiotherapy,exercise,rehabilitation,back pain,neck pain",
  },
}

export default function Exercises() {
  return <ExercisesClient />
}
