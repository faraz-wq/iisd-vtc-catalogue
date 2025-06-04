


import { Book, Award, Clock, Heart, Users, Building, BookOpen, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Header Section */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About IISD Institute</h1>
              <p className="text-lg text-white/90 mb-8">
                Dedicated to excellence in education and professional development since 2005. 
                IISD is committed to creating skilled professionals who make a real impact in 
                the healthcare and technology sectors.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl transform rotate-3"></div>
              <img 
                src="/landing-page/shivajiclgpune.jpg" 
                alt="IISD Campus" 
                className="relative z-10 rounded-xl shadow-xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-maroon-100 mb-6">
                <Heart className="h-7 w-7 text-maroon-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To provide accessible, high-quality education that prepares students for successful careers in healthcare and 
                technology, while fostering a culture of innovation, compassion, and lifelong learning.
              </p>
              <p className="text-gray-600">
                We are committed to developing skilled professionals who can adapt to the ever-changing landscape of 
                healthcare and technology, and contribute meaningfully to society.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-6">
                <Award className="h-7 w-7 text-college-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be recognized as a premier educational institution that transforms students into skilled, compassionate, 
                and innovative healthcare and IT professionals who improve lives and strengthen communities.
              </p>
              <p className="text-gray-600">
                We envision a future where IISD graduates are at the forefront of technological and healthcare 
                advancements, making significant contributions to their fields.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto my-4"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              From our humble beginnings to our current status as a leading educational institute, our journey has been marked by growth, innovation, and dedication.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-maroon-200"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {/* 2005 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block max-w-md">
                    <h3 className="text-xl font-bold mb-2 text-maroon-600">2005 - Foundation</h3>
                    <p className="text-gray-600">
                      IISD was established with a vision to provide quality education in healthcare and technology.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-maroon-600 flex items-center justify-center my-4 md:my-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2010 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-maroon-600 flex items-center justify-center my-4 md:my-0">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block max-w-md">
                    <h3 className="text-xl font-bold mb-2 text-college-blue">2010 - Expansion</h3>
                    <p className="text-gray-600">
                      IISD expanded its reach by establishing multiple campuses across the region and introducing new programs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2015 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block max-w-md">
                    <h3 className="text-xl font-bold mb-2 text-college-green">2015 - Innovation</h3>
                    <p className="text-gray-600">
                      IISD introduced cutting-edge laboratories and modern teaching methodologies to enhance student learning.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-maroon-600 flex items-center justify-center my-4 md:my-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2020 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-maroon-600 flex items-center justify-center my-4 md:my-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block max-w-md">
                    <h3 className="text-xl font-bold mb-2 text-college-gold">2020 - Excellence</h3>
                    <p className="text-gray-600">
                      IISD achieved a milestone of 10,000+ successful graduates and established strong industry partnerships for placements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Leadership</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto my-4"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Meet the dedicated team of professionals guiding IISD towards excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">Dr. Rajesh Sharma</h3>
              <p className="text-maroon-600 font-medium mb-3">Director</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                With over 25 years of experience in education and healthcare administration, Dr. Sharma provides visionary leadership to IISD.
              </p>
            </div>
            
            {/* Leader 2 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">Prof. Priya Patel</h3>
              <p className="text-college-blue font-medium mb-3">Academic Dean</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Prof. Patel oversees all academic programs, ensuring curriculum excellence and innovative teaching methodologies.
              </p>
            </div>
            
            {/* Leader 3 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">Mr. Anil Deshmukh</h3>
              <p className="text-college-green font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Mr. Deshmukh manages the operational aspects of all IISD campuses, ensuring smooth functioning and resource optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accreditations & Recognitions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Accreditations & Recognitions</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto my-4"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              IISD is recognized and accredited by prestigious educational bodies
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Accreditation 1 */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src="/landing-page/msbtc.jpeg"
                  alt="Maharashtra State Board of Technical Education" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">MSBTE</h3>
              <p className="text-sm text-gray-600">Maharashtra State Board of Technical Education</p>
            </div>
            
            {/* Accreditation 2 */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src="/landing-page/aicte.png"
                  alt="All India Council for Technical Education" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">AICTE</h3>
              <p className="text-sm text-gray-600">All India Council for Technical Education</p>
            </div>
            
            {/* Accreditation 3 */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src="/landing-page/pci.jpg"
                  alt="Pharmacy Council of India" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">PCI</h3>
              <p className="text-sm text-gray-600">Pharmacy Council of India</p>
            </div>
            
            {/* Accreditation 4 */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src="/landing-page/naac.png"
                  alt="National Assessment and Accreditation Council" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">NAAC</h3>
              <p className="text-sm text-gray-600">National Assessment and Accreditation Council</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-maroon-700 to-maroon-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the IISD Family?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step toward a rewarding career in healthcare or technology by applying to one of our specialized programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/inquire" className="px-6 py-3 bg-white text-maroon-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default About;
