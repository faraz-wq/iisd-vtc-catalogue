import { useState } from "react";
import { Helmet } from "react-helmet"; // For SEO

import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import CallbackForm from "@/components/CallbackForm"; 
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Building,
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* SEO Tags */}
      <head>
        <link rel="canonical" href="https://www.iisdvtc.in/" />
      </head>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Indian Institute of Skill Dev. & Vocational Training Center
        </title>
        <meta
          name="description"
          content="IISD offers industry-aligned programs across 4 campuses with 98% placement success. Choose from 50+ career-oriented courses designed by experts. Apply now!"
        />
        <meta
          name="keywords"
          content="IISD, Indian Institute of Skill Development, best college for skill development, career-oriented education, campus placements, undergraduate programs, postgraduate courses, vocational training"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iisdvtc.in/" />
        <meta
          property="og:title"
          content="Indian Institute of Skill Dev. & Vocational Train. Center"
        />
        <meta
          property="og:description"
          content="India's leading institute for career-focused education with modern facilities, expert faculty, and 98% placement rate. Explore 50+ industry-relevant programs."
        />
        <meta property="og:image" content="/images/social-preview.jpg" />
        <meta
          property="og:image:alt"
          content="IISD Campus with students and modern facilities"
        />
        <meta property="og:site_name" content="IISD" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.iisdvtc.in/" />
        <meta
          name="twitter:title"
          content="Indian Institute of Skill Dev. & Vocational Train. Center"
        />
        <meta
          name="twitter:description"
          content="Transform your career with IISD's industry-aligned programs. 98% placement rate across 6 state-of-the-art campuses."
        />
        <meta name="twitter:image" content="/images/social-preview.jpg" />
        <meta
          name="twitter:image:alt"
          content="IISD Campus with students and modern facilities"
        />
        <meta name="twitter:site" content="@IISD_Official" />
        <meta name="twitter:creator" content="@IISD_Official" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.iisdvtc.in/" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Indian Institute of Skill Dev. & Vocational Train. Center",
              "alternateName": "IISD",
              "url": "https://www.iisdvtc.in/",
              "logo": "/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/IISD",
                "https://twitter.com/IISD_Official",
                "https://www.instagram.com/iisd_official",
                "https://www.linkedin.com/school/iisd"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 15, Rohini",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110089",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-11-45678901",
                "contactType": "Admissions",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "foundingDate": "2005",
              "numberOfStudents": "15000",
              "alumni": "15000",
              "educationalProgram": [
                "Undergraduate Programs",
                "Postgraduate Programs",
                "Vocational Training",
                "Professional Certifications"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="min-h-screen bg-white">
        {/* Hero Section with H1 */}
        <Hero></Hero>

        {/* Statistics Section */}
        <section
          className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
          aria-label="Institute Statistics"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div
                className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105"
                itemScope
                itemType="https://schema.org/StatisticalPopulation"
              >
                <GraduationCap className="h-10 w-10 mx-auto mb-4 text-maroon-600" />
                <div
                  className="text-4xl font-bold text-gray-800"
                  itemProp="numMembers"
                >
                  <AnimatedCounter
                    value={15000}
                    suffix="+"
                    className="text-3xl md:text-4xl font-bold"
                  />
                </div>
                <p className="mt-2 text-gray-600 font-medium">Graduates</p>
              </div>

              <div
                className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105"
                itemScope
                itemType="https://schema.org/StatisticalPopulation"
              >
                <BookOpen className="h-10 w-10 mx-auto mb-4 text-college-blue" />
                <div
                  className="text-4xl font-bold text-gray-800"
                  itemProp="numMembers"
                >
                  <AnimatedCounter
                    value={50}
                    suffix="+"
                    className="text-3xl md:text-4xl font-bold"
                  />
                </div>
                <p className="mt-2 text-gray-600 font-medium">Programs</p>
              </div>

              <div
                className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105"
                itemScope
                itemType="https://schema.org/StatisticalPopulation"
              >
                <Building className="h-10 w-10 mx-auto mb-4 text-college-green" />
                <div
                  className="text-4xl font-bold text-gray-800"
                  itemProp="numMembers"
                >
                  <AnimatedCounter
                    value={6}
                    className="text-3xl md:text-4xl font-bold"
                  />
                </div>
                <p className="mt-2 text-gray-600 font-medium">Campuses</p>
              </div>

              <div
                className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105"
                itemScope
                itemType="https://schema.org/StatisticalPopulation"
              >
                <Users className="h-10 w-10 mx-auto mb-4 text-college-gold" />
                <div
                  className="text-4xl font-bold text-gray-800"
                  itemProp="numMembers"
                >
                  <AnimatedCounter
                    value={98}
                    suffix="%"
                    className="text-3xl md:text-4xl font-bold"
                  />
                </div>
                <p className="mt-2 text-gray-600 font-medium">Placement Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IISD */}
        <section className="py-20" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="why-choose-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Why Choose IISD?
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto my-4"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                We're dedicated to providing quality education and
                career-focused training across our institutes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className="overflow-hidden border-gray-200 transition-all hover:shadow-lg"
                itemScope
                itemType="https://schema.org/EducationalOrganization"
              >
                <div className="h-3 bg-maroon-600"></div>
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-maroon-50 flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-maroon-600" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900"
                    itemProp="name"
                  >
                    Industry-Relevant Programs
                  </h3>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    Our curricula are designed with industry input to ensure you
                    gain the skills employers are looking for.
                  </p>
                  <a
                    href="/programs"
                    className="inline-flex items-center text-maroon-600 font-medium hover:text-maroon-700"
                    itemProp="url"
                    aria-label="Explore Programs"
                  >
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card
                className="overflow-hidden border-gray-200 transition-all hover:shadow-lg"
                itemScope
                itemType="https://schema.org/EducationalOrganization"
              >
                <div className="h-3 bg-college-blue"></div>
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-college-blue" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900"
                    itemProp="name"
                  >
                    Expert Faculty
                  </h3>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    Learn from industry professionals and experienced educators
                    who provide personalized guidance.
                  </p>
                  <a
                    href="/about"
                    className="inline-flex items-center text-college-blue font-medium hover:text-blue-700"
                    itemProp="url"
                    aria-label="Meet Our Faculty"
                  >
                    Meet Our Faculty <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card
                className="overflow-hidden border-gray-200 transition-all hover:shadow-lg"
                itemScope
                itemType="https://schema.org/EducationalOrganization"
              >
                <div className="h-3 bg-college-green"></div>
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <Building className="h-8 w-8 text-college-green" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900"
                    itemProp="name"
                  >
                    State-of-the-Art Facilities
                  </h3>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    Our campuses feature modern laboratories, libraries, and
                    practical training infrastructure.
                  </p>
                  <a
                    href="/colleges"
                    className="inline-flex items-center text-college-green font-medium hover:text-green-700"
                    itemProp="url"
                    aria-label="View Our Campuses"
                  >
                    View Our Campuses <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <ProgramsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Admissions CTA */}
        <section
          className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white"
          aria-labelledby="admissions-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="admissions-heading" className="sr-only">
                  Begin Your Journey with IISD
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Begin Your Journey with IISD
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join our community of learners and gain the skills, knowledge,
                  and credentials to succeed in today's competitive job market.
                  Applications for the upcoming academic year are now open.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/inquire"
                    className="px-6 py-3 bg-white text-maroon-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Apply Now at IISD"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/programs"
                    className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                    aria-label="Explore Programs at IISD"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
              <div className="hidden md:block text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-xl transform rotate-3"></div>
                  <img
                    src="/images/student-life.jpg"
                    alt="Students in a modern classroom setting at IISD campus collaborating with faculty"
                    width={600}
                    height={400}
                    className="relative z-10 rounded-xl shadow-xl"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden mt-8 text-center">
              <img
                src="/images/student-life.jpg"
                alt="Diverse student community collaborating in modern classrooms at IISD campus"
                width={600}
                height={400}
                className="rounded-xl shadow-xl mx-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* News & Events */}
        <NewsEventsSection />

        {/* Callback Form */}
        <CallbackForm />
      </div>
    </>
  );
};

export default Index;
