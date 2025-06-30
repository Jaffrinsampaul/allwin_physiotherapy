import type { Metadata } from "next"
import PainManagementClient from "./PainManagementClient"

export const metadata: Metadata = {
  title: "Pain Management Physiotherapy - Chronic Pain Relief in Tirunelveli",
  description:
    "Expert pain management physiotherapy in Tirunelveli. Specialized treatment for chronic pain, back pain, neck pain, sciatica, and fibromyalgia.",
  keywords: ["pain management Tirunelveli", "chronic pain treatment", "back pain physiotherapy", "sciatica treatment"],
}

export default function PainManagement() {
  return <PainManagementClient />
}
