
import { useNavigate } from 'react-router-dom';
import CollegeCard from './CollegeCard';

// College data
const COLLEGES = [
  {
    id: "csmpic",
    name: "Chatrapati Shivaji Maharaj Paramedical & IT College",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    programs: [
      { name: "Bachelor in Physiotherapy", description: "4-year program" },
      { name: "General Nursing and Midwifery", description: "3-year program" },
      { name: "B.Sc. IT", description: "3-year program" }
    ],
    location: "Mumbai, Maharashtra",
    color: "maroon-600",
    href: "/colleges/csmpic"
  },
  {
    id: "royal",
    name: "Royal College",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    programs: [
      { name: "Medical Laboratory Technology", description: "3-year program" },
      { name: "Diploma in Pharmacy", description: "2-year program" },
      { name: "Web Development & Design", description: "1-year program" }
    ],
    location: "Pune, Maharashtra",
    color: "college-blue",
    href: "/colleges/royal"
  },
  {
    id: "nhpic",
    name: "N.H. Paramedical and IT College",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    programs: [
      { name: "PG DMLT (Pathology & Imaging)", description: "2-year program" },
      { name: "Medical Lab Technician", description: "1-year program" },
      { name: "X-Ray Technician", description: "1-year program" }
    ],
    location: "Nagpur, Maharashtra",
    color: "college-green",
    href: "/colleges/nhpic"
  },
  {
    id: "npic",
    name: "Nashik Paramedical & IT College",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    programs: [
      { name: "Cardiac Care Technician", description: "1-year program" },
      { name: "B.Sc. Computer Science", description: "3-year program" },
      { name: "B.Pharm (Bachelor of Pharmacy)", description: "4-year program" }
    ],
    location: "Nashik, Maharashtra",
    color: "purple-600",
    href: "/colleges/npic"
  }
];

const CollegeList = () => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {COLLEGES.map((college) => (
        <CollegeCard
          key={college.id}
          name={college.name}
          imageSrc={college.imageSrc}
          programs={college.programs}
          location={college.location}
          color={college.color}
          href={college.href}
        />
      ))}
    </div>
  );
};

export default CollegeList;
