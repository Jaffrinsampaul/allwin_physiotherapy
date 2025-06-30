"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, ArrowLeft, Users, Clock, Target, Brain, Activity, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function PediatricPhysiotherapyClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const conditions = [
    {
      name: "Cerebral Palsy",
      description: "Movement and posture disorders affecting motor development",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
    },
    {
      name: "Developmental Delays",
      description: "Delays in reaching motor milestones and physical development",
      icon: <Target className="w-6 h-6 text-green-600" />,
    },
    {
      name: "Muscular Dystrophy",
      description: "Progressive muscle weakness and degeneration conditions",
      icon: <Activity className="w-6 h-6 text-red-600" />,
    },
    {
      name: "Spina Bifida",
      description: "Spinal cord defects affecting mobility and sensation",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
    },
    {
      name: "Down Syndrome",
      description: "Genetic condition affecting muscle tone and development",
      icon: <Heart className="w-6 h-6 text-pink-600" />,
    },
    {
      name: "Autism Spectrum Disorders",
      description: "Motor planning and coordination challenges",
      icon: <Users className="w-6 h-6 text-orange-600" />,
    },
  ]

  const ageGroups = [
    {
      age: "0-2 Years",
      title: "Early Intervention",
      focus: ["Motor milestone development", "Muscle tone improvement", "Sensory integration", "Parent education"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      age: "3-5 Years",
      title: "Preschool Development",
      focus: ["Gross motor skills", "Balance and coordination", "Play-based therapy", "School readiness"],
      color: "bg-green-100 text-green-800",
    },
    {
      age: "6-12 Years",
      title: "School Age",
      focus: ["Sports participation", "Strength building", "Independence skills", "Peer interaction"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      age: "13-18 Years",
      title: "Adolescent Care",
      focus: ["Transition planning", "Vocational preparation", "Self-advocacy", "Adult independence"],
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const treatments = [
    {
      name: "Neurodevelopmental Treatment (NDT)",
      description: "Specialized approach for children with neurological conditions",
      techniques: ["Bobath technique", "Handling and positioning", "Movement facilitation"],
    },
    {
      name: "Sensory Integration Therapy",
      description: "Helping children process and respond to sensory information",
      techniques: ["Sensory diet planning", "Environmental modifications", "Adaptive equipment"],
    },
    {
      name: "Gait Training",
      description: "Walking pattern improvement and mobility enhancement",
      techniques: ["Assistive device training", "Balance activities", "Strength exercises"],
    },
    {
      name: "Aquatic Therapy",
      description: "Water-based exercises for improved movement and strength",
      techniques: ["Buoyancy exercises", "Resistance training", "Relaxation techniques"],
    },
    {
      name: "Play-Based Therapy",
      description: "Fun, engaging activities that promote development",
      techniques: ["Therapeutic games", "Motor skill activities", "Social interaction"],
    },
    {
      name: "Family-Centered Care",
      description: "Involving families in the treatment process",
      techniques: ["Parent training", "Home exercise programs", "Caregiver support"],
    },
  ]

  const milestones = [
    { age: "2-3 months", milestone: "Lifts head when on tummy" },
    { age: "4-6 months", milestone: "Rolls over, sits with support" },
    { age: "7-9 months", milestone: "Sits without support, crawls" },
    { age: "10-12 months", milestone: "Pulls to stand, cruises" },
    { age: "12-15 months", milestone: "Walks independently" },
    { age: "18-24 months", milestone: "Runs, climbs stairs" },
    { age: "2-3 years", milestone: "Jumps, pedals tricycle" },
    { age: "4-5 years", milestone: "Hops, skips, catches ball" },
  ]

  const benefits = [
    {
      title: "Improved Motor Skills",
      description: "Enhanced gross and fine motor development",
      icon: <Target className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Better Independence",
      description: "Increased ability to perform daily activities",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Enhanced Quality of Life",
      description: "Improved participation in family and community activities",
      icon: <Heart className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Family Support",
      description: "Education and resources for parents and caregivers",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-800">Pediatric Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pediatric Physiotherapy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized physiotherapy services for children from birth to 18 years. Helping your child reach their
              full potential through play-based, family-centered care.
            </p>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Age-Specific Care Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <Badge className={`mb-2 ${group.color}`}>{group.age}</Badge>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.focus.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {condition.icon}
                    <CardTitle className="text-lg">{condition.name}</CardTitle>
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

      {/* Treatment Approaches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Treatment Approaches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-700">{treatment.name}</CardTitle>
                  <CardDescription className="text-gray-600">{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-800">Techniques Include:</h4>
                    {treatment.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
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

      {/* Developmental Milestones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Motor Development Milestones</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-gray-600 mb-8">
              Understanding typical motor development helps identify when intervention may be needed
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-pink-600" />
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {milestone.age}
                  </Badge>
                  <p className="text-sm text-gray-700">{milestone.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Pediatric Physiotherapy</h2>
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

      {/* Family-Centered Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-800">Family-Centered Care</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We Include the Whole Family</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our pediatric physiotherapy approach recognizes that families are the most important part of a child's
                development. We work closely with parents, caregivers, and siblings to create a supportive environment
                for growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parent Education</h4>
                    <p className="text-gray-600">Teaching families how to support development at home</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Home Exercise Programs</h4>
                    <p className="text-gray-600">Customized activities for daily practice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sibling Support</h4>
                    <p className="text-gray-600">Including brothers and sisters in the therapy process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-16 h-16 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Family Partnership</h3>
                <p className="text-gray-600">Working together for your child's success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Pediatric Physiotherapy</h2>
            <p className="text-xl text-gray-600">
              Early intervention can make a significant difference in your child's development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Delayed motor milestones",
              "Difficulty with balance or coordination",
              "Muscle weakness or low tone",
              "Frequent falls or clumsiness",
              "Difficulty participating in age-appropriate activities",
              "Concerns about posture or movement patterns",
              "Recovery after injury or surgery",
              "Diagnosed developmental conditions",
              "School or daycare expressing concerns",
            ].map((sign, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Give Your Child the Best Start</h2>
          <p className="text-xl mb-8">
            Schedule a consultation to discuss your child's development and how we can help them thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-pink-600 hover:bg-gray-100"
              onClick={() => window.open("tel:+919363727207", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 93637 27207
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-pink-600 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/919363727207?text=Hi%2C%20I%20need%20pediatric%20physiotherapy%20consultation%20for%20my%20child.",
                  "_blank",
                )
              }
            >
              WhatsApp Consultation
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            We also offer home visits for children who are more comfortable in familiar environments
          </p>
        </div>
      </section>
    </div>
  )
}
