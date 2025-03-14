
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Building, 
  GraduationCap, 
  Users, 
  Search, 
  MapPin, 
  Phone, 
  Mail,
  CalendarDays,
  Check
} from 'lucide-react';

// College data 
const COLLEGES = {
  csmpic: {
    name:  "Chhatrapati Shivaji Maharaj Paramedical & IT College",
    shortName: "CSMPIC",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    description: "Established in 2010, Chatrapati Shivaji Maharaj Paramedical & IT College has been at the forefront of providing quality education in paramedical sciences and information technology. Our state-of-the-art facilities and experienced faculty ensure that students receive the best education possible.",
    location: "Mumbai, Maharashtra",
    affiliation: "NCVET (Central Government of India)",
    contact: {
      address: "647, Golden Jubilee Building, Near BSNL Office, Bhawani Peth, Pune - 411042",
      phone: ["+91 8149709882", "+91 8379059883", "+91 8928413994"],
      email: "info@csmpic.edu.in"
    },
    color: "maroon-600",
    programs: [
      {
        name: "B.P.Th. (Bachelor in Physiotherapy)",
        duration: "4.5 years",
        description: "A comprehensive program that prepares students for a career in physiotherapy with hands-on clinical experience."
      },
      {
        name: "G.N.M. (General Nursing and Midwifery)",
        duration: "3 years",
        description: "A program that trains students in the art and science of nursing care."
      },
      {
        name: "B.Sc. IT (Information Technology)",
        duration: "3 years",
        description: "A degree program focusing on computer systems, software development, and information management."
      },
      {
        name: "B.Sc. Computer Science",
        duration: "3 years",
        description: "A program that provides an in-depth understanding of computer science, algorithms, and programming."
      },
      {
        name: "BCA (Bachelor of Computer Applications)",
        duration: "3 years",
        description: "A program that prepares students for careers in the field of computer applications and software development."
      },
      {
        name: "B.Voc. (Radiology & Imaging Technology)",
        duration: "3 years",
        description: "A professional course focused on radiology and imaging technologies for medical diagnostics."
      },
      {
        name: "B.Voc. (Medical Lab Technology)",
        duration: "3 years",
        description: "A vocational course specializing in laboratory techniques and medical diagnostics."
      },
      {
        name: "B.Voc. (Cardiac Care Technology)",
        duration: "3 years",
        description: "A specialized course in cardiac care, covering ECG, echocardiography, and critical care support."
      },
      {
        name: "DMLT (Diploma in Medical Lab Technology)",
        duration: "2 years",
        description: "A diploma course focused on laboratory techniques, diagnostics, and medical testing."
      },
      {
        name: "D.Pharm (Diploma in Pharmacy)",
        duration: "2 years",
        description: "A foundational course for students pursuing a career in pharmacy and pharmaceutical sciences."
      },
      {
        name: "PG DMLT (Post Graduate Diploma in Medical Lab Technology)",
        duration: "1 year",
        description: "A postgraduate diploma for advanced skills in medical laboratory diagnostics, affiliated with the Maharashtra State Board of Technology Education."
      },
      {
        name: "PG X-RAY (Post Graduate Diploma in X-Ray Technology)",
        duration: "1 year",
        description: "A specialized diploma in X-ray imaging and radiography techniques, affiliated with the Maharashtra State Board of Technology Education."
      },
      {
        name: "D.I.T. (Diploma in Information Technology)",
        duration: "2 years",
        description: "A diploma course providing foundational knowledge in IT and computer applications."
      },
      {
        name: "D.P.T.T. (Diploma in Physiotherapy Technician Training)",
        duration: "2 years",
        description: "A specialized course for training physiotherapy technicians."
      }
    ],
    facilities: [
      "Modern Computer Labs",
      "Physiotherapy Clinic",
      "Nursing Simulation Lab",
      "Digital Library",
      "Sports Complex",
      "Cafeteria",
      "Auditorium"
    ],
    faculty: [
      {
        name: "Dr. Rajesh Sharma",
        position: "Principal",
        qualification: "Ph.D. in Healthcare Administration",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Dr. Priya Patil",
        position: "Head of Paramedical Department",
        qualification: "Ph.D. in Physiotherapy",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Prof. Sanjay Desai",
        position: "Head of IT Department",
        qualification: "M.Tech in Computer Science",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      }
    ],
    events: [
      {
        title: "Annual Technical Symposium",
        date: "March 15, 2024",
        description: "A platform for students to showcase their technical projects and innovations."
      },
      {
        title: "Healthcare Workshop",
        date: "April 10, 2024",
        description: "A workshop focused on the latest advancements in healthcare technology."
      }
    ]
  },
  royal: {
    name: "Royal College of Vocational Training and Skill Development",
    shortName: "RC",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    description: "Royal College, established in 2008, is renowned for its excellence in education across various disciplines. Our focus on practical knowledge and industry exposure makes our graduates highly sought after in the job market.",
    location: "Thane, Maharashtra",
    eligibility: "X-XII Passed/Any Degree Eligibility",
    installmentFeesOption: true,
    jobTrainingFacility: true,
    contact: {
      address: "Penkar Pada, Mira Road(East) Dist., Thane - 401107",
      phone: "+91 98765 12345",
      email: "info@royalcollege.edu.in"
    },
    color: "college-blue",
    programs: [
      {
        name: "B.Sc. (Medical Laboratory Technology)",
        duration: "3 years",
        description: "A program that trains students in laboratory techniques used in medical diagnostics."
      },
      {
        name: "D.Pharm (Diploma in Pharmacy)",
        duration: "2 years",
        description: "A program that prepares students for careers in the pharmaceutical industry."
      },{
        name: "Operation Theatre Technology",
        duration: "1 year",
        description: "A specialized course training students in operation theatre assistance and surgical procedures."
      },
      {
        name: "Physiotherapy Technician",
        duration: "1 year",
        description: "A foundational course in physiotherapy techniques and rehabilitation support."
      }
      
    ],
    facilities: [
      "Advanced Computer Labs",
      "Medical Testing Laboratory",
      "Pharmacy Lab",
      "Digital Library",
      "Gymnasium",
      "Student Lounge",
      "Seminar Hall"
    ],
    faculty: [
      {
        name: "Dr. Anjali Deshmukh",
        position: "Principal",
        qualification: "Ph.D. in Education",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Dr. Rahul Joshi",
        position: "Head of Medical Laboratory Technology",
        qualification: "Ph.D. in Medical Sciences",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Prof. Meera Singh",
        position: "Head of Pharmacy Department",
        qualification: "M.Pharm",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      }
    ],
    events: [
      {
        title: "Pharmafest",
        date: "February 20, 2024",
        description: "An annual event celebrating innovations in the pharmaceutical industry."
      },
      {
        title: "Tech Expo",
        date: "May 5, 2024",
        description: "An exhibition showcasing the latest technological innovations by students."
      }
    ]
  },
  nhpic: {
    name: "N.H. Paramedical and IT College",
    shortName: "NHPIC",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    description: "N.H. Paramedical and IT College, founded in 2015, is committed to providing high-quality education in paramedical sciences and information technology. Our innovative teaching methodologies ensure that students are well-prepared for their future careers.",
    location: "Nagpur, Maharashtra",
    contact: {
      address: "NH English Academy, Asmita Enclave, Naya Nagar, Mira Road(E), Thane - 401107",
      phone: "+91 98765 67890",
      email: "info@nhpic.edu.in"
    },
    color: "college-green",
      programs: [{
        "name": "B.P.Th. (Bachelor in Physiotherapy)",
        "duration": "4.5 years",
        "description": "A professional course in physiotherapy with hands-on clinical training."
      },
      {
        "name": "Theater Technician",
        "duration": "1 year",
        "description": "A course specializing in operating theatre assistance and surgical preparation."
      },
      {
        "name": "Dialysis Technician",
        "duration": "1 year",
        "description": "A specialized program training students in dialysis machine operation and patient care."
      },
      {
        "name": "G.N.M. (General Nursing and Midwifery)",
        "duration": "3 years",
        "description": "A program that trains students in the art and science of nursing care and midwifery."
      },    
      {
        name: "Medical Lab Technician",
        duration: "1 year",
        description: "A certificate program that trains students in laboratory techniques used in medical diagnostics."
      },
      {
        name: "X-Ray Technician",
        duration: "1 year",
        description: "A program that prepares students for careers as X-Ray technicians in healthcare settings."
      },
      {
        name: "Operation Theater Technician",
        duration: "1 year",
        description: "A program that trains students to assist during surgical procedures in operating rooms."
      }
    ],
    facilities: [
      "Medical Imaging Lab",
      "Computer Laboratory",
      "Pathology Lab",
      "Library",
      "Sports Ground",
      "Cafeteria",
      "Conference Room"
    ],
    faculty: [
      {
        name: "Dr. Suresh Kumar",
        position: "Principal",
        qualification: "Ph.D. in Medical Sciences",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Dr. Neha Gupta",
        position: "Head of Pathology Department",
        qualification: "M.D. in Pathology",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Prof. Vivek Sharma",
        position: "Head of IT Department",
        qualification: "M.Tech in Information Technology",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      }
    ],
    events: [
      {
        title: "MedTech Conference",
        date: "April 25, 2024",
        description: "A conference focusing on the intersection of medicine and technology."
      },
      {
        title: "Healthcare Career Fair",
        date: "June 10, 2024",
        description: "An opportunity for students to interact with potential employers in the healthcare sector."
      }
    ]
  },
  npic: {
    name: "Nashik Paramedical & IT College",
    shortName: "NPIC",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    description: "Nashik Paramedical & IT College, established in 2012, is committed to providing quality education in paramedical sciences and information technology. Our focus on practical training and industry partnerships ensures that our graduates are job-ready.",
    location: "Nashik, Maharashtra",
    "affiliation": "NCVET (Central Government of India)",
    contact: {
      address: "Millat Campus, Survey 973, Sector No. B/3, Shivaji Chowk, New Nashik",
      phone: "+91 98765 09876",
      email: "info@npic.edu.in"
    },
    color: "purple-600",
    programs: [
      {
        "name": "Nursing",
        "duration": "3 years",
        "description": "A comprehensive program for training professional nurses."
      }, 
      {
        name: "Cardiac Care Technician",
        duration: "1 year",
        description: "A program that trains students to assist cardiologists in the diagnosis and treatment of heart diseases."
      },
      {
        name: "Dialysis Technician",
        duration: "1 year",
        description: "A program that prepares students to operate dialysis equipment and assist in renal care."
      },
      {
        name: "B.Sc. CS (Computer Science)",
        duration: "3 years",
        description: "A degree program focusing on computer science principles and applications."
      },
      {
        name: "B.Pharm (Bachelor of Pharmacy)",
        duration: "4 years",
        description: "A degree program that prepares students for careers in the pharmaceutical industry."
      }
    ],
    facilities: [
      "Cardiac Care Lab",
      "Dialysis Training Unit",
      "Computer Laboratory",
      "Pharmacy Lab",
      "Library",
      "Indoor Games Room",
      "Seminar Hall"
    ],
    faculty: [
      {
        name: "Dr. Prakash Patil",
        position: "Principal",
        qualification: "Ph.D. in Pharmacy",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Dr. Sonali Deshmukh",
        position: "Head of Paramedical Department",
        qualification: "M.D. in Medicine",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Prof. Anil Kulkarni",
        position: "Head of Computer Science Department",
        qualification: "M.Tech in Computer Science",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
      }
    ],
    events: [
      {
        title: "Health Tech Summit",
        date: "March 30, 2024",
        description: "A summit focusing on the latest technologies in healthcare."
      },
      {
        title: "Pharmacy Symposium",
        date: "May 15, 2024",
        description: "An event showcasing research and innovations in pharmacy."
      }
    ]
  },
  memhs: {
    "name": "Millat English Medium High School & Jr. College, New Nashik",
    "shortName": "Millat School",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    "description": "A government-recognized minority institution offering quality education from Nursery to 12th standard with a focus on academic excellence and Deeniyat studies.",
    "location": "New Nashik, Maharashtra",
    "affiliation": "Government Recognized (UDISE No. 2720184811)",
    "type": "Minority Institution",
    "programs": [
      {
        "name": "Nursery to 12th (S.S.C Board with Deeniyat)",
        "duration": "14 years",
        "description": "Standard schooling from Nursery to 12th grade under the S.S.C board, including Deeniyat education."
      }
    ],
    "facilities": ["Library", "Science Labs", "Computer Lab", "Sports Facilities", "Smart Classrooms"],
    "contact": {
      address: "Millat Campus, Survey 973, Sector No. B/3, Shivaji Chowk, New Nashik",
      "phone": ["99709 66551", "9021911115"],
      "email": "millat.englishnews@gmail.com"
    },
    "color": "blue",
    "faculty": [],
    "events": []
  },  
  ns30: {
    "name": "Nashik Super-30 (NEET/IIT-JEE Academy)",
    "shortName": "Nashik Super-30",
    "logo": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=800&auto=format&fit=crop",
    "banner": "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop",
    "description": "A premier coaching institute dedicated to training students for NEET and IIT-JEE exams with expert guidance and a structured curriculum.",
    "location": "Nashik, Maharashtra",
    "programs": [
      {
        "name": "2-Year NEET/IIT-JEE Preparation",
        "duration": "2 years",
        "description": "A comprehensive coaching program for students aiming to crack NEET and IIT-JEE with expert faculty and rigorous practice sessions."
      },
      {
        "name": "Foundation Course for NEET/IIT-JEE",
        "duration": "1 year",
        "description": "A foundational program designed to strengthen students' concepts and problem-solving skills for NEET and IIT-JEE."
      }
    ],
    "facilities": ["Smart Classrooms", "Mock Tests", "Personalized Mentorship", "Study Materials", "Doubt-Solving Sessions"],
    "contact": {
      address: "Millat Campus, Survey 973, Sector No. B/3, Shivaji Chowk, New Nashik",
      "phone": ["8378815050", "9834093380"],
      "email": "nashiksuper30@gmail.com"
    },
    "color": "red",
    "faculty": [],
    "events": []
  }
  
};

const CollegeDetail = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Type guard to check if collegeId exists in COLLEGES
  const isValidCollege = (id: string | undefined): id is keyof typeof COLLEGES => {
    return !!id && id in COLLEGES;
  };
  
  if (!isValidCollege(collegeId)) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">College Not Found</h1>
            <p className="text-gray-600 mb-6">The college you are looking for does not exist.</p>
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const college = COLLEGES[collegeId];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Banner and College Info */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center" 
        style={{ backgroundImage: `url(${college.banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src={college.logo} 
                  alt={college.name} 
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
              <div className="text-white text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">{college.name}</h1>
                <p className="text-lg mt-2 flex items-center justify-center md:justify-start">
                  <MapPin className="h-5 w-5 mr-2" /> {college.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 bg-white p-1 shadow-sm w-full md:w-auto flex flex-wrap justify-center">
              <TabsTrigger value="overview" className="px-4 py-2 text-sm md:text-base">Overview</TabsTrigger>
              <TabsTrigger value="programs" className="px-4 py-2 text-sm md:text-base">Programs</TabsTrigger>
              <TabsTrigger value="facilities" className="px-4 py-2 text-sm md:text-base">Facilities</TabsTrigger>
              <TabsTrigger value="faculty" className="px-4 py-2 text-sm md:text-base">Faculty</TabsTrigger>
              <TabsTrigger value="contact" className="px-4 py-2 text-sm md:text-base">Contact</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {college.shortName}</h2>
                  <p className="text-gray-700 leading-relaxed">{college.description}</p>
                  
                  {/* Key Highlights */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full bg-${college.color} text-white`}>
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Quality Education</h4>
                          <p className="text-sm text-gray-600">Industry-aligned curriculum and experienced faculty</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full bg-${college.color} text-white`}>
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Modern Facilities</h4>
                          <p className="text-sm text-gray-600">State-of-the-art labs and learning spaces</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full bg-${college.color} text-white`}>
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Career Support</h4>
                          <p className="text-sm text-gray-600">Placement assistance and industry connections</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Upcoming Events */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
                  <div className="space-y-4">
                    {college.events.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4 border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className={`p-2 rounded-lg bg-${college.color} text-white flex-shrink-0`}>
                          <CalendarDays className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                          <p className="text-sm text-gray-700">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Programs Offered</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {college.programs.map((program, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className={`p-4 bg-${college.color} text-white`}>
                          <h3 className="font-bold text-lg">{program.name}</h3>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-4">{program.description}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Duration: {program.duration}
                          </div>
                          <div className="mt-4">
                            <a 
                              href="/inquire" 
                              className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded border border-${college.color} text-${college.color} hover:bg-${college.color} hover:text-white transition-colors`}
                            >
                              Inquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Facilities Tab */}
            <TabsContent value="facilities" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Campus Facilities</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-6">
                        At {college.name}, we provide state-of-the-art facilities to ensure that our students have access to the best resources for their education and overall development.
                      </p>
                      <ul className="space-y-3">
                        {college.facilities.map((facility, index) => (
                          <li key={index} className="flex items-center">
                            <Check className={`h-5 w-5 mr-2 text-${college.color}`} />
                            <span className="text-gray-700">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden h-64 md:h-80">
                      <img 
                        src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80`}
                        alt="Campus Facilities"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Faculty Tab */}
            <TabsContent value="faculty" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Faculty</h2>
                  <p className="text-gray-700 mb-6">
                    Our faculty members are experienced professionals who are dedicated to providing quality education and guidance to our students.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {college.faculty.map((faculty, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-3 mx-auto rounded-full overflow-hidden h-24 w-24 md:h-32 md:w-32 bg-gray-200">
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-gray-800">{faculty.name}</h3>
                        <p className={`text-sm text-${college.color} font-medium`}>{faculty.position}</p>
                        <p className="text-sm text-gray-600">{faculty.qualification}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className={`h-5 w-5 text-${college.color}`} />
                          <div>
                            <h3 className="font-medium text-gray-800">Address</h3>
                            <p className="text-sm text-gray-600">{college.contact.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className={`h-5 w-5 text-${college.color}`} />
                          <div>
                            <h3 className="font-medium text-gray-800">Phone</h3>
                            <p className="text-sm text-gray-600 gap-6">{college.contact.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className={`h-5 w-5 text-${college.color}`} />
                          <div>
                            <h3 className="font-medium text-gray-800">Email</h3>
                            <p className="text-sm text-gray-600">{college.contact.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium text-gray-800 mb-3">Inquire About Admission</h3>
                        <a 
                          href="/inquire" 
                          className={`inline-flex items-center px-4 py-2 bg-${college.color} text-white rounded-md hover:opacity-90 transition-colors`}
                        >
                          Submit Inquiry
                        </a>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden h-64">
                      {/* This would typically be a Google Map - using a placeholder image */}
                      <img 
                        src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80" 
                        alt="Location Map"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeDetail;
