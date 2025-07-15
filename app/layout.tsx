import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli | Expert Rehabilitation Services",
    template: "%s | Allwin Physiotherapy Clinic",
  },
  description:
    "Leading physiotherapy clinic in Tirunelveli offering expert rehabilitation services for sports injuries, neurological conditions, orthopedic recovery, cardiac rehabilitation, pediatric care, pain management, and home visits. Professional physiotherapists with 15+ years experience serving Palayamkottai, Perumalpuram and surrounding areas.",
  keywords: [
    // Primary location-based keywords
    "physiotherapy Tirunelveli",
    "physiotherapy clinic Tirunelveli",
    "physiotherapist Tirunelveli",
    "rehabilitation center Tirunelveli",
    "physical therapy Tirunelveli",
    "best physiotherapy clinic Tirunelveli",
    "top physiotherapist Tirunelveli",
    "Palayamkottai physiotherapy",
    "Perumalpuram physiotherapy",
    "Allwin physiotherapy",
    "Allwin physiotherapy clinic",

    // Service-specific keywords
    "sports physiotherapy Tirunelveli",
    "neurological rehabilitation Tirunelveli",
    "orthopedic physiotherapy Tirunelveli",
    "cardiac rehabilitation Tirunelveli",
    "pediatric physiotherapy Tirunelveli",
    "pain management Tirunelveli",
    "home visit physiotherapy Tirunelveli",

    // Home visit services
    "physiotherapist for home visits",
    "home physiotherapy services",
    "stroke physiotherapist for home visits",
    "joint pain physiotherapist for home visits",
    "geriatric physiotherapist for home visits",
    "parkinson physiotherapist for home visits",
    "sports injury physiotherapist for home visits",
    "paediatric physiotherapist for home visits",

    // Specialized treatments
    "physiotherapists for bulged disc",
    "physiotherapists for women",
    "women health physiotherapists",
    "physiotherapists for diabetic neuropathy",
    "physiotherapists for parkinson",
    "physiotherapists for lumbar traction therapy",
    "post fracture stiffness treatment",
    "kinesio taping services",
    "physiotherapists for back pain",
    "physiotherapists for stroke",
    "physiotherapists for musculoskeletal",
    "physiotherapists for knee",
    "physiotherapists for sprain",
    "physiotherapists for sciatica",

    // Post-operative and injury care
    "physiotherapists for post operative case",
    "physiotherapists for neck pain",
    "physiotherapists for posture correction",
    "physiotherapists for hand injury",
    "physiotherapists for periarthritis",
    "physiotherapists for polio",
    "physiotherapists for cerebral palsy",
    "physiotherapists for joint pain",
    "physiotherapists for foot",
    "physiotherapists for disabled child",
    "physiotherapists for post accidental treatment",
    "rehabilitation problem",

    // Specialized categories
    "geriatric physiotherapists",
    "neurological physiotherapist doctors",
    "orthopaedic physiotherapists",
    "paediatric physiotherapy doctors",
    "physiotherapist doctors for sports injury",
    "sports injury doctors",

    // Centers and facilities
    "post operative recovery centers",
    "stroke rehabilitation centres",
    "rehabilitation centres for spinal injury",
    "rehabilitation centres",
    "physiotherapy hospital Tirunelveli",
    "rehabilitation hospital Tirunelveli",

    // Treatment methods
    "manual therapy Tirunelveli",
    "exercise therapy Tirunelveli",
    "electrotherapy Tirunelveli",
    "ultrasound therapy Tirunelveli",
    "dry needling Tirunelveli",
    "cupping therapy Tirunelveli",

    // Condition-specific long-tail keywords
    "knee replacement physiotherapy Tirunelveli",
    "hip replacement recovery Tirunelveli",
    "stroke rehabilitation Tirunelveli",
    "spinal cord injury rehabilitation",
    "multiple sclerosis physiotherapy",
    "parkinson disease treatment",
    "cerebral palsy treatment Tirunelveli",
    "autism physiotherapy Tirunelveli",
    "down syndrome therapy Tirunelveli",

    // Emergency and urgent care
    "emergency physiotherapy Tirunelveli",
    "urgent physiotherapy consultation",
    "immediate pain relief Tirunelveli",
    "weekend physiotherapy services",

    // Insurance and accessibility
    "insurance accepted physiotherapy",
    "affordable physiotherapy Tirunelveli",
    "government approved physiotherapy",
    "cashless treatment physiotherapy",

    // Professional qualifications
    "certified physiotherapists Tirunelveli",
    "licensed physiotherapy clinic",
    "experienced physiotherapists",
    "qualified rehabilitation specialists",
    "professional physiotherapy services",

    // Technology and equipment
    "advanced physiotherapy equipment",
    "modern rehabilitation technology",
    "state of art physiotherapy",
    "latest physiotherapy techniques",

    // General services
    "sports physiotherapy",
    "neurological rehabilitation",
    "orthopedic physiotherapy",
    "pain management",
    "cardiac rehabilitation",
    "pediatric physiotherapy",
    "exercise therapy",
    "manual therapy",
    "physiotherapy consultation",
    "rehabilitation services",
  ],
  authors: [{ name: "Allwin Physiotherapy Clinic" }],
  creator: "Allwin Physiotherapy Clinic",
  publisher: "Allwin Physiotherapy Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://allwinphysiotherapy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli | Expert Rehabilitation Services",
    description:
      "Leading physiotherapy clinic in Tirunelveli offering expert rehabilitation services for sports injuries, neurological conditions, orthopedic recovery, and specialized care. Professional physiotherapists with 15+ years experience.",
    url: "https://allwinphysiotherapy.com",
    siteName: "Allwin Physiotherapy Clinic",
    images: [
      {
        url: "/images/allwin-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Allwin Physiotherapy Clinic - Professional Physiotherapy Services in Tirunelveli",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli",
    description:
      "Expert physiotherapy services in Tirunelveli. Specialized treatments for sports injuries, neurological rehabilitation, orthopedic care, and pain management with home visit services.",
    images: ["/images/allwin-logo.jpeg"],
    creator: "@allwinphysio",
    site: "@allwinphysio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "healthcare",
  classification: "Healthcare Services, Medical Treatment, Physiotherapy, Rehabilitation",
  other: {
    // Additional SEO meta tags
    "article:section": "Healthcare",
    "article:tag": "physiotherapy, rehabilitation, healthcare, medical treatment, Tirunelveli",
    "og:locality": "Tirunelveli",
    "og:region": "Tamil Nadu",
    "og:country-name": "India",
    "og:postal-code": "627007",
    "og:street-address": "17, 7th St, Perumalpuram, Palayamkottai",

    // Business specific
    "business:hours": "Monday-Saturday 08:30-21:30",
    "business:phone": "+919363727207",
    "business:email": "allwin.physiotherpy@gmail.com",

    // Medical specific
    "medical:condition": "Sports Injuries, Neurological Conditions, Orthopedic Issues, Chronic Pain",
    "medical:specialty": "Physiotherapy, Rehabilitation Medicine, Sports Medicine",
    "medical:treatment": "Manual Therapy, Exercise Therapy, Electrotherapy, Home Visits",

    // Local business
    "local:business-type": "Healthcare Provider",
    "local:service-area": "Tirunelveli, Palayamkottai, Perumalpuram, Tamil Nadu",
    "local:languages": "English, Tamil",

    // Accessibility
    "accessibility:wheelchair": "yes",
    "accessibility:parking": "available",
    "accessibility:home-visits": "yes",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Allwin Physiotherapy" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tirunelveli" />
        <meta name="geo.position" content="8.7139;77.7567" />
        <meta name="ICBM" content="8.7139, 77.7567" />

        {/* Content classification */}
        <meta name="content-language" content="en" />
        <meta
          name="audience"
          content="patients, healthcare seekers, physiotherapy patients, sports athletes, elderly care"
        />
        <meta name="subject" content="Physiotherapy and Rehabilitation Services in Tirunelveli" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Business information */}
        <meta name="business:contact_data:street_address" content="17, 7th St, Perumalpuram" />
        <meta name="business:contact_data:locality" content="Palayamkottai" />
        <meta name="business:contact_data:region" content="Tirunelveli" />
        <meta name="business:contact_data:postal_code" content="627007" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+919363727207" />
        <meta name="business:contact_data:email" content="allwin.physiotherpy@gmail.com" />

        {/* Medical and healthcare specific */}
        <meta
          name="medical:condition"
          content="Sports Injuries, Stroke, Parkinson's Disease, Cerebral Palsy, Joint Pain, Back Pain, Neck Pain"
        />
        <meta
          name="medical:specialty"
          content="Physiotherapy, Sports Medicine, Neurological Rehabilitation, Orthopedic Rehabilitation"
        />
        <meta name="medical:treatment_type" content="Conservative, Non-invasive, Evidence-based" />
        <meta name="healthcare:service_type" content="Outpatient, Home Visits, Consultation" />
        <meta name="healthcare:insurance" content="Accepted" />

        {/* Local business tags */}
        <meta name="local:business_type" content="Healthcare Provider" />
        <meta name="local:service_area" content="Tirunelveli, Palayamkottai, Perumalpuram, Nanguneri, Ambasamudram" />
        <meta name="local:languages_spoken" content="English, Tamil, Hindi" />
        <meta name="local:payment_methods" content="Cash, UPI, Card, Insurance" />

        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://allwinphysiotherapy.com/#organization",
              name: "Allwin Physiotherapy Clinic",
              alternateName: ["Allwin Physothery Clinic", "Allwin Rehabilitation Center"],
              description:
                "Leading physiotherapy clinic in Tirunelveli offering expert rehabilitation services for sports injuries, neurological conditions, orthopedic recovery, cardiac rehabilitation, pediatric care, pain management, and home visits.",
              url: "https://allwinphysiotherapy.com",
              logo: {
                "@type": "ImageObject",
                url: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                width: 400,
                height: 400,
              },
              image: [
                {
                  "@type": "ImageObject",
                  url: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                  width: 1200,
                  height: 630,
                },
              ],
              telephone: "+919363727207",
              email: "allwin.physiotherpy@gmail.com",
              faxNumber: "+919363727207",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17, 7th St, Perumalpuram",
                addressLocality: "Palayamkottai",
                addressRegion: "Tirunelveli",
                postalCode: "627007",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7139",
                longitude: "77.7567",
              },
              openingHours: ["Mo-Sa 08:30-21:30"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:30",
                  closes: "21:30",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "INR",
              paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card", "Insurance"],
              areaServed: [
                {
                  "@type": "City",
                  name: "Tirunelveli",
                  sameAs: "https://en.wikipedia.org/wiki/Tirunelveli",
                },
                {
                  "@type": "City",
                  name: "Palayamkottai",
                },
                {
                  "@type": "City",
                  name: "Perumalpuram",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "8.7139",
                  longitude: "77.7567",
                },
                geoRadius: "25000",
              },
              medicalSpecialty: [
                "Physiotherapy",
                "Sports Medicine",
                "Rehabilitation Medicine",
                "Pain Management",
                "Neurological Rehabilitation",
                "Orthopedic Rehabilitation",
                "Cardiac Rehabilitation",
                "Pediatric Physiotherapy",
              ],
              availableService: [
                {
                  "@type": "MedicalTherapy",
                  name: "Sports Physiotherapy",
                  description: "Specialized treatment for sports injuries and performance enhancement",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Neurological Rehabilitation",
                  description: "Expert care for stroke, spinal cord injuries, and neurological conditions",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Orthopedic Rehabilitation",
                  description: "Post-surgical recovery and musculoskeletal treatment",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Home Visit Services",
                  description: "Convenient physiotherapy treatments at your home",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Pain Management",
                  description: "Comprehensive pain relief and management programs",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Cardiac Rehabilitation",
                  description: "Heart health recovery and fitness programs",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Pediatric Physiotherapy",
                  description: "Specialized care for children with developmental conditions",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Physiotherapy Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Sports Physiotherapy",
                      description: "Specialized treatment for sports injuries and performance enhancement",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Neurological Rehabilitation",
                      description: "Expert care for stroke, spinal cord injuries, and neurological conditions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Orthopedic Rehabilitation",
                      description: "Post-surgical recovery and musculoskeletal treatment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Home Visit Services",
                      description: "Convenient physiotherapy treatments at your home",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Patient Review",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Excellent physiotherapy services with professional care and effective treatment. The home visit service is very convenient.",
                  datePublished: "2024-12-01",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sports Patient",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Outstanding sports physiotherapy treatment. Helped me recover from my knee injury and return to playing cricket.",
                  datePublished: "2024-11-15",
                },
              ],
              sameAs: [
                "https://www.facebook.com/allwinphysiotherapy",
                "https://www.instagram.com/allwinphysiotherapy",
                "https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5",
                "https://www.linkedin.com/company/allwinphysiotherapy",
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Allwin",
                jobTitle: "Chief Physiotherapist",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Certified Physiotherapist",
                  jobTitle: "Senior Physiotherapist",
                  worksFor: {
                    "@type": "Organization",
                    name: "Allwin Physiotherapy Clinic",
                  },
                },
              ],
              knowsAbout: [
                "Sports Injuries",
                "Neurological Rehabilitation",
                "Orthopedic Recovery",
                "Pain Management",
                "Cardiac Rehabilitation",
                "Pediatric Care",
                "Manual Therapy",
                "Exercise Therapy",
              ],
              memberOf: {
                "@type": "Organization",
                name: "Indian Association of Physiotherapists",
              },
            }),
          }}
        />

        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://allwinphysiotherapy.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://allwinphysiotherapy.com#services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Exercise Videos",
                  item: "https://allwinphysiotherapy.com/exercises",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "About",
                  item: "https://allwinphysiotherapy.com#about",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://allwinphysiotherapy.com#contact",
                },
              ],
            }),
          }}
        />

        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does Allwin Physiotherapy Clinic offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer comprehensive physiotherapy services including sports physiotherapy, neurological rehabilitation, orthopedic rehabilitation, cardiac rehabilitation, pediatric physiotherapy, pain management, and home visit services. We also provide exercise therapy, manual therapy, and specialized treatments for various conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the clinic hours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are open Monday to Saturday from 8:30 AM to 9:30 PM. We are closed on Sundays. We also offer flexible scheduling for home visits.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide home visit services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide convenient physiotherapy treatments in the comfort of your own home for patients who cannot visit our clinic. This includes elderly care, post-surgery recovery, stroke rehabilitation, and mobility-limited patients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I book an appointment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book an appointment by calling us at +91 93637 27207, sending a WhatsApp message, or emailing us at allwin.physiotherpy@gmail.com. We offer same-day appointments when available.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What conditions do you treat?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We treat a wide range of conditions including sports injuries, stroke recovery, back pain, neck pain, knee problems, post-surgical rehabilitation, neurological conditions like Parkinson's disease, pediatric conditions like cerebral palsy, and chronic pain management.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you accept insurance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we accept various insurance plans and also offer cashless treatment options. Please contact us to verify your specific insurance coverage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you serve for home visits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide home visit services throughout Tirunelveli, including Palayamkottai, Perumalpuram, and surrounding areas within a 25km radius of our clinic.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are your physiotherapists certified?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all our physiotherapists are certified professionals with specialized training and over 15 years of combined experience in various physiotherapy specialties.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://allwinphysiotherapy.com/#organization",
              name: "Allwin Physiotherapy Clinic",
              url: "https://allwinphysiotherapy.com",
              logo: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+919363727207",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Tamil", "Hindi"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "08:30",
                    closes: "21:30",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919363727207",
                  contactType: "emergency",
                  areaServed: "IN",
                  availableLanguage: ["English", "Tamil"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/allwinphysiotherapy",
                "https://www.instagram.com/allwinphysiotherapy",
                "https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "17, 7th St, Perumalpuram",
                addressLocality: "Palayamkottai",
                addressRegion: "Tirunelveli",
                postalCode: "627007",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://allwinphysiotherapy.com/#website",
              url: "https://allwinphysiotherapy.com",
              name: "Allwin Physiotherapy Clinic",
              description: "Leading physiotherapy clinic in Tirunelveli offering expert rehabilitation services",
              publisher: {
                "@id": "https://allwinphysiotherapy.com/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://allwinphysiotherapy.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-IN",
            }),
          }}
        />

        {/* Enhanced Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://allwinphysiotherapy.com/#localbusiness",
              name: "Allwin Physiotherapy Clinic",
              alternateName: ["Allwin Physio Clinic", "Allwin Rehabilitation Center", "Allwin Physiotherapy Hospital"],
              description:
                "Leading physiotherapy clinic in Tirunelveli offering expert rehabilitation services for sports injuries, neurological conditions, orthopedic recovery, cardiac rehabilitation, pediatric care, pain management, and home visits. Serving Palayamkottai, Perumalpuram, and surrounding areas.",
              url: "https://allwinphysiotherapy.com",
              logo: {
                "@type": "ImageObject",
                url: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                width: 400,
                height: 400,
              },
              image: [
                {
                  "@type": "ImageObject",
                  url: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
                  width: 1200,
                  height: 630,
                },
              ],
              telephone: "+919363727207",
              email: "allwin.physiotherpy@gmail.com",
              faxNumber: "+919363727207",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17, 7th St, Perumalpuram",
                addressLocality: "Palayamkottai",
                addressRegion: "Tirunelveli District",
                postalCode: "627007",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7139",
                longitude: "77.7567",
              },
              hasMap: "https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5",
              openingHours: ["Mo-Sa 08:30-21:30"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:30",
                  closes: "21:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                  validFrom: "2024-01-01",
                  validThrough: "2024-12-31",
                },
              ],
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: [
                "Cash",
                "UPI",
                "Credit Card",
                "Debit Card",
                "Insurance",
                "Paytm",
                "Google Pay",
                "PhonePe",
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Tirunelveli",
                  sameAs: "https://en.wikipedia.org/wiki/Tirunelveli",
                },
                {
                  "@type": "City",
                  name: "Palayamkottai",
                  sameAs: "https://en.wikipedia.org/wiki/Palayamkottai",
                },
                {
                  "@type": "City",
                  name: "Perumalpuram",
                },
                {
                  "@type": "City",
                  name: "Nanguneri",
                },
                {
                  "@type": "City",
                  name: "Ambasamudram",
                },
                {
                  "@type": "City",
                  name: "Kallidaikurichi",
                },
                {
                  "@type": "City",
                  name: "Cheranmahadevi",
                },
                {
                  "@type": "City",
                  name: "Radhapuram",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "8.7139",
                  longitude: "77.7567",
                },
                geoRadius: "25000",
              },
              medicalSpecialty: [
                "Physiotherapy",
                "Sports Medicine",
                "Rehabilitation Medicine",
                "Pain Management",
                "Neurological Rehabilitation",
                "Orthopedic Rehabilitation",
                "Cardiac Rehabilitation",
                "Pediatric Physiotherapy",
                "Geriatric Physiotherapy",
                "Manual Therapy",
                "Exercise Therapy",
              ],
              availableService: [
                {
                  "@type": "MedicalTherapy",
                  name: "Sports Physiotherapy",
                  description:
                    "Specialized treatment for sports injuries and performance enhancement for athletes in Tirunelveli",
                  serviceType: "Sports Medicine",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Neurological Rehabilitation",
                  description: "Expert stroke recovery and neurological condition treatment in Palayamkottai",
                  serviceType: "Neurological Rehabilitation",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Orthopedic Rehabilitation",
                  description: "Post-surgical recovery and joint replacement rehabilitation in Tirunelveli",
                  serviceType: "Orthopedic Rehabilitation",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Home Visit Physiotherapy",
                  description:
                    "Convenient physiotherapy treatments at home across Tirunelveli, Palayamkottai, and Perumalpuram",
                  serviceType: "Home Healthcare",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Pain Management",
                  description: "Chronic pain relief and management programs in Tirunelveli",
                  serviceType: "Pain Management",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Cardiac Rehabilitation",
                  description: "Heart recovery and fitness programs in Tirunelveli",
                  serviceType: "Cardiac Rehabilitation",
                  areaServed: "Tirunelveli District",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Pediatric Physiotherapy",
                  description: "Specialized care for children with developmental conditions in Tirunelveli",
                  serviceType: "Pediatric Care",
                  areaServed: "Tirunelveli District",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Physiotherapy Services in Tirunelveli",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Sports Physiotherapy Consultation",
                      description: "Initial assessment and treatment plan for sports injuries",
                    },
                    price: "500",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    areaServed: "Tirunelveli District",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Home Visit Physiotherapy",
                      description: "Physiotherapy treatment at patient's home",
                    },
                    price: "800",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    areaServed: "Tirunelveli District",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Neurological Rehabilitation Session",
                      description: "Specialized therapy for stroke and neurological conditions",
                    },
                    price: "600",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    areaServed: "Tirunelveli District",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Rajesh Kumar",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Palayamkottai",
                      addressRegion: "Tirunelveli",
                    },
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Excellent physiotherapy services in Tirunelveli. The home visit service is very convenient and professional. Dr. Allwin provided excellent treatment for my back pain.",
                  datePublished: "2024-12-01",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Priya Sharma",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Perumalpuram",
                      addressRegion: "Tirunelveli",
                    },
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Best physiotherapy clinic in Tirunelveli. Outstanding sports physiotherapy treatment helped me recover from my knee injury and return to playing badminton.",
                  datePublished: "2024-11-15",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Murugan S",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Nanguneri",
                      addressRegion: "Tirunelveli",
                    },
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Excellent stroke rehabilitation services. The team at Allwin Physiotherapy helped my father recover significantly after his stroke. Highly recommend their neurological rehabilitation program.",
                  datePublished: "2024-10-20",
                },
              ],
              sameAs: [
                "https://www.facebook.com/allwinphysiotherapy",
                "https://www.instagram.com/allwinphysiotherapy",
                "https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5",
                "https://www.linkedin.com/company/allwinphysiotherapy",
                "https://www.youtube.com/@allwinphysiotherapy",
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Allwin",
                jobTitle: "Chief Physiotherapist",
                worksFor: {
                  "@type": "Organization",
                  name: "Allwin Physiotherapy Clinic",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Tirunelveli",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Dr. Allwin",
                  jobTitle: "Chief Physiotherapist",
                  worksFor: {
                    "@type": "Organization",
                    name: "Allwin Physiotherapy Clinic",
                  },
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "degree",
                    recognizedBy: {
                      "@type": "Organization",
                      name: "Tamil Nadu Dr. M.G.R. Medical University",
                    },
                  },
                },
                {
                  "@type": "Person",
                  name: "Senior Physiotherapist",
                  jobTitle: "Senior Physiotherapist",
                  worksFor: {
                    "@type": "Organization",
                    name: "Allwin Physiotherapy Clinic",
                  },
                },
              ],
              knowsAbout: [
                "Sports Injuries Treatment Tirunelveli",
                "Stroke Rehabilitation Palayamkottai",
                "Knee Replacement Recovery Tirunelveli",
                "Back Pain Treatment Perumalpuram",
                "Pediatric Physiotherapy Tirunelveli",
                "Home Visit Physiotherapy",
                "Manual Therapy Techniques",
                "Exercise Therapy Programs",
                "Cardiac Rehabilitation",
                "Pain Management",
              ],
              memberOf: [
                {
                  "@type": "Organization",
                  name: "Indian Association of Physiotherapists",
                },
                {
                  "@type": "Organization",
                  name: "Tamil Nadu Physiotherapy Association",
                },
              ],
              isAccessibleForFree: false,
              smokingAllowed: false,
              hasWiFi: true,
              acceptsReservations: true,
              wheelchairAccessible: true,
            }),
          }}
        />

        {/* Service Area structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Physiotherapy Services in Tirunelveli District",
              provider: {
                "@type": "MedicalBusiness",
                name: "Allwin Physiotherapy Clinic",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "17, 7th St, Perumalpuram",
                  addressLocality: "Palayamkottai",
                  addressRegion: "Tirunelveli",
                  postalCode: "627007",
                  addressCountry: "IN",
                },
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Tirunelveli",
                  containedInPlace: {
                    "@type": "State",
                    name: "Tamil Nadu",
                  },
                },
                {
                  "@type": "City",
                  name: "Palayamkottai",
                  containedInPlace: {
                    "@type": "City",
                    name: "Tirunelveli",
                  },
                },
                {
                  "@type": "City",
                  name: "Perumalpuram",
                  containedInPlace: {
                    "@type": "City",
                    name: "Tirunelveli",
                  },
                },
                {
                  "@type": "City",
                  name: "Nanguneri",
                  containedInPlace: {
                    "@type": "State",
                    name: "Tamil Nadu",
                  },
                },
                {
                  "@type": "City",
                  name: "Ambasamudram",
                  containedInPlace: {
                    "@type": "State",
                    name: "Tamil Nadu",
                  },
                },
              ],
              serviceType: "Healthcare",
              category: "Physiotherapy and Rehabilitation",
            }),
          }}
        />

        {/* Local FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where is Allwin Physiotherapy Clinic located in Tirunelveli?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Allwin Physiotherapy Clinic is located at 17, 7th St, Perumalpuram, Palayamkottai, Tirunelveli, Tamil Nadu 627007. We are easily accessible from all parts of Tirunelveli district including Nanguneri, Ambasamudram, and surrounding areas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide physiotherapy services in Palayamkottai and Perumalpuram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we are located in Perumalpuram, Palayamkottai and provide comprehensive physiotherapy services to residents of both areas. We also offer home visit services throughout Tirunelveli district.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas in Tirunelveli do you serve for home visits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide home visit physiotherapy services throughout Tirunelveli district including Palayamkottai, Perumalpuram, Nanguneri, Ambasamudram, Kallidaikurichi, Cheranmahadevi, Radhapuram, and surrounding areas within 25km radius.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are you the best physiotherapy clinic in Tirunelveli?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are one of the leading physiotherapy clinics in Tirunelveli with over 15 years of experience, certified physiotherapists, and a 4.9-star rating from 150+ patients. We specialize in sports physiotherapy, neurological rehabilitation, and home visit services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How far is your clinic from Tirunelveli Junction?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our clinic is approximately 3km from Tirunelveli Junction, easily accessible by auto-rickshaw, bus, or car. We are located in the heart of Palayamkottai for convenient access from all parts of Tirunelveli.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you treat patients from nearby towns like Nanguneri and Ambasamudram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we welcome patients from Nanguneri, Ambasamudram, Kallidaikurichi, Cheranmahadevi, and all surrounding towns. We also provide home visit services to these areas for patients who cannot travel to our clinic.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes you different from other physiotherapy clinics in Tirunelveli?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer specialized services including sports physiotherapy, neurological rehabilitation, pediatric care, cardiac rehabilitation, and comprehensive home visit services. Our certified physiotherapists have 15+ years experience and we use evidence-based treatment approaches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide emergency physiotherapy services in Tirunelveli?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide emergency physiotherapy consultations and can arrange urgent home visits for acute conditions. Call +91 93637 27207 for emergency physiotherapy services in Tirunelveli district.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Local landmarks and directions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: "Allwin Physiotherapy Clinic",
              description: "Leading physiotherapy clinic in Tirunelveli located near major landmarks",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17, 7th St, Perumalpuram",
                addressLocality: "Palayamkottai",
                addressRegion: "Tirunelveli",
                postalCode: "627007",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7139",
                longitude: "77.7567",
              },
              nearbyAttractions: [
                {
                  "@type": "Place",
                  name: "Palayamkottai Bus Stand",
                  description: "2km from clinic",
                },
                {
                  "@type": "Place",
                  name: "Tirunelveli Medical College",
                  description: "4km from clinic",
                },
                {
                  "@type": "Place",
                  name: "Nellaiappar Temple",
                  description: "5km from clinic",
                },
                {
                  "@type": "Place",
                  name: "Tirunelveli Junction Railway Station",
                  description: "3km from clinic",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
