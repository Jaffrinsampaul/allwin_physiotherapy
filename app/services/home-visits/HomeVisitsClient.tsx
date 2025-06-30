"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Clock, CheckCircle, Phone, ArrowLeft, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function HomeVisitsClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    "Post-Surgical Rehabilitation",
    "Elderly Care Physiotherapy",
    "Stroke Recovery at Home",
    "Joint Pain Management",
    "Mobility Training",
    "Fall Prevention Programs",
    "Chronic Pain Management",
    "Neurological Rehabilitation",
    "Sports Injury Recovery",
  ]

  const benefits = [
    {
      title: "Comfort of Home",
      description: "Receive treatment in familiar surroundings",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Personalized Care",
      description: "One-on-one attention from expert therapists",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Appointments that fit your schedule",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Family Involvement",
      description: "Include family members in the recovery process",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  const process = [
    { step: "Initial Assessment", description: "Comprehensive evaluation of your condition and home environment" },
    { step: "Treatment Plan", description: "Customized therapy program designed for your specific needs" },
    { step: "Regular Sessions", description: "Scheduled visits with progress monitoring and plan adjustments" },
    { step: "Family Training", description: "Teaching family members how to assist with exercises and care" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Home Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Home Visit Physiotherapy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional physiotherapy services delivered to your doorstep. Perfect for patients who cannot visit our
              clinic due to mobility issues or other constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas in Tirunelveli</h2>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>We serve Palayamkottai, Perumalpuram, and surrounding areas</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Home Visits?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">{index + 1}</span>
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
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Book Your Home Visit Today</h2>
          <p className="text-xl mb-8">Professional physiotherapy in the comfort of your home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() => window.open("tel:+919363727207", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 93637 27207
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/919363727207?text=Hi%2C%20I%20need%20home%20visit%20physiotherapy%20services.",
                  "_blank",
                )
              }
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
