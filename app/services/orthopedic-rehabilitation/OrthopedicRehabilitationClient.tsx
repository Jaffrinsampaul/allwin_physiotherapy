"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Phone, ArrowLeft, Bone, Activity, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function OrthopedicRehabilitationClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const conditions = [
    {
      name: "Knee Replacement Recovery",
      description: "Post-surgical rehabilitation for total and partial knee replacements",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      timeline: "6-12 weeks",
    },
    {
      name: "Hip Replacement Recovery",
      description: "Comprehensive recovery program for hip replacement surgeries",
      icon: <Bone className="w-6 h-6 text-green-600" />,
      timeline: "8-12 weeks",
    },
    {
      name: "Shoulder Surgery Recovery",
      description: "Rotator cuff repairs, shoulder arthroscopy, and joint replacements",
      icon: <Activity className="w-6 h-6 text-purple-600" />,
      timeline: "12-16 weeks",
    },
    {
      name: "Fracture Rehabilitation",
      description: "Recovery from bone fractures and cast removal rehabilitation",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      timeline: "4-8 weeks",
    },
    {
      name: "Spinal Surgery Recovery",
      description: "Post-operative care for spinal fusion and disc surgeries",
      icon: <Target className="w-6 h-6 text-orange-600" />,
      timeline: "12-24 weeks",
    },
    {
      name: "Arthritis Management",
      description: "Conservative treatment for osteoarthritis and rheumatoid arthritis",
      icon: <Bone className="w-6 h-6 text-teal-600" />,
      timeline: "Ongoing",
    },
  ]

  const phases = [
    {
      phase: "Phase 1: Protection",
      duration: "0-2 weeks post-surgery",
      goals: ["Pain management", "Wound healing", "Prevent complications", "Basic mobility"],
      activities: ["Gentle range of motion", "Breathing exercises", "Positioning", "Ice therapy"],
    },
    {
      phase: "Phase 2: Motion",
      duration: "2-6 weeks post-surgery",
      goals: ["Restore range of motion", "Reduce swelling", "Begin strengthening", "Improve function"],
      activities: ["Active exercises", "Manual therapy", "Stretching", "Weight bearing progression"],
    },
    {
      phase: "Phase 3: Strength",
      duration: "6-12 weeks post-surgery",
      goals: ["Build muscle strength", "Improve endurance", "Enhance stability", "Functional training"],
      activities: ["Resistance exercises", "Balance training", "Functional movements", "Sport-specific training"],
    },
    {
      phase: "Phase 4: Function",
      duration: "12+ weeks post-surgery",
      goals: ["Return to activities", "Prevent re-injury", "Optimize performance", "Long-term maintenance"],
      activities: ["Advanced exercises", "Activity-specific training", "Home program", "Lifestyle modification"],
    },
  ]

  const treatments = [
    {
      name: "Manual Therapy",
      description: "Hands-on techniques to improve joint mobility and reduce pain",
      techniques: ["Joint mobilization", "Soft tissue massage", "Myofascial release"],
    },
    {
      name: "Exercise Therapy",
      description: "Progressive strengthening and conditioning programs",
      techniques: ["Resistance training", "Functional exercises", "Proprioceptive training"],
    },
    {
      name: "Modalities",
      description: "Physical agents to reduce pain and promote healing",
      techniques: ["Ultrasound therapy", "Electrical stimulation", "Heat/cold therapy"],
    },
    {
      name: "Gait Training",
      description: "Walking pattern correction and mobility aids training",
      techniques: ["Walker training", "Crutch training", "Stair climbing"],
    },
    {
      name: "Functional Training",
      description: "Activities of daily living and work-specific tasks",
      techniques: ["Transfer training", "Lifting techniques", "Ergonomic education"],
    },
    {
      name: "Patient Education",
      description: "Knowledge and skills for long-term success",
      techniques: ["Home exercise programs", "Activity modification", "Prevention strategies"],
    },
  ]

  const benefits = [
    {
      title: "Faster Recovery",
      description: "Accelerated healing and return to normal activities",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Pain Reduction",
      description: "Effective pain management without over-reliance on medications",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Improved Function",
      description: "Better mobility, strength, and ability to perform daily tasks",
      icon: <Activity className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Prevent Complications",
      description: "Reduced risk of blood clots, muscle atrophy, and joint stiffness",
      icon: <Target className="w-8 h-8 text-red-600" />,
    },
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">Orthopedic Excellence</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Orthopedic Rehabilitation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert post-surgical rehabilitation and musculoskeletal treatment to help you regain strength, mobility,
              and return to your active lifestyle safely and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Orthopedic Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {condition.icon}
                      <CardTitle className="text-lg">{condition.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {condition.timeline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{condition.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Phases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recovery Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-blue-700">{phase.phase}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {phase.duration}
                      </Badge>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Goals:</h4>
                      <div className="space-y-2">
                        {phase.goals.map((goal, goalIndex) => (
                          <div key={goalIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Activities:</h4>
                      <div className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{treatment.name}</CardTitle>
                  <CardDescription className="text-gray-600">{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-800">Techniques Include:</h4>
                    {treatment.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{technique}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Orthopedic Rehabilitation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Start Your Recovery Journey</h2>
          <p className="text-xl mb-8">Expert orthopedic rehabilitation to get you back to your best</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open("tel:+919363727207", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 93637 27207
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/919363727207?text=Hi%2C%20I%20need%20orthopedic%20rehabilitation%20consultation.",
                  "_blank",
                )
              }
            >
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
