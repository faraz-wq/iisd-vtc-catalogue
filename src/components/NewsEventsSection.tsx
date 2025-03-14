
import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import AnimatedCounter from './AnimatedCounter';

const NEWS_EVENTS = [
  {
    id: 1,
    title: "2025 Admissions Now Open",
    description: "Applications are now being accepted for the 2025-26 academic year across all our colleges.",
    date: "April 15, 2025",
    category: "Admissions",
    link: "/inquire"
  },
  {
    id: 2,
    title: "Healthcare Career Fair",
    description: "Join us for a career fair featuring top healthcare employers looking to hire our graduates.",
    date: "May 10, 2025",
    category: "Events",
    link: "/events/healthcare-career-fair"
  },
  {
    id: 3,
    title: "New IT Lab Inauguration",
    description: "State-of-the-art IT infrastructure unveiled at Chatrapati Shivaji Maharaj Paramedical & IT College.",
    date: "June 5, 2025",
    category: "Facilities",
    link: "/news/it-lab-inauguration"
  },
  {
    id: 4,
    title: "Industry Partnership Announcement",
    description: "IISD partners with leading hospitals and IT companies to enhance placement opportunities.",
    date: "June 15, 2025",
    category: "Partnerships",
    link: "/news/industry-partnerships"
  },
];

const STATS = [
  { id: 1, value: 95, label: "Placement Rate", suffix: "%" },
  { id: 2, value: 35, label: "Industry Partners", suffix: "+" },
  { id: 3, value: 5000, label: "Successful Alumni", suffix: "+" },
  { id: 4, value: 28, label: "Professional Programs", suffix: "" },
];

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState("news");
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
    <section 
      ref={sectionRef}
      className="py-20 bg-white section-fade-in"
      id="news"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay informed about admissions, events, and news from our colleges
          </p>
          
          {/* Tabs */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mt-8">
            <button
              onClick={() => setActiveTab("news")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "news"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              News & Announcements
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "stats"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Success Metrics
            </button>
          </div>
        </div>

        {/* News & Events Content */}
        <div className={cn(
          "grid md:grid-cols-2 gap-8 transition-opacity duration-300",
          activeTab === "news" ? "opacity-100" : "hidden opacity-0"
        )}>
          {NEWS_EVENTS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="bg-maroon-50 text-maroon-600 p-3 rounded-lg">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-700 mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
                <a
                  href={item.link}
                  className="inline-flex items-center text-sm font-medium text-maroon-600 hover:text-maroon-700"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Content */}
        <div className={cn(
          "transition-opacity duration-300",
          activeTab === "stats" ? "opacity-100" : "hidden opacity-0"
        )}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {STATS.map((stat) => (
              <div 
                key={stat.id}
                className="bg-white rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Additional stats details */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Our strong network of industry partners ensures that our students have access to the best internship and job opportunities in the healthcare and IT sectors.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-700 font-medium">Apollo Hospitals</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-700 font-medium">Fortis Healthcare</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-700 font-medium">TCS</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-700 font-medium">Infosys</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graduate Success</h3>
              <p className="text-gray-600 mb-4">
                Our graduates consistently secure positions in top organizations, with many advancing to leadership roles within a few years of graduation.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-maroon-600 mr-3"></div>
                  <span className="text-gray-700">95% placement within 3 months of graduation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-college-blue mr-3"></div>
                  <span className="text-gray-700">78% of alumni report career advancement within 2 years</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-college-green mr-3"></div>
                  <span className="text-gray-700">82% satisfaction rate with career preparation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-600 mr-3"></div>
                  <span className="text-gray-700">400+ alumni in leadership positions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
