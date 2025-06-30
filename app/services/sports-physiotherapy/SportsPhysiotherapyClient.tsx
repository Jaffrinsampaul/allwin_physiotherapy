"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function SportsPhysiotherapyClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const conditions = [
    "Ankle Sprains",
    "ACL/MCL Injuries",
    "Tennis Elbow",
    "Golfer's Elbow",
    "Shoulder Impingement",
    "Rotator Cuff Injuries",
    "Hamstring Strains",
    "Groin Injuries",
    "IT Band Syndrome",
    "Plantar Fasciitis",
  ]

  const treatments = [
    { name: "Manual Therapy", description: "Hands-on techniques to restore joint mobility and reduce pain" },
    { name: "Exercise Therapy", description: "Customized strengthening and conditioning programs" },
    { name: "Sports Massage", description: "Therapeutic massage to enhance recovery and performance" },
    { name: "Taping & Strapping", description: "Kinesio taping and supportive strapping techniques" },
    { name: "Biomechanical Analysis", description: "Movement assessment to prevent future injuries" },
    { name: "Return-to-Sport Programs", description: "Graduated programs to safely return to competition" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Sports Excellence</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sports Physiotherapy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get back in the game stronger with our specialized sports physiotherapy services. Expert treatment for
              athletes of all levels, from weekend warriors to professional competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sports Injuries We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">{condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Treatment Approach</h2>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Back in the Game?</h2>
          <p className="text-xl mb-8">Book your sports physiotherapy consultation today</p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-blue-600 hover:bg-gray-100"
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
