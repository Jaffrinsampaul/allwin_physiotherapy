"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Phone, Heart, Brain, Dumbbell, Target } from "lucide-react"

const slides = [
  {
    badge: "Trusted Healthcare Partner",
    title: "Your Journey to Recovery Starts Here",
    subtitle: "Recovery",
    description:
      "Expert physiotherapy services designed to restore your mobility, reduce pain, and enhance your quality of life with personalized treatment plans.",
    icon: <Heart className="w-16 h-16 text-blue-600" />,
    iconBg: "from-blue-100 to-green-100",
    iconTitle: "Advanced Therapy",
    iconDesc: "State-of-the-art equipment and techniques",
  },
  {
    badge: "Sports Excellence",
    title: "Get Back in the Game Stronger",
    subtitle: "Performance",
    description:
      "Specialized sports physiotherapy to help athletes recover from injuries and enhance their performance with cutting-edge rehabilitation techniques.",
    icon: <Dumbbell className="w-16 h-16 text-green-600" />,
    iconBg: "from-green-100 to-blue-100",
    iconTitle: "Sports Recovery",
    iconDesc: "Professional athlete rehabilitation",
  },
  {
    badge: "Neurological Care",
    title: "Restore Function and Independence",
    subtitle: "Rehabilitation",
    description:
      "Comprehensive neurological rehabilitation programs designed to help patients regain motor skills and improve quality of life after neurological conditions.",
    icon: <Brain className="w-16 h-16 text-purple-600" />,
    iconBg: "from-purple-100 to-pink-100",
    iconTitle: "Neuro Recovery",
    iconDesc: "Advanced neurological rehabilitation",
  },
  {
    badge: "Orthopedic Specialists",
    title: "Precision Care for Joint Health",
    subtitle: "Mobility",
    description:
      "Expert orthopedic physiotherapy focusing on post-surgical recovery, joint mobility, and musculoskeletal health restoration.",
    icon: <Target className="w-16 h-16 text-orange-600" />,
    iconBg: "from-orange-100 to-yellow-100",
    iconTitle: "Joint Care",
    iconDesc: "Specialized orthopedic treatment",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState("next") // "next" or "prev"

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide("next", (prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const changeSlide = (newDirection, indexFn) => {
    if (animating) return

    setAnimating(true)
    setDirection(newDirection)

    // Short delay to allow exit animations to start before changing slide
    setTimeout(() => {
      setCurrentSlide(indexFn)

      // Reset animating state after transition completes
      setTimeout(() => {
        setAnimating(false)
      }, 500) // Match this with the CSS transition duration
    }, 50)
  }

  const nextSlide = () => {
    changeSlide("next", (prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    changeSlide("prev", (prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  // Animation classes based on direction and animating state
  const contentClasses = `
    transform transition-all duration-700 ease-in-out
    ${
      animating
        ? direction === "next"
          ? "opacity-0 translate-x-8"
          : "opacity-0 -translate-x-8"
        : "opacity-100 translate-x-0"
    }
  `

  const imageClasses = `
    transform transition-all duration-700 ease-in-out
    ${
      animating
        ? direction === "next"
          ? "opacity-0 -translate-x-8"
          : "opacity-0 translate-x-8"
        : "opacity-100 translate-x-0"
    }
  `

  const iconClasses = `
    transform transition-all duration-700 delay-100 ease-in-out
    ${animating ? "opacity-0 scale-90" : "opacity-100 scale-100"}
  `

  const textClasses = `
    transform transition-all duration-700 delay-200 ease-in-out
    ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
  `

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Content Section */}
          <div className={`relative z-10 order-2 lg:order-1 ${contentClasses}`}>
            <div className="transition-all duration-500 delay-0">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{currentSlideData.badge}</Badge>
            </div>
            <div className="transition-all duration-500 delay-100">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {currentSlideData.title.split(currentSlideData.subtitle)[0]}
                <span className="text-blue-600">{currentSlideData.subtitle}</span>
                {currentSlideData.title.split(currentSlideData.subtitle)[1]}
              </h1>
            </div>
            <div className="transition-all duration-500 delay-200">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                {currentSlideData.description}
              </p>
            </div>
            <div className="transition-all duration-500 delay-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Image/Visual Section */}
          <div className={`relative order-1 lg:order-2 ${imageClasses}`}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className={`bg-gradient-to-br ${currentSlideData.iconBg} rounded-2xl p-6 md:p-8 h-80 md:h-96 flex items-center justify-center transition-all duration-700 relative overflow-hidden`}
              >
                <div className="text-center relative z-10">
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${iconClasses}`}
                  >
                    {currentSlideData.icon}
                  </div>
                  <div className={textClasses}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{currentSlideData.iconTitle}</h3>
                    <p className="text-gray-600 text-sm md:text-base px-4">{currentSlideData.iconDesc}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Positioned outside the container */}
              <button
                onClick={prevSlide}
                disabled={animating}
                className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20 border border-gray-200 disabled:opacity-70"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                disabled={animating}
                className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20 border border-gray-200 disabled:opacity-70"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !animating && setCurrentSlide(index)}
              disabled={animating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
