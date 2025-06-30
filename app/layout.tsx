import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli",
    template: "%s | Allwin Physiotherapy Clinic",
  },
  description:
    "Expert physiotherapy services in Tirunelveli offering specialized treatments for stroke, joint pain, sports injuries, geriatric care, Parkinson's, diabetic neuropathy, post-operative recovery, and home visits. Professional physiotherapists for back pain, neck pain, sciatica, knee problems, and rehabilitation services.",
  keywords: [
    // Location-based keywords
    "physiotherapy Tirunelveli",
    "physiotherapy clinic Tirunelveli",
    "physiotherapist Tirunelveli",
    "rehabilitation center Tirunelveli",
    "physical therapy Tirunelveli",
    "Palayamkottai physiotherapy",
    "Perumalpuram physiotherapy",
    "Allwin physiotherapy",

    // Home visit services
    "physiotherapist for home visits",
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

    // General services
    "sports physiotherapy",
    "neurological rehabilitation",
    "orthopedic physiotherapy",
    "pain management",
    "cardiac rehabilitation",
    "pediatric physiotherapy",
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
    title: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli",
    description:
      "Expert physiotherapy services in Tirunelveli. Specialized treatments for sports injuries, neurological rehabilitation, orthopedic care, and pain management.",
    url: "https://allwinphysiotherapy.com",
    siteName: "Allwin Physiotherapy Clinic",
    images: [
      {
        url: "/images/allwin-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Allwin Physiotherapy Clinic - Professional Physiotherapy Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allwin Physiotherapy Clinic - Best Physiotherapy in Tirunelveli",
    description:
      "Expert physiotherapy services in Tirunelveli. Specialized treatments for sports injuries, neurological rehabilitation, orthopedic care, and pain management.",
    images: ["/images/allwin-logo.jpeg"],
    creator: "@allwinphysio",
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
  },
  category: "healthcare",
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

        {/* Business information */}
        <meta name="business:contact_data:street_address" content="17, 7th St, Perumalpuram" />
        <meta name="business:contact_data:locality" content="Palayamkottai" />
        <meta name="business:contact_data:region" content="Tirunelveli" />
        <meta name="business:contact_data:postal_code" content="627007" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+919363727207" />
        <meta name="business:contact_data:email" content="allwin.physiotherpy@gmail.com" />

        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Allwin Physiotherapy Clinic",
              alternateName: "Allwin Physothery Clinic",
              description:
                "Expert physiotherapy services in Tirunelveli specializing in sports injuries, neurological rehabilitation, orthopedic care, and pain management.",
              url: "https://allwinphysiotherapy.com",
              logo: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              image: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              telephone: "+919363727207",
              email: "allwin.physiotherpy@gmail.com",
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
              priceRange: "$$",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Card",
              areaServed: {
                "@type": "City",
                name: "Tirunelveli",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "8.7139",
                  longitude: "77.7567",
                },
                geoRadius: "25000",
              },
              medicalSpecialty: ["Physiotherapy", "Sports Medicine", "Rehabilitation Medicine", "Pain Management"],
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
                  reviewBody: "Excellent physiotherapy services with professional care and effective treatment.",
                },
              ],
              sameAs: [
                "https://www.facebook.com/allwinphysiotherapy",
                "https://www.instagram.com/allwinphysiotherapy",
                "https://maps.app.goo.gl/Jnt9RXY9oHEa2Lhu5",
              ],
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
                  name: "About",
                  item: "https://allwinphysiotherapy.com#about",
                },
                {
                  "@type": "ListItem",
                  position: 4,
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
                    text: "We offer comprehensive physiotherapy services including sports physiotherapy, neurological rehabilitation, orthopedic rehabilitation, cardiac rehabilitation, pediatric physiotherapy, pain management, and home visit services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the clinic hours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are open Monday to Saturday from 8:30 AM to 9:30 PM. We are closed on Sundays.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide home visit services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide convenient physiotherapy treatments in the comfort of your own home for patients who cannot visit our clinic.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I book an appointment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book an appointment by calling us at +91 93637 27207, sending a WhatsApp message, or emailing us at allwin.physiotherpy@gmail.com.",
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
              name: "Allwin Physiotherapy Clinic",
              url: "https://allwinphysiotherapy.com",
              logo: "https://allwinphysiotherapy.com/images/allwin-logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919363727207",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Tamil"],
              },
              sameAs: ["https://www.facebook.com/allwinphysiotherapy", "https://www.instagram.com/allwinphysiotherapy"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
