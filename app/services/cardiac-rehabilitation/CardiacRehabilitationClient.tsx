"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, ArrowLeft, Activity, Shield, Target, Users, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function CardiacRehabilitationClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const conditions = [
    {
      name: "Post Heart Attack",
      description: "Recovery and prevention program after myocardial infarction",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      duration: "12-16 weeks",
    },
    {
      name: "Heart Surgery Recovery",
      description: "Rehabilitation after bypass surgery, valve replacement, or angioplasty",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      duration: "8-12 weeks",
    },
    {
      name: "Heart Failure Management",
      description: "Exercise therapy and lifestyle modification for heart failure patients",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      duration: "Ongoing",
    },
    {
      name: "Angina Management",
      description: "Exercise training to improve chest pain and exercise tolerance",
      icon: <Target className="w-6 h-6 text-purple-600" />,
      duration: "12-24 weeks",
    },
    {
      name: "Cardiac Risk Reduction",
      description: "Prevention program for high-risk individuals",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      duration: "12-16 weeks",
    },
    {
      name: "Pacemaker/ICD Recovery",
      description: "Safe exercise program for device recipients",
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      duration: "6-8 weeks",
    },
  ]

  const phases = [
    {
      phase: "Phase 1: Inpatient",
      duration: "Hospital stay",
      description: "Early mobilization and education during hospital admission",
      activities: ["Bedside exercises", "Breathing techniques", "Basic walking", "Patient education"],
    },
    {
      phase: "Phase 2: Outpatient",
      duration: "2-12 weeks",
      description: "Supervised exercise training and risk factor modification",
      activities: ["Monitored exercise", "ECG monitoring", "Progressive training", "Lifestyle counseling"],
    },
    {
      phase: "Phase 3: Maintenance",
      duration: "Long-term",
      description: "Independent exercise and long-term lifestyle maintenance",
      activities: ["Home exercise program", "Community programs", "Regular monitoring", "Ongoing support"],
    },
  ]

  const components = [
    {
      title: "Exercise Training",
      description: "Supervised cardiovascular and strength training programs",
      icon: <Activity className="w-8 h-8 text-red-600" />,
      details: ["Aerobic exercise", "Resistance training", "Flexibility exercises", "Heart rate monitoring"],
    },
    {
      title: "Risk Factor Management",
      description: "Addressing modifiable cardiovascular risk factors",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      details: ["Blood pressure control", "Cholesterol management", "Diabetes management", "Weight management"],
    },
    {
      title: "Nutritional Counseling",
      description: "Heart-healthy diet education and meal planning",
      icon: <Target className="w-8 h-8 text-green-600" />,
      details: ["Low sodium diet", "Heart-healthy fats", "Portion control", "Meal planning"],
    },
    {
      title: "Psychological Support",
      description: "Addressing anxiety, depression, and lifestyle changes",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      details: ["Stress management", "Anxiety reduction", "Depression screening", "Family support"],
    },
  ]

  const benefits = [
    "Reduced risk of future cardiac events",
    "Improved exercise capacity and endurance",
    "Better quality of life and daily functioning",
    "Reduced symptoms like chest pain and shortness of breath",
    "Lower blood pressure and improved cholesterol levels",
    "Enhanced psychological well-being and confidence",
    "Reduced hospital readmissions",
    "Increased life expectancy",
  ]

  const exerciseGuidelines = [
    {
      type: "Aerobic Exercise",
      frequency: "3-5 times per week",
      intensity: "50-80% of heart rate reserve",
      duration: "20-60 minutes",
      examples: ["Walking", "Cycling", "Swimming", "Treadmill"],
    },
    {
      type: "Resistance Training",
      frequency: "2-3 times per week",
      intensity: "40-80% of 1RM",
      duration: "20-30 minutes",
      examples: ["Light weights", "Resistance bands", "Body weight exercises", "Circuit training"],
    },
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
            <Badge className="mb-4 bg-red-100 text-red-800">Heart Health</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cardiac Rehabilitation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cardiac rehabilitation program to help you recover from heart conditions, improve your
              cardiovascular health, and reduce the risk of future cardiac events.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cardiac Conditions We Treat</h2>
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
                      {condition.duration}
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

      {/* Rehabilitation Phases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cardiac Rehabilitation Phases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-red-700">{phase.phase}</CardTitle>
                  <Badge variant="outline">{phase.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{phase.description}</CardDescription>
                  <div className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Program Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{component.icon}</div>
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                  <CardDescription className="text-gray-600">{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {component.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Exercise Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {exerciseGuidelines.map((guideline, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">{guideline.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">Frequency:</h4>
                        <p className="text-sm text-gray-600">{guideline.frequency}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">Intensity:</h4>
                        <p className="text-sm text-gray-600">{guideline.intensity}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">Duration:</h4>
                        <p className="text-sm text-gray-600">{guideline.duration}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {guideline.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="outline" className="text-xs">
                            {example}
                          </Badge>
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Cardiac Rehabilitation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 text-center">
                <CardContent className="pt-4">
                  <Heart className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h2>
              <p className="text-gray-600">
                All cardiac rehabilitation programs are conducted under medical supervision with continuous monitoring
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">ECG Monitoring</h4>
                <p className="text-sm text-gray-600">Continuous heart rhythm monitoring during exercise</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Blood Pressure Checks</h4>
                <p className="text-sm text-gray-600">Regular monitoring before, during, and after exercise</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Emergency Preparedness</h4>
                <p className="text-sm text-gray-600">Trained staff and emergency equipment always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Strengthen Your Heart, Improve Your Life</h2>
          <p className="text-xl mb-8">Start your cardiac rehabilitation journey with expert guidance and support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() => window.open("tel:+919363727207", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 93637 27207
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/919363727207?text=Hi%2C%20I%20need%20cardiac%20rehabilitation%20consultation.",
                  "_blank",
                )
              }
            >
              WhatsApp Consultation
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">Physician referral required for cardiac rehabilitation programs</p>
        </div>
      </section>
    </div>
  )
}
