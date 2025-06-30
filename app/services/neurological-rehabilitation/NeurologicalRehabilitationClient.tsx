"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function NeurologicalRehabilitationClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const conditions = [
    "Stroke Recovery",
    "Spinal Cord Injuries",
    "Parkinson's Disease",
    "Multiple Sclerosis",
    "Traumatic Brain Injury",
    "Cerebral Palsy",
    "Guillain-Barré Syndrome",
    "Peripheral Neuropathy",
    "Balance Disorders",
    "Coordination Problems",
  ]

  const treatments = [
    { name: "Gait Training", description: "Specialized walking rehabilitation to improve mobility and independence" },
    { name: "Balance Therapy", description: "Exercises to improve stability and prevent falls" },
    { name: "Motor Skills Training", description: "Retraining of fine and gross motor movements" },
    { name: "Functional Training", description: "Activities of daily living practice and adaptation" },
    { name: "Cognitive Rehabilitation", description: "Exercises to improve memory, attention, and problem-solving" },
    { name: "Speech & Swallowing Support", description: "Coordination with speech therapy for comprehensive care" },
  ]

  const phases = [
    {
      phase: "Acute Phase",
      description: "Early intervention to prevent complications and begin recovery",
      duration: "0-3 months",
    },
    {
      phase: "Recovery Phase",
      description: "Intensive rehabilitation to maximize functional improvement",
      duration: "3-12 months",
    },
    {
      phase: "Maintenance Phase",
      description: "Long-term support to maintain gains and prevent decline",
      duration: "Ongoing",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Neurological Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Neurological Rehabilitation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive neurological physiotherapy to help you regain function and independence after stroke, brain
              injury, or neurological conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Recovery Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recovery Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{item.phase}</CardTitle>
                  <Badge variant="outline">{item.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Neurological Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <Brain className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-medium">{condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Treatment Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
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

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Start Your Recovery Journey</h2>
          <p className="text-xl mb-8">Expert neurological rehabilitation tailored to your needs</p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-purple-600 hover:bg-gray-100"
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
