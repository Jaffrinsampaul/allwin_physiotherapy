"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  Car,
  Bus,
  ShipWheelIcon as Wheelchair,
  CreditCard,
  Shield,
  Star,
  Users,
} from "lucide-react"

export function LocalBusinessInfo() {
  const businessHours = [
    { day: "Monday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Tuesday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Wednesday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Thursday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Friday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Saturday", hours: "8:30 AM - 9:30 PM", status: "Open" },
    { day: "Sunday", hours: "Closed", status: "Closed" },
  ]

  const facilities = [
    { icon: <Wheelchair className="w-5 h-5" />, name: "Wheelchair Accessible", available: true },
    { icon: <Car className="w-5 h-5" />, name: "Parking Available", available: true },
    { icon: <Bus className="w-5 h-5" />, name: "Public Transport Access", available: true },
    { icon: <CreditCard className="w-5 h-5" />, name: "Card Payments", available: true },
    { icon: <Shield className="w-5 h-5" />, name: "Insurance Accepted", available: true },
    { icon: <Phone className="w-5 h-5" />, name: "Emergency Services", available: true },
  ]

  const certifications = [
    { name: "Licensed Healthcare Facility", authority: "Tamil Nadu Health Department" },
    { name: "Certified Physiotherapists", authority: "Indian Association of Physiotherapists" },
    { name: "ISO Certified Clinic", authority: "International Standards Organization" },
    { name: "Government Approved", authority: "Tirunelveli District Administration" },
  ]

  const currentTime = new Date()
  const currentDay = currentTime.toLocaleDateString("en-US", { weekday: "long" })
  const currentHour = currentTime.getHours()
  const currentMinute = currentTime.getMinutes()
  const currentTimeString = `${currentHour}:${currentMinute.toString().padStart(2, "0")}`

  const isOpen = () => {
    if (currentDay === "Sunday") return false
    const openTime = 8.5 // 8:30 AM
    const closeTime = 21.5 // 9:30 PM
    const currentDecimalTime = currentHour + currentMinute / 60
    return currentDecimalTime >= openTime && currentDecimalTime <= closeTime
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Business Hours */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                Business Hours
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge className={isOpen() ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                  {isOpen() ? "Open Now" : "Closed"}
                </Badge>
                <span className="text-sm text-gray-600">Current time: {currentTimeString}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-2 rounded ${
                      schedule.day === currentDay ? "bg-blue-50 border border-blue-200" : ""
                    }`}
                  >
                    <span className={`font-medium ${schedule.day === currentDay ? "text-blue-700" : "text-gray-700"}`}>
                      {schedule.day}
                    </span>
                    <span
                      className={`text-sm ${
                        schedule.status === "Open"
                          ? schedule.day === currentDay
                            ? "text-blue-600 font-medium"
                            : "text-gray-600"
                          : "text-red-600"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Emergency Services:</strong> Available 24/7 for urgent physiotherapy needs. Call{" "}
                  <a href="tel:+919363727207" className="font-medium underline">
                    +91 93637 27207
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Location */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 text-green-600 mr-2" />
                Contact & Location
              </CardTitle>
              <CardDescription>Get in touch or visit us in Tirunelveli</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      17, 7th St, Perumalpuram,
                      <br />
                      Palayamkottai, Tirunelveli,
                      <br />
                      Tamil Nadu 627007
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+919363727207" className="text-sm text-blue-600 hover:underline">
                      +91 93637 27207
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:allwin.physiotherpy@gmail.com" className="text-sm text-blue-600 hover:underline">
                      allwin.physiotherpy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Button
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919363727207?text=Hi%2C%20I%20need%20an%20appointment%20at%20Allwin%20Physiotherapy%20Clinic.",
                      "_blank",
                    )
                  }
                >
                  Book Appointment via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => window.open("https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Facilities & Certifications */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 text-purple-600 mr-2" />
                Facilities & Certifications
              </CardTitle>
              <CardDescription>Quality care with modern facilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Available Facilities</h4>
                  <div className="space-y-2">
                    {facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="text-green-600">{facility.icon}</div>
                        <span className="text-sm text-gray-700">{facility.name}</span>
                        {facility.available && <Badge className="bg-green-100 text-green-800 text-xs">Available</Badge>}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded">
                        <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                        <p className="text-xs text-gray-600">{cert.authority}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">4.9/5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">150+ Reviews</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
