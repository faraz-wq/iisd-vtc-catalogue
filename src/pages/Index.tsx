
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import CallbackForm from "@/components/CallbackForm";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, Users, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105">
              <GraduationCap className="h-10 w-10 mx-auto mb-4 text-maroon-600" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter value={15000} suffix="+" className="text-3xl md:text-4xl font-bold" />
              </div>
              <p className="mt-2 text-gray-600 font-medium">Graduates</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-college-blue" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter value={50} suffix="+" className="text-3xl md:text-4xl font-bold" />
              </div>
              <p className="mt-2 text-gray-600 font-medium">Programs</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105">
              <Building className="h-10 w-10 mx-auto mb-4 text-college-green" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter value={6} className="text-3xl md:text-4xl font-bold" />
              </div>
              <p className="mt-2 text-gray-600 font-medium">Campuses</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md transform transition-all hover:scale-105">
              <Users className="h-10 w-10 mx-auto mb-4 text-college-gold" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter value={98} suffix="%" className="text-3xl md:text-4xl font-bold" />
              </div>
              <p className="mt-2 text-gray-600 font-medium">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose IISD */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose IISD?</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto my-4"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We're dedicated to providing quality education and career-focused training across our institutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-gray-200 transition-all hover:shadow-lg">
              <div className="h-3 bg-maroon-600"></div>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-maroon-50 flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Relevant Programs</h3>
                <p className="text-gray-600 mb-4">
                  Our curricula are designed with industry input to ensure you gain the skills employers are looking for.
                </p>
                <a href="/programs" className="inline-flex items-center text-maroon-600 font-medium hover:text-maroon-700">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-gray-200 transition-all hover:shadow-lg">
              <div className="h-3 bg-college-blue"></div>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-college-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Faculty</h3>
                <p className="text-gray-600 mb-4">
                  Learn from industry professionals and experienced educators who provide personalized guidance.
                </p>
                <a href="/about" className="inline-flex items-center text-college-blue font-medium hover:text-blue-700">
                  Meet Our Faculty <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-gray-200 transition-all hover:shadow-lg">
              <div className="h-3 bg-college-green"></div>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-college-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">State-of-the-Art Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Our campuses feature modern laboratories, libraries, and practical training infrastructure.
                </p>
                <a href="/colleges" className="inline-flex items-center text-college-green font-medium hover:text-green-700">
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
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey with IISD</h2>
              <p className="text-lg text-white/90 mb-8">
                Join our community of learners and gain the skills, knowledge, and credentials 
                to succeed in today's competitive job market. Applications for the upcoming 
                academic year are now open.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/inquire" className="px-6 py-3 bg-white text-maroon-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Apply Now
                </a>
                <a href="/programs" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                  Explore Programs
                </a>
              </div>
            </div>
            <div className="hidden md:block text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-xl transform rotate-3"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Students in a classroom setting" 
                  className="relative z-10 rounded-xl shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News & Events */}
      <NewsEventsSection />
      
      {/* Callback Form */}
      <CallbackForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
