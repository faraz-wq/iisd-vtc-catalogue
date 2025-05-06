
import { useState } from 'react';


import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Calendar, Search, Building, GraduationCap, Check, ArrowRight, Mail } from 'lucide-react';

const CAREER_CATEGORIES = [
  "All Categories",
  "Healthcare",
  "Information Technology",
  "Administration",
  "Faculty Positions",
];

const EXPERIENCE_LEVELS = [
  "All Levels",
  "Entry Level",
  "Mid Level",
  "Senior Level",
];

const LOCATIONS = [
  "All Locations",
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
];

const JOB_LISTINGS = [
  {
    id: 1,
    title: "Physiotherapy Instructor",
    department: "Paramedical Sciences",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    category: "Healthcare",
    experienceLevel: "Mid Level",
    postedDate: "June 10, 2024",
    description: "We are seeking a qualified Physiotherapy Instructor to join our team at CSMPIC. The ideal candidate will have experience in clinical physiotherapy and a passion for teaching.",
    responsibilities: [
      "Teach physiotherapy courses to undergraduate students",
      "Develop and update curriculum materials",
      "Supervise students during clinical rotations",
      "Participate in departmental meetings and activities",
      "Conduct research in the field of physiotherapy"
    ],
    qualifications: [
      "Master's degree in Physiotherapy",
      "3-5 years of clinical experience",
      "Teaching experience preferred",
      "Strong communication and interpersonal skills",
      "Knowledge of current physiotherapy practices and research"
    ],
    college: "csmpic"
  },
  {
    id: 2,
    title: "Software Engineering Faculty",
    department: "Information Technology",
    location: "Pune",
    type: "Full-time",
    experience: "5+ years",
    category: "Information Technology",
    experienceLevel: "Senior Level",
    postedDate: "June 8, 2024",
    description: "Royal College is looking for an experienced Software Engineering Faculty member to teach advanced programming courses. The ideal candidate will have industry experience and a strong academic background.",
    responsibilities: [
      "Teach software engineering courses to undergraduate and graduate students",
      "Develop and update curriculum materials",
      "Mentor students on programming projects",
      "Participate in departmental meetings and activities",
      "Conduct research in software engineering"
    ],
    qualifications: [
      "Ph.D. or Master's degree in Computer Science or related field",
      "5+ years of industry experience in software development",
      "Teaching experience at college level",
      "Strong programming skills in multiple languages",
      "Knowledge of current software development methodologies"
    ],
    college: "royal"
  },
  {
    id: 3,
    title: "Lab Technician - Pathology",
    department: "Medical Laboratory Technology",
    location: "Nagpur",
    type: "Full-time",
    experience: "1-3 years",
    category: "Healthcare",
    experienceLevel: "Entry Level",
    postedDate: "June 5, 2024",
    description: "N.H. Paramedical and IT College is seeking a Lab Technician to assist in our Pathology department. The ideal candidate will have experience in laboratory procedures and a strong attention to detail.",
    responsibilities: [
      "Prepare laboratory materials for student use",
      "Maintain laboratory equipment and supplies",
      "Assist instructors during laboratory sessions",
      "Ensure safety protocols are followed in the laboratory",
      "Demonstrate laboratory procedures to students"
    ],
    qualifications: [
      "Bachelor's degree in Medical Laboratory Technology",
      "1-3 years of experience in a clinical laboratory",
      "Knowledge of laboratory safety procedures",
      "Strong attention to detail",
      "Good communication skills"
    ],
    college: "nhpic"
  },
  {
    id: 4,
    title: "Pharmacy Program Coordinator",
    department: "Pharmacy",
    location: "Nashik",
    type: "Full-time",
    experience: "3-5 years",
    category: "Administration",
    experienceLevel: "Mid Level",
    postedDate: "June 1, 2024",
    description: "Nashik Paramedical & IT College is looking for a Pharmacy Program Coordinator to oversee our pharmacy programs. The ideal candidate will have experience in pharmacy education and program management.",
    responsibilities: [
      "Coordinate all activities related to the pharmacy programs",
      "Supervise faculty and staff in the pharmacy department",
      "Develop and implement program policies and procedures",
      "Monitor program compliance with regulatory requirements",
      "Maintain relationships with clinical sites and industry partners"
    ],
    qualifications: [
      "Master's degree in Pharmacy or related field",
      "3-5 years of experience in pharmacy education or practice",
      "Experience in program coordination or management",
      "Strong leadership and organizational skills",
      "Knowledge of pharmacy regulations and accreditation standards"
    ],
    college: "npic"
  },
  {
    id: 5,
    title: "Computer Science Lecturer",
    department: "Information Technology",
    location: "Nashik",
    type: "Full-time",
    experience: "2-4 years",
    category: "Information Technology",
    experienceLevel: "Mid Level",
    postedDate: "May 28, 2024",
    description: "Nashik Paramedical & IT College is seeking a Computer Science Lecturer to teach undergraduate courses. The ideal candidate will have a strong foundation in computer science and a passion for teaching.",
    responsibilities: [
      "Teach computer science courses to undergraduate students",
      "Develop and update curriculum materials",
      "Mentor students on programming projects",
      "Participate in departmental activities and committees",
      "Stay current with developments in the field of computer science"
    ],
    qualifications: [
      "Master's degree in Computer Science or related field",
      "2-4 years of teaching or industry experience",
      "Strong programming skills in multiple languages",
      "Knowledge of data structures, algorithms, and software development",
      "Good communication and presentation skills"
    ],
    college: "npic"
  },
  {
    id: 6,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Mumbai",
    type: "Full-time",
    experience: "1-2 years",
    category: "Administration",
    experienceLevel: "Entry Level",
    postedDate: "May 25, 2024",
    description: "We are seeking an Administrative Assistant to support the administrative functions of CSMPIC. The ideal candidate will be detail-oriented, organized, and have excellent communication skills.",
    responsibilities: [
      "Provide administrative support to college departments",
      "Manage correspondence and phone calls",
      "Organize and maintain files and records",
      "Schedule appointments and meetings",
      "Prepare documents and reports as needed"
    ],
    qualifications: [
      "Bachelor's degree in any discipline",
      "1-2 years of administrative experience",
      "Proficiency in Microsoft Office suite",
      "Strong organizational and time management skills",
      "Excellent written and verbal communication skills"
    ],
    college: "csmpic"
  },
  {
    id: 7,
    title: "Nursing Instructor",
    department: "Nursing",
    location: "Pune",
    type: "Full-time",
    experience: "3-5 years",
    category: "Healthcare",
    experienceLevel: "Mid Level",
    postedDate: "May 20, 2024",
    description: "Royal College is looking for a Nursing Instructor to teach nursing courses and supervise clinical rotations. The ideal candidate will have clinical nursing experience and a passion for education.",
    responsibilities: [
      "Teach nursing courses to undergraduate students",
      "Supervise students during clinical rotations",
      "Develop and update curriculum materials",
      "Evaluate student performance",
      "Participate in departmental activities and committees"
    ],
    qualifications: [
      "Master's degree in Nursing",
      "3-5 years of clinical nursing experience",
      "Teaching experience preferred",
      "Current nursing license",
      "Strong clinical skills and knowledge of current nursing practices"
    ],
    college: "royal"
  },
  {
    id: 8,
    title: "IT Support Specialist",
    department: "Information Technology",
    location: "Nagpur",
    type: "Full-time",
    experience: "1-3 years",
    category: "Information Technology",
    experienceLevel: "Entry Level",
    postedDate: "May 15, 2024",
    description: "N.H. Paramedical and IT College is seeking an IT Support Specialist to maintain our computer systems and provide technical support. The ideal candidate will have experience in IT support and a strong customer service orientation.",
    responsibilities: [
      "Provide technical support to faculty, staff, and students",
      "Maintain computer systems and networks",
      "Troubleshoot hardware and software issues",
      "Install and configure computer equipment and software",
      "Train users on new systems and software"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "1-3 years of IT support experience",
      "Knowledge of computer hardware, software, and networking",
      "Experience with Windows and Linux operating systems",
      "Strong problem-solving and communication skills"
    ],
    college: "nhpic"
  },
];

const CareerOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [filteredJobs, setFilteredJobs] = useState(JOB_LISTINGS);
  const [activeJob, setActiveJob] = useState(JOB_LISTINGS[0]);
  const [activeTab, setActiveTab] = useState("available");
  
  // Filter jobs based on search term and filters
  const filterJobs = () => {
    return JOB_LISTINGS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory;
      const matchesExperience = selectedExperience === "All Levels" || job.experienceLevel === selectedExperience;
      const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
      
      return matchesSearch && matchesCategory && matchesExperience && matchesLocation;
    });
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = filterJobs();
    setFilteredJobs(filtered);
    if (filtered.length > 0) {
      setActiveJob(filtered[0]);
    }
  };
  
  // Handle filter changes
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setTimeout(() => {
      const filtered = filterJobs();
      setFilteredJobs(filtered);
      if (filtered.length > 0) {
        setActiveJob(filtered[0]);
      }
    }, 0);
  };
  
  const handleExperienceChange = (value: string) => {
    setSelectedExperience(value);
    setTimeout(() => {
      const filtered = filterJobs();
      setFilteredJobs(filtered);
      if (filtered.length > 0) {
        setActiveJob(filtered[0]);
      }
    }, 0);
  };
  
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    setTimeout(() => {
      const filtered = filterJobs();
      setFilteredJobs(filtered);
      if (filtered.length > 0) {
        setActiveJob(filtered[0]);
      }
    }, 0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" 
            alt="Career Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Opportunities</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join our team of dedicated professionals and make a difference in education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#job-listings" 
                className="px-6 py-3 bg-maroon-600 text-white font-medium rounded-md hover:bg-maroon-700 transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Contact HR Department
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join the IISD Institute family and be part of our mission to provide quality education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Growth</h3>
                <p className="text-gray-600">
                  We provide opportunities for continuous learning and professional development to help you advance in your career.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Work with passionate educators and professionals in a supportive and collaborative environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Meaningful Impact</h3>
                <p className="text-gray-600">
                  Make a meaningful impact on the lives of students and contribute to the future of education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Job Listings */}
      <section id="job-listings" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Explore current job opportunities across our colleges
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 bg-white p-1 shadow-sm w-full md:w-auto flex flex-wrap justify-center">
              <TabsTrigger value="available" className="px-4 py-2">Available Positions</TabsTrigger>
              <TabsTrigger value="how-to-apply" className="px-4 py-2">How to Apply</TabsTrigger>
              <TabsTrigger value="faq" className="px-4 py-2">FAQ</TabsTrigger>
            </TabsList>
            
            {/* Available Positions Tab */}
            <TabsContent value="available" className="space-y-6">
              {/* Search and Filters */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search positions..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CAREER_CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedExperience} onValueChange={handleExperienceChange}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Experience" />
                      </SelectTrigger>
                      <SelectContent>
                        {EXPERIENCE_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedLocation} onValueChange={handleLocationChange}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        {LOCATIONS.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Job Listings and Details */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Job List */}
                <div className="md:col-span-1 bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="font-bold text-gray-800">Found {filteredJobs.length} positions</h3>
                  </div>
                  <div className="overflow-y-auto max-h-[600px]">
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((job) => (
                        <div 
                          key={job.id}
                          onClick={() => setActiveJob(job)}
                          className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${activeJob.id === job.id ? 'bg-gray-50 border-l-4 border-maroon-600' : ''}`}
                        >
                          <h4 className="font-medium text-gray-900">{job.title}</h4>
                          <p className="text-sm text-gray-600">{job.department}</p>
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{job.location}</span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Posted: {job.postedDate}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center">
                        <p className="text-gray-500">No positions found matching your criteria.</p>
                        <button
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("All Categories");
                            setSelectedExperience("All Levels");
                            setSelectedLocation("All Locations");
                            setFilteredJobs(JOB_LISTINGS);
                            setActiveJob(JOB_LISTINGS[0]);
                          }}
                          className="mt-4 text-maroon-600 hover:text-maroon-700 text-sm font-medium"
                        >
                          Clear filters
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Job Details */}
                {activeJob && (
                  <div className="md:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 border-b">
                      <h3 className="text-2xl font-bold text-gray-900">{activeJob.title}</h3>
                      <p className="text-gray-600 mt-1">{activeJob.department}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          {activeJob.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {activeJob.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                          <GraduationCap className="h-3 w-3 mr-1" />
                          {activeJob.experience}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Job Description</h4>
                        <p className="text-gray-700">{activeJob.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {activeJob.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-maroon-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Qualifications</h4>
                        <ul className="space-y-2">
                          {activeJob.qualifications.map((qualification, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-maroon-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{qualification}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8 flex flex-wrap gap-4">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center px-5 py-2.5 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors"
                        >
                          Apply for this Position
                        </a>
                        <a 
                          href={`/colleges/${activeJob.college}`} 
                          className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          View College Profile
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* How to Apply Tab */}
            <TabsContent value="how-to-apply" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Application Process</h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 rounded-full bg-maroon-600 text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Find a Suitable Position</h4>
                        <p className="text-gray-700">
                          Browse through our available positions and find one that matches your qualifications and career goals.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 rounded-full bg-maroon-600 text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Prepare Your Application</h4>
                        <p className="text-gray-700">
                          Prepare your application including your updated resume, cover letter, and any other required documents such as certifications or reference letters.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 rounded-full bg-maroon-600 text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Submit Your Application</h4>
                        <p className="text-gray-700">
                          Submit your application through our online application portal or by emailing the HR department at careers@iisd.edu.in. Please mention the position title and reference number in the subject line.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 rounded-full bg-maroon-600 text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Interview Process</h4>
                        <p className="text-gray-700">
                          If shortlisted, you will be invited for an interview. Depending on the position, this may include multiple rounds such as a phone screening, in-person interview, and/or teaching demonstration.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 rounded-full bg-maroon-600 text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Offer and Onboarding</h4>
                        <p className="text-gray-700">
                          Successful candidates will receive an offer letter. Upon acceptance, our HR team will guide you through the onboarding process.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Need Assistance?</h4>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about the application process or available positions, please contact our HR department.
                    </p>
                    <div className="flex items-center text-maroon-600">
                      <Mail className="h-5 w-5 mr-2" />
                      <span>careers@iisd.edu.in</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* FAQ Tab */}
            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">What qualifications do I need to teach at IISD Institute?</h4>
                      <p className="text-gray-700">
                        Qualifications vary depending on the position and department. Generally, faculty positions require a minimum of a Master's degree in the relevant field. Some positions may require additional certifications, licenses, or industry experience.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">How long does the hiring process take?</h4>
                      <p className="text-gray-700">
                        The hiring process typically takes 4-6 weeks from application to offer, though this timeline may vary depending on the position and the number of applicants.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Do you offer relocation assistance?</h4>
                      <p className="text-gray-700">
                        Relocation assistance may be available for certain senior positions. This is considered on a case-by-case basis and would be discussed during the interview process.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">What benefits do you offer to employees?</h4>
                      <p className="text-gray-700">
                        We offer a comprehensive benefits package that includes health insurance, retirement benefits, paid time off, professional development opportunities, and access to campus facilities.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Are there opportunities for advancement?</h4>
                      <p className="text-gray-700">
                        Yes, we are committed to the professional growth of our employees. We provide opportunities for advancement through professional development, mentorship programs, and internal promotions when positions become available.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Can I apply for multiple positions?</h4>
                      <p className="text-gray-700">
                        Yes, you can apply for multiple positions if you meet the qualifications. Please submit separate applications for each position you are interested in.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Employee Testimonials</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Hear from our team members about their experience working at IISD Institute
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-6 italic">
                "Working at CSMPIC has been a rewarding experience. The collaborative environment allows me to grow professionally while making a meaningful impact on students' lives."
              </p>
              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-12 w-12">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80" 
                    alt="Dr. Priya Patil" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Priya Patil</h4>
                  <p className="text-sm text-gray-400">Head of Paramedical Department, CSMPIC</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-6 italic">
                "The supportive management and opportunities for innovation make Royal College an ideal place for educators who want to make a difference in their field."
              </p>
              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-12 w-12">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80" 
                    alt="Prof. Rahul Joshi" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Prof. Rahul Joshi</h4>
                  <p className="text-sm text-gray-400">Faculty, Information Technology, Royal College</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-6 italic">
                "NHPIC values professional development and provides resources for continuous learning. It's a great place to build a career in education."
              </p>
              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-12 w-12">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80" 
                    alt="Dr. Neha Gupta" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Neha Gupta</h4>
                  <p className="text-sm text-gray-400">Head of Pathology Department, NHPIC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of an educational institution dedicated to excellence and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#job-listings" 
                className="inline-flex items-center px-6 py-3 bg-maroon-600 text-white font-medium rounded-md hover:bg-maroon-700 transition-colors"
              >
                View Current Openings
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact HR Department
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default CareerOpportunities;
