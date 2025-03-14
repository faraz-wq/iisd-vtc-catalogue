
import { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Monitor, GraduationCap, Stethoscope, Pill } from 'lucide-react';
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    id: 1,
    title: "Paramedical Sciences",
    description: "Prepare for a rewarding career in healthcare with our comprehensive paramedical programs",
    icon: Stethoscope,
    color: "from-maroon-600 to-maroon-700",
    courses: [
      "B.P.Th. (Bachelor in Physiotherapy)",
      "G.N.M. (General Nursing and Midwifery)",
      "B.Sc. (Medical Laboratory Technology)",
      "D.Pharm (Diploma in Pharmacy)",
      "PG DMLT (Pathology & Imaging Technology)"
    ]
  },
  {
    id: 2,
    title: "Information Technology",
    description: "Gain cutting-edge tech skills with our industry-aligned IT education programs",
    icon: Monitor,
    color: "from-college-blue to-blue-700",
    courses: [
      "B.Sc. IT (Information Technology)",
      "B.Sc. CS (Computer Science)",
      "BCA (Bachelor of Computer Applications)",
      "Web Development & Design",
      "Software Engineering"
    ]
  },
  {
    id: 3,
    title: "Vocational Training",
    description: "Develop practical skills for immediate employment through our vocational courses",
    icon: GraduationCap,
    color: "from-college-green to-green-700",
    courses: [
      "Medical Lab Technician",
      "X-Ray Technician",
      "Cardiac Care Technician",
      "Dialysis Technician",
      "Operation Theater Technician"
    ]
  },
  {
    id: 4,
    title: "Pharmacy Studies",
    description: "Launch your pharmaceutical career with our specialized pharmacy education",
    icon: Pill,
    color: "from-purple-600 to-purple-700",
    courses: [
      "D.Pharm (Diploma in Pharmacy)",
      "B.Pharm (Bachelor of Pharmacy)",
      "Pharmacology Fundamentals",
      "Pharmaceutical Analysis",
      "Hospital Pharmacy Practice"
    ]
  },
];

const ProgramCard = ({ 
  program, 
  isActive, 
  onClick 
}: { 
  program: typeof PROGRAMS[0], 
  isActive: boolean, 
  onClick: () => void 
}) => {
  return (
    <div 
      className={cn(
        "program-card cursor-pointer group",
        isActive ? "bg-white shadow-md" : "bg-gray-50 hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      <div className="relative z-10">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-white",
          `bg-gradient-to-br ${program.color}`
        )}>
          <program.icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900">{program.title}</h3>
        <p className="text-gray-600 mb-4 group-hover:text-gray-700">{program.description}</p>
      </div>
    </div>
  );
};

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState(PROGRAMS[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-20 bg-gray-50" id="programs">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-fade-in"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover a wide range of specialized programs designed to prepare you for rewarding careers in healthcare, technology, and more
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {PROGRAMS.map((program) => (
            <ProgramCard 
              key={program.id}
              program={program}
              isActive={activeProgram.id === program.id}
              onClick={() => setActiveProgram(program)}
            />
          ))}
        </div>

        {/* Selected Program Details */}
        <div className={cn(
          "bg-white rounded-xl p-8 shadow-md transition-all duration-500",
          `border-l-4 border-${activeProgram.color.split(' ')[1]}`
        )}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {activeProgram.title} Courses
              </h3>
              <p className="text-gray-600 mb-6">
                Our specialized {activeProgram.title.toLowerCase()} programs are designed to provide hands-on experience and theoretical knowledge to excel in this field.
              </p>
              <ul className="space-y-3">
                {activeProgram.courses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className={cn(
                      "inline-flex items-center justify-center h-5 w-5 rounded-full mr-2 text-white text-xs",
                      `bg-gradient-to-br ${activeProgram.color}`
                    )}>
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a 
                  href="/programs" 
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg text-white shadow-sm transition-colors duration-200 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800"
                >
                  View All Programs
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
              {/* Placeholder - replace with actual program images */}
              <img 
                src={`https://images.unsplash.com/photo-${
                  activeProgram.id === 1 ? '1516549655959-8bde908163d5' : 
                  activeProgram.id === 2 ? '1519389950473-47ba0277781c' :
                  activeProgram.id === 3 ? '1581093450021-4a7360e9a6b5' :
                  '1587854680352-936b22b91030'
                }?auto=format&fit=crop&w=800&q=80`} 
                alt={activeProgram.title}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
