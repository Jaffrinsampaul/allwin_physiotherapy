"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Activity,
  Shield,
  Target,
  Brain,
  Dumbbell,
  Stethoscope,
  Award,
  ExternalLink,
} from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"
import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"

export default function PhysiotherapyHospital() {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
      title: "Sports Physiotherapy",
      description:
        "Specialized treatment for sports injuries, performance enhancement, and injury prevention for athletes.",
      features: ["Injury Assessment", "Recovery Planning", "Performance Optimization"],
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "Neurological Rehabilitation",
      description: "Expert care for stroke, spinal cord injuries, and neurological conditions to restore function.",
      features: ["Stroke Recovery", "Balance Training", "Motor Skills Development"],
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Orthopedic Rehabilitation",
      description: "Post-surgical recovery and treatment for musculoskeletal conditions and joint problems.",
      features: ["Post-Surgery Care", "Joint Mobility", "Pain Management"],
    },
    {
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: "Cardiac Rehabilitation",
      description: "Comprehensive cardiac recovery programs to improve heart health and overall fitness.",
      features: ["Exercise Programs", "Heart Health Monitoring", "Lifestyle Counseling"],
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children with developmental delays and physical challenges.",
      features: ["Developmental Support", "Motor Skills Training", "Family Education"],
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Pain Management",
      description: "Advanced techniques for chronic pain relief and improved quality of life.",
      features: ["Chronic Pain Relief", "Manual Therapy", "Exercise Therapy"],
    },
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Patients Treated" },
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Years Experience" },
    { icon: <Stethoscope className="w-6 h-6" />, value: "25+", label: "Expert Therapists" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Patient Rating" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/allwin-logo.jpeg"
                  alt="Allwin Physiotherapy Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Allwin Physiotherapy Clinic</h1>
                <p className="text-sm text-gray-600">Rehabilitation Center</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">Book Appointment</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 100} animation="scaleIn">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <ScrollAnimation>
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Our Specialties</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Physiotherapy Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer a wide range of specialized physiotherapy treatments tailored to your unique needs and
                  recovery goals.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100} animation="fadeInUp">
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        {service.icon}
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-6">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fadeInLeft">
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">About Allwin</Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Dedicated to Your Complete Recovery</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    With over 15 years of experience, Allwin Physiotherapy Clinic has been at the forefront of
                    rehabilitation medicine, helping thousands of patients regain their mobility and return to active,
                    pain-free lives.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Evidence-Based Treatment</h4>
                        <p className="text-gray-600">Latest research-backed techniques and protocols</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Personalized Care Plans</h4>
                        <p className="text-gray-600">Tailored treatment programs for each patient</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Team</h4>
                        <p className="text-gray-600">Certified physiotherapists with specialized training</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-16 h-16 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Patient-Centered Care</h3>
                    <p className="text-gray-600">Your comfort and recovery are our top priorities</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation>
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to begin your recovery journey? Contact us to schedule your consultation.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0} animation="fadeInUp">
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                  <CardHeader
                    className="text-center"
                    onClick={() => window.open("https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5?g_st=aw", "_blank")}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white flex items-center justify-center gap-2">
                      Visit Us
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      123 Health Street
                      <br />
                      Medical District
                      <br />
                      City, State 12345
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={100} animation="fadeInUp">
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                  <CardHeader className="text-center" onClick={() => window.open("tel:+919363727207", "_self")}>
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Call Us</CardTitle>
                    <CardDescription className="text-gray-300">
                      +91 93637 27207
                      <br />
                      Emergency: +91 93637 27207
                      <br />
                      Mon-Fri: 7AM-7PM
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200} animation="fadeInUp">
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                  <CardHeader
                    className="text-center"
                    onClick={() => window.open("mailto:allwin.physiotherapy@gmail.com", "_self")}
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Email Us</CardTitle>
                    <CardDescription className="text-gray-300">
                      allwin.physiotherapy@gmail.com
                      <br />
                      appointments@allwin.com
                      <br />
                      We respond within 24 hours
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={300} animation="fadeInUp">
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors"
                  onClick={() => window.open("tel:+919363727207", "_self")}
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Book Your Appointment Now
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/allwin-logo.jpeg"
                  alt="Allwin Physiotherapy Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold">Allwin Physiotherapy Clinic</span>
            </div>
            <div className="text-sm">
              © 2024 Allwin Physiotherapy Clinic. All rights reserved. | Licensed Healthcare Facility
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
