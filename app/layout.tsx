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
      </head>
       <script
          id="openwidget-script" // A unique ID for the script
          strategy="afterInteractive" // Recommended for chat widgets
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "aedcbbae-e8fe-4934-8761-50f3a187edb0";
              window.__ow.integration_name = "manual_settings";
              window.__ow.product_name = "openwidget";
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
            `,
          }}
        />
        <noscript>
          You need to <a href="https://www.openwidget.com/enable-javascript" rel="noopener nofollow">enable JavaScript</a> to use the communication tool powered by <a href="https://www.openwidget.com/" rel="noopener nofollow" target="_blank">OpenWidget</a>
        </noscript>
      <body>{children}</body>
    </html>
  )
}
