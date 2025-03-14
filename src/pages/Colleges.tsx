import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

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

const Colleges = () => {
  const collegeList = Object.values(COLLEGES);
  console.log("College List:", collegeList);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(HEADER_BANNER_URL)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Our Colleges
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Explore our network of institutions dedicated to excellence.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeList.map((college, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${college.banner})` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {college.name}
                      </h2>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> {college.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">{college.description}</p>
                  <div className="mt-6">
                    <Link
                      to={`/college/${college.id}`}
                      className={`inline-flex items-center px-4 py-2 text-white rounded-md hover:opacity-90 transition bg-maroon-600`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Colleges;
