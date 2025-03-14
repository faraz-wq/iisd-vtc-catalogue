
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Stethoscope, Monitor, GraduationCap, Pill, Search, Clock, Building, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", name: "All Programs" },
  { id: "paramedical", name: "Paramedical Sciences", icon: Stethoscope, color: "text-maroon-600" },
  { id: "it", name: "Information Technology", icon: Monitor, color: "text-college-blue" },
  { id: "vocational", name: "Vocational Training", icon: GraduationCap, color: "text-college-green" },
  { id: "pharmacy", name: "Pharmacy Studies", icon: Pill, color: "text-purple-600" },
];

const PROGRAMS = [
  {
    id: 1,
    title: "B.P.Th. (Bachelor in Physiotherapy)",
    category: "paramedical",
    duration: "4 Years",
    eligibility: "10+2 with Science",
    description: "Comprehensive program covering all aspects of physiotherapy with practical training in hospitals.",
    career: "Physiotherapist, Rehabilitation Specialist, Sports Therapist",
    features: ["Hospital Internships", "Hands-on Training", "Modern Laboratories"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "Royal College"]
  },
  {
    id: 2,
    title: "G.N.M. (General Nursing and Midwifery)",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Professional nursing program with extensive clinical exposure and patient care training.",
    career: "Registered Nurse, Healthcare Facilities Manager, Community Health Worker",
    features: ["Hospital Training", "Patient Care Experience", "Medical Procedures"],
    colleges: ["N.H. Paramedical & IT College", "Nashik Paramedical & IT College"]
  },
  {
    id: 3,
    title: "B.Sc. (Medical Laboratory Technology)",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Program focused on diagnostic laboratory techniques, medical testing, and analysis.",
    career: "Medical Lab Technologist, Diagnostic Specialist, Research Assistant",
    features: ["Laboratory Practice", "Diagnostic Techniques", "Research Methods"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "N.H. Paramedical & IT College"]
  },
  {
    id: 4,
    title: "D.Pharm (Diploma in Pharmacy)",
    category: "pharmacy",
    duration: "2 Years",
    eligibility: "10+2 with Science",
    description: "Foundation program in pharmaceutical sciences with practical training in drug formulation.",
    career: "Pharmacy Assistant, Pharmaceutical Sales, Drug Store Management",
    features: ["Pharmaceutical Studies", "Drug Formulation", "Pharmacy Practice"],
    colleges: ["Royal College", "Nashik Paramedical & IT College"]
  },
  {
    id: 5,
    title: "B.Sc. IT (Information Technology)",
    category: "it",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics",
    description: "Comprehensive IT program covering programming, networking, and system administration.",
    career: "Software Developer, System Administrator, IT Support Specialist",
    features: ["Programming Labs", "Network Infrastructure", "Database Management"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "Royal College"]
  },
  {
    id: 6,
    title: "BCA (Bachelor of Computer Applications)",
    category: "it",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics",
    description: "Program focused on computer application development, software engineering, and IT management.",
    career: "Application Developer, Web Developer, Software Tester",
    features: ["Software Development", "Application Design", "Project Management"],
    colleges: ["Nashik Paramedical & IT College", "N.H. Paramedical & IT College"]
  },
  {
    id: 7,
    title: "Medical Lab Technician",
    category: "vocational",
    duration: "1 Year",
    eligibility: "10+2",
    description: "Short-term intensive training program in medical laboratory procedures and diagnostics.",
    career: "Lab Technician, Diagnostic Center Technician, Hospital Lab Assistant",
    features: ["Hands-on Training", "Quick Employment", "Essential Skills"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "Royal College"]
  },
  {
    id: 8,
    title: "X-Ray Technician",
    category: "vocational",
    duration: "1 Year",
    eligibility: "10+2",
    description: "Specialized training in radiography techniques, equipment operation, and patient positioning.",
    career: "X-Ray Technician, Radiography Assistant, Diagnostic Imaging Technician",
    features: ["Radiography Training", "Equipment Handling", "Patient Care"],
    colleges: ["N.H. Paramedical & IT College", "Nashik Paramedical & IT College"]
  },
  {
    id: 9,
    title: "B.Pharm (Bachelor of Pharmacy)",
    category: "pharmacy",
    duration: "4 Years",
    eligibility: "10+2 with Science",
    description: "In-depth pharmacy program covering pharmaceutics, pharmacology, and medicinal chemistry.",
    career: "Pharmacist, Quality Control Specialist, Pharmaceutical Researcher",
    features: ["Pharmaceutical Research", "Drug Development", "Clinical Pharmacy"],
    colleges: ["Royal College", "Nashik Paramedical & IT College"]
  },
  {
    id: 10,
    title: "Web Development & Design",
    category: "it",
    duration: "6 Months",
    eligibility: "10+2",
    description: "Focused program on web technologies, front-end development, and user interface design.",
    career: "Web Developer, UI Designer, Front-end Developer",
    features: ["Portfolio Development", "Industry Projects", "Modern Technologies"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "Royal College"]
  },
  {
    id: 11,
    title: "Cardiac Care Technician",
    category: "vocational",
    duration: "1 Year",
    eligibility: "10+2 with Science",
    description: "Specialized training in cardiac care equipment, ECG monitoring, and patient management.",
    career: "Cardiac Care Technician, ECG Technician, Cardiac Monitoring Specialist",
    features: ["ECG Training", "Cardiac Care", "Emergency Response"],
    colleges: ["N.H. Paramedical & IT College", "Royal College"]
  },
  {
    id: 12,
    title: "PG DMLT (Pathology & Imaging Technology)",
    category: "paramedical",
    duration: "2 Years",
    eligibility: "Bachelor's Degree in Science",
    description: "Advanced program in laboratory diagnostics, pathology, and medical imaging techniques.",
    career: "Senior Lab Technologist, Pathology Specialist, Medical Imaging Expert",
    features: ["Advanced Diagnostics", "Pathology Specialization", "Research Methods"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "Nashik Paramedical & IT College"]
  },
  {
    id: 13,
    title: "Diploma in Information Technology (DIT)",
    category: "it",
    duration: "1 Year",
    eligibility: "10+2",
    description: "Fundamental IT diploma covering software applications, networking, and basic programming.",
    career: "IT Support Technician, Junior Developer, Network Assistant",
    features: ["Basic Programming", "Network Essentials", "IT Fundamentals"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College"]
  },
  {
    id: 14,
    title: "Diploma in Physiotherapy & Trauma Technology (DPTT)",
    category: "paramedical",
    duration: "2 Years",
    eligibility: "10+2 with Science",
    description: "Training in physiotherapy techniques and emergency trauma management.",
    career: "Physiotherapy Assistant, Trauma Care Technician, Rehabilitation Aide",
    features: ["Physiotherapy Training", "Trauma Care", "Hospital Internships"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College"]
  },
  {
    id: 15,
    title: "B.Voc. in Radiology & Imaging Technology",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Specialized training in radiographic imaging and diagnostic technology.",
    career: "Radiology Technician, Imaging Technologist, Diagnostic Specialist",
    features: ["Radiography Techniques", "Medical Imaging", "Hospital Training"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "N.H. Paramedical and IT College"]
  },
  {
    id: 16,
    title: "B.Voc. in Medical Lab Technology",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Comprehensive training in laboratory diagnostics and medical testing.",
    career: "Medical Lab Technician, Research Assistant, Pathology Technician",
    features: ["Lab Training", "Medical Testing", "Research Methods"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College", "N.H. Paramedical and IT College"]
  },
  {
    id: 17,
    title: "B.Voc. in Cardiac Care Technology",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Advanced training in cardiac care, ECG monitoring, and cardiovascular diagnostics.",
    career: "Cardiac Care Technician, ECG Specialist, Cardiology Assistant",
    features: ["Cardiac Monitoring", "ECG Training", "Emergency Response"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College"]
  },
  {
    id: 18,
    title: "PG X-RAY (Postgraduate in X-Ray Technology)",
    category: "paramedical",
    duration: "2 Years",
    eligibility: "Bachelor’s Degree in Science",
    description: "Advanced study in radiography techniques and medical imaging.",
    career: "Senior Radiographer, Medical Imaging Consultant, X-Ray Specialist",
    features: ["Advanced Imaging", "Medical Radiography", "Diagnostic Training"],
    colleges: ["Chatrapati Shivaji Maharaj Paramedical & IT College"]
  },
  {
    id: 19,
    title: "Diploma in Operation Theatre Technology",
    category: "vocational",
    duration: "2 Years",
    eligibility: "10+2 with Science",
    description: "Hands-on training in operation theatre procedures and surgical assistance.",
    career: "OT Technician, Surgical Assistant, Healthcare Technician",
    features: ["Surgical Training", "Anesthesia Assistance", "Hospital Internships"],
    colleges: ["Royal College of Vocational Training & Skill Development"]
  },
  {
    id: 20,
    title: "B.Voc. in Theater Technician",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Practical training in surgical room management and patient preparation.",
    career: "Surgical Room Assistant, OT Technician, Healthcare Facility Operator",
    features: ["Operation Theatre Assistance", "Surgical Prep", "Hospital Training"],
    colleges: ["N.H. Paramedical and IT College"]
  },
  {
    id: 21,
    title: "B.Voc. in Dialysis Technician",
    category: "paramedical",
    duration: "3 Years",
    eligibility: "10+2 with Science",
    description: "Specialized course in dialysis treatment and renal healthcare support.",
    career: "Dialysis Technician, Renal Care Specialist, Hospital Dialysis Assistant",
    features: ["Dialysis Machine Handling", "Patient Monitoring", "Hospital Training"],
    colleges: ["N.H. Paramedical and IT College"]
  }
  
];

const ProgramCard = ({ program }: { program: typeof PROGRAMS[0] }) => {
  const categoryData = CATEGORIES.find(cat => cat.id === program.category) || CATEGORIES[0];
  const Icon = categoryData.id !== "all" ? categoryData.icon : GraduationCap;
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className={cn(
        "h-2",
        program.category === "paramedical" ? "bg-maroon-600" : 
        program.category === "it" ? "bg-college-blue" : 
        program.category === "vocational" ? "bg-college-green" : 
        "bg-purple-600"
      )}></div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
            program.category === "paramedical" ? "bg-maroon-100 text-maroon-600" : 
            program.category === "it" ? "bg-blue-100 text-college-blue" : 
            program.category === "vocational" ? "bg-green-100 text-college-green" : 
            "bg-purple-100 text-purple-600"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
            <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                {program.colleges.length} Colleges
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{program.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Eligibility</h4>
            <p className="text-gray-800">{program.eligibility}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Career Paths</h4>
            <p className="text-gray-800 text-sm truncate">{program.career}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {program.features.map((feature, index) => (
            <span 
              key={index} 
              className={cn(
                "text-xs px-3 py-1 rounded-full",
                program.category === "paramedical" ? "bg-maroon-50 text-maroon-600" : 
                program.category === "it" ? "bg-blue-50 text-college-blue" : 
                program.category === "vocational" ? "bg-green-50 text-college-green" : 
                "bg-purple-50 text-purple-600"
              )}
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Available at</h4>
          <div className="space-y-1">
            {program.colleges.map((college, index) => (
              <a
                key={index}
                href={`/colleges/${college.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-gray-700 hover:text-maroon-600"
              >
                {college}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPrograms, setFilteredPrograms] = useState(PROGRAMS);
  
  // Filter programs based on search term and active category
  useEffect(() => {
    const filtered = PROGRAMS.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           program.career.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || program.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPrograms(filtered);
  }, [searchTerm, activeCategory]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Programs & Courses</h1>
            <p className="text-lg text-white/90 mb-8">
              Discover our wide range of specialized programs designed to prepare you for a successful career in healthcare, technology, and more.
            </p>
            
            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search programs by name, career path, or keywords..."
                className="pl-10 py-6 text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus-visible:ring-maroon-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Catalog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100 p-1 w-full flex overflow-x-auto hide-scrollbar">
              {CATEGORIES.map((category) => {
                const Icon = category.icon || GraduationCap;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={cn(
                      "flex-1 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:font-medium py-3",
                      category.id === "paramedical" && activeCategory === "paramedical" && "data-[state=active]:text-maroon-600",
                      category.id === "it" && activeCategory === "it" && "data-[state=active]:text-college-blue",
                      category.id === "vocational" && activeCategory === "vocational" && "data-[state=active]:text-college-green",
                      category.id === "pharmacy" && activeCategory === "pharmacy" && "data-[state=active]:text-purple-600"
                    )}
                  >
                    {category.id !== "all" && (
                      <Icon className={cn("mr-2 h-4 w-4", category.color)} />
                    )}
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {/* Program Results */}
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-xl">
                <Zap className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No programs found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We couldn't find any programs matching your search criteria. Try adjusting your search or browse all programs.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 px-5 py-2 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors"
                >
                  View All Programs
                </button>
              </div>
            )}
          </Tabs>
        </div>
      </section>
      
      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed with industry input to ensure you gain practical skills and knowledge that employers are looking for
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-maroon-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Recognized Certifications</h3>
                <p className="text-gray-600">
                  Our programs lead to certifications that are recognized by leading healthcare institutions and technology companies.
                </p>
              </CardContent>
            </Card>
            
            {/* Benefit 2 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">State-of-the-Art Facilities</h3>
                <p className="text-gray-600">
                  Learn in modern laboratories and classrooms equipped with the latest technology and equipment used in the industry.
                </p>
              </CardContent>
            </Card>
            
            {/* Benefit 3 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6 text-college-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellent Placement Support</h3>
                <p className="text-gray-600">
                  Our dedicated placement cell works to connect students with top employers, resulting in our impressive 98% placement rate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-college-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step toward a rewarding career by applying to one of our specialized programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/inquire" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
