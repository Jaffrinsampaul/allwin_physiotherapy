"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function PainManagementClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const painTypes = [
    { name: "Back Pain", description: "Lower back pain, upper back pain, and spinal conditions" },
    { name: "Neck Pain", description: "Cervical spine issues, whiplash, and neck stiffness" },
    { name: "Sciatica", description: "Nerve pain radiating from lower back to legs" },
    { name: "Joint Pain", description: "Knee, hip, shoulder, and other joint-related pain" },
    { name: "Fibromyalgia", description: "Widespread musculoskeletal pain and tenderness" },
    { name: "Arthritis Pain", description: "Osteoarthritis and rheumatoid arthritis management" },
  ]

  const treatments = [
    { name: "Manual Therapy", description: "Hands-on techniques to reduce pain and improve mobility", icon: "🤲" },
    { name: "Exercise Therapy", description: "Targeted exercises to strengthen and stabilize", icon: "💪" },
    { name: "Heat/Cold Therapy", description: "Thermal treatments to reduce inflammation and pain", icon: "🌡️" },
    { name: "TENS Therapy", description: "Electrical stimulation for pain relief", icon: "⚡" },
    { name: "Dry Needling", description: "Trigger point therapy for muscle pain relief", icon: "📍" },
    { name: "Postural Correction", description: "Addressing postural issues contributing to pain", icon: "🧍" },
  ]

  const approach = [
    { step: "Pain Assessment", description: "Comprehensive evaluation of pain patterns and triggers" },
    { step: "Root Cause Analysis", description: "Identifying underlying causes of chronic pain" },
    { step: "Personalized Plan", description: "Customized treatment strategy for your specific needs" },
    { step: "Progress Monitoring", description: "Regular assessment and plan adjustments" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800">Pain Relief</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pain Management Physiotherapy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break free from chronic pain with our comprehensive pain management approach. Evidence-based treatments to
              help you regain control of your life.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Pain We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painTypes.map((pain, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="w-5 h-5 text-red-600 mr-2" />
                    {pain.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{pain.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pain Management Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="h-full text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{treatment.icon}</div>
                  <CardTitle className="text-lg">{treatment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{treatment.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pain Management Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{item.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Don't Let Pain Control Your Life</h2>
          <p className="text-xl mb-8">Start your journey to pain-free living today</p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-red-600 hover:bg-gray-100"
            onClick={() => window.open("tel:+919363727207", "_self")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 93637 27207
          </Button>
        </div>
      </section>
    </div>
  )
}
