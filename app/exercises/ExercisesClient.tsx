"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function ExercisesClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Exercises", count: 24 },
    { id: "back", name: "Back Pain", count: 6 },
    { id: "neck", name: "Neck Pain", count: 4 },
    { id: "knee", name: "Knee Problems", count: 5 },
    { id: "shoulder", name: "Shoulder Issues", count: 4 },
    { id: "posture", name: "Posture Correction", count: 3 },
    { id: "strength", name: "Strength Building", count: 2 },
  ]

  const exercises = [
    {
      id: 1,
      title: "Cat-Cow Stretch for Lower Back Pain",
      category: "back",
      duration: "5-10 minutes",
      difficulty: "Beginner",
      description: "Gentle spinal mobility exercise to relieve lower back tension and improve flexibility.",
      benefits: ["Reduces back stiffness", "Improves spinal mobility", "Relieves muscle tension"],
      videoId: "K9bK0BwKFjs",
      youtubeUrl: "https://www.youtube.com/watch?v=K9bK0BwKFjs",
      instructions: [
        "Start on hands and knees in tabletop position",
        "Arch your back and look up (Cow pose)",
        "Round your spine toward ceiling (Cat pose)",
        "Repeat slowly 10-15 times",
      ],
      precautions: ["Avoid if you have severe back injury", "Move slowly and gently", "Stop if pain increases"],
    },
    {
      id: 2,
      title: "Neck Rolls for Cervical Stiffness",
      category: "neck",
      duration: "3-5 minutes",
      difficulty: "Beginner",
      description: "Gentle neck mobility exercise to reduce stiffness and improve range of motion.",
      benefits: ["Reduces neck stiffness", "Improves mobility", "Relieves tension headaches"],
      videoId: "JUP_YdYyfQw",
      youtubeUrl: "https://www.youtube.com/watch?v=JUP_YdYyfQw",
      instructions: [
        "Sit or stand with good posture",
        "Slowly drop ear to shoulder",
        "Gently roll head forward and to other side",
        "Complete 5 slow circles each direction",
      ],
      precautions: ["Avoid if you have neck injury", "Move very slowly", "Don't force the movement"],
    },
    {
      id: 3,
      title: "Wall Push-Ups for Shoulder Strength",
      category: "shoulder",
      duration: "5-8 minutes",
      difficulty: "Beginner",
      description: "Modified push-ups to strengthen shoulder and chest muscles safely.",
      benefits: ["Strengthens shoulders", "Improves posture", "Builds upper body strength"],
      videoId: "Kb9_3Ipj_eI",
      youtubeUrl: "https://www.youtube.com/watch?v=Kb9_3Ipj_eI",
      instructions: [
        "Stand arm's length from wall",
        "Place palms flat against wall at shoulder height",
        "Lean in toward wall, then push back",
        "Repeat 10-15 times for 2-3 sets",
      ],
      precautions: ["Keep core engaged", "Don't hold breath", "Progress gradually"],
    },
    {
      id: 4,
      title: "Knee to Chest Stretch",
      category: "back",
      duration: "5-10 minutes",
      difficulty: "Beginner",
      description: "Gentle stretch to relieve lower back pain and hip tightness.",
      benefits: ["Stretches lower back", "Relieves hip tension", "Improves flexibility"],
      videoId: "yYBj_Nd8SLg",
      youtubeUrl: "https://www.youtube.com/watch?v=yYBj_Nd8SLg",
      instructions: [
        "Lie on your back with knees bent",
        "Bring one knee toward chest",
        "Hold for 20-30 seconds",
        "Repeat with other leg",
      ],
      precautions: ["Move gently", "Don't pull too hard", "Keep other foot flat on floor"],
    },
    {
      id: 5,
      title: "Seated Spinal Twist",
      category: "back",
      duration: "5-8 minutes",
      difficulty: "Beginner",
      description: "Gentle spinal rotation to improve mobility and reduce stiffness.",
      benefits: ["Improves spinal rotation", "Reduces stiffness", "Helps digestion"],
      videoId: "ZzJkCS3up1k",
      youtubeUrl: "https://www.youtube.com/watch?v=ZzJkCS3up1k",
      instructions: [
        "Sit tall with feet flat on floor",
        "Place right hand on left knee",
        "Gently twist to the left",
        "Hold 20-30 seconds, repeat other side",
      ],
      precautions: ["Keep spine straight", "Twist gently", "Don't force the movement"],
    },
    {
      id: 6,
      title: "Straight Leg Raises for Knee Strength",
      category: "knee",
      duration: "8-10 minutes",
      difficulty: "Intermediate",
      description: "Strengthening exercise for quadriceps muscles to support knee joint.",
      benefits: ["Strengthens quadriceps", "Supports knee joint", "Improves stability"],
      videoId: "l8FQbzHA8Y0",
      youtubeUrl: "https://www.youtube.com/watch?v=l8FQbzHA8Y0",
      instructions: [
        "Lie on back with one knee bent",
        "Keep other leg straight",
        "Lift straight leg 6 inches off ground",
        "Hold 5 seconds, lower slowly",
      ],
      precautions: ["Don't arch your back", "Keep movements controlled", "Start with few repetitions"],
    },
    {
      id: 7,
      title: "Doorway Chest Stretch",
      category: "posture",
      duration: "3-5 minutes",
      difficulty: "Beginner",
      description: "Stretch to counteract forward head posture and rounded shoulders.",
      benefits: ["Opens chest muscles", "Improves posture", "Reduces shoulder tension"],
      videoId: "suxCKeFZhXs",
      youtubeUrl: "https://www.youtube.com/watch?v=suxCKeFZhXs",
      instructions: [
        "Stand in doorway with arm against frame",
        "Step forward gently",
        "Feel stretch across chest",
        "Hold 30 seconds each arm",
      ],
      precautions: ["Don't overstretch", "Keep core engaged", "Breathe normally"],
    },
    {
      id: 8,
      title: "Bridge Exercise for Core Strength",
      category: "strength",
      duration: "5-10 minutes",
      difficulty: "Intermediate",
      description: "Strengthening exercise for glutes, hamstrings, and core muscles.",
      benefits: ["Strengthens core", "Improves stability", "Supports lower back"],
      videoId: "wPM8icPu6H8",
      youtubeUrl: "https://www.youtube.com/watch?v=wPM8icPu6H8",
      instructions: [
        "Lie on back with knees bent",
        "Lift hips off ground",
        "Form straight line from knees to shoulders",
        "Hold 5 seconds, lower slowly",
      ],
      precautions: ["Don't arch back excessively", "Squeeze glutes", "Keep core tight"],
    },
  ]

  const filteredExercises =
    selectedCategory === "all" ? exercises : exercises.filter((exercise) => exercise.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tirunelveli" />
        <meta name="geo.position" content="8.7139;77.7567" />
        <meta name="ICBM" content="8.7139, 77.7567" />

        {/* Content classification */}
        <meta name="content-language" content="en" />
        <meta name="audience" content="patients, healthcare seekers, physiotherapy patients" />
        <meta name="subject" content="Physiotherapy Exercise Videos and Home Rehabilitation" />

        {/* Video-specific meta tags */}
        <meta name="video:duration" content="600" />
        <meta name="video:tag" content="physiotherapy,exercise,rehabilitation,back pain,neck pain,knee strengthening" />

        {/* Structured data for VideoObject */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Physiotherapy Exercise Videos - Home Rehabilitation",
              description:
                "Professional physiotherapy exercise videos for back pain, neck pain, knee problems, and recovery. Step-by-step instructions from certified physiotherapists.",
              thumbnailUrl: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              uploadDate: "2024-12-30",
              duration: "PT10M",
              contentUrl: "https://allwinphysiotherapy.com/exercises",
              embedUrl: "https://www.youtube.com/embed/K9bK0BwKFjs",
              publisher: {
                "@type": "Organization",
                name: "Allwin Physiotherapy Clinic",
                logo: {
                  "@type": "ImageObject",
                  url: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                },
              },
            }),
          }}
        />

        {/* Structured data for HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Do Physiotherapy Exercises at Home",
              description:
                "Step-by-step guide to performing physiotherapy exercises safely at home for pain relief and rehabilitation.",
              image: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              totalTime: "PT30M",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: "0",
              },
              supply: [
                {
                  "@type": "HowToSupply",
                  name: "Exercise mat (optional)",
                },
                {
                  "@type": "HowToSupply",
                  name: "Wall space",
                },
                {
                  "@type": "HowToSupply",
                  name: "Comfortable clothing",
                },
              ],
              tool: [
                {
                  "@type": "HowToTool",
                  name: "Video instructions",
                },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Warm up",
                  text: "Start with gentle movements to warm up your muscles",
                  image: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                },
                {
                  "@type": "HowToStep",
                  name: "Follow video instructions",
                  text: "Watch the exercise video and follow the step-by-step instructions",
                  image: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                },
                {
                  "@type": "HowToStep",
                  name: "Cool down",
                  text: "End with gentle stretches and relaxation",
                  image: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                },
              ],
            }),
          }}
        />

        {/* Structured data for FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are these exercise videos safe to follow at home?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, these exercises are designed for home use. However, always consult with a physiotherapist before starting any exercise program, especially if you have existing injuries or medical conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often should I do these physiotherapy exercises?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most exercises can be done daily, but frequency depends on your condition and fitness level. Start slowly and gradually increase as tolerated. Consult our physiotherapists for personalized recommendations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I do if I experience pain during exercises?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stop the exercise immediately if you experience pain. Some mild discomfort is normal, but sharp or increasing pain is not. Contact Allwin Physiotherapy Clinic for professional guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need any equipment for these exercises?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most exercises require no equipment and can be done with just a wall and floor space. An exercise mat is optional for comfort during floor exercises.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

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
              <Badge className="mb-4 bg-blue-100 text-blue-800">Exercise Library</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Physiotherapy Exercise Videos</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional exercise demonstrations and guidance for effective home rehabilitation and pain management.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Important Safety Notice</h3>
                <p className="text-gray-700 text-sm">
                  These exercises are for educational purposes only. Always consult with a qualified physiotherapist
                  before starting any exercise program. Stop immediately if you experience pain or discomfort. For
                  personalized treatment, contact Allwin Physiotherapy Clinic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Exercise Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Exercise Videos */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExercises.map((exercise) => {
                return (
                  <Card key={exercise.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      {/* Video Embed */}
                      <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${exercise.videoId}`}
                          title={exercise.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                      <div className="absolute top-2 left-2 flex gap-2">
                        <Badge className={getDifficultyColor(exercise.difficulty)}>{exercise.difficulty}</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="bg-white">
                          <Clock className="w-3 h-3 mr-1" />
                          {exercise.duration}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{exercise.title}</CardTitle>
                      </div>
                      <CardDescription>{exercise.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">Benefits:</h4>
                        <div className="space-y-1">
                          {exercise.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Instructions */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">Instructions:</h4>
                        <ol className="space-y-1">
                          {exercise.instructions.map((instruction, index) => (
                            <li key={index} className="text-sm text-gray-700 flex">
                              <span className="text-blue-600 font-medium mr-2">{index + 1}.</span>
                              <span>{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Precautions */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 text-yellow-600 mr-1" />
                          Precautions:
                        </h4>
                        <div className="space-y-1">
                          {exercise.precautions.map((precaution, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{precaution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Exercise Program?</h2>
            <p className="text-xl mb-8">
              Get a customized exercise plan designed specifically for your condition and recovery goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open("tel:+919363727207", "_self")}
              >
                <Target className="w-5 h-5 mr-2" />
                Consult Our Experts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() =>
                  window.open(
                    "https://wa.me/919363727207?text=Hi%2C%20I%20need%20a%20personalized%20exercise%20program.",
                    "_blank",
                  )
                }
              >
                WhatsApp for Custom Plan
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
