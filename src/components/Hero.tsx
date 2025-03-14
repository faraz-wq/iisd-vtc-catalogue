
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    "id": 1,
    "title": "Chatrapati Shivaji Maharaj Paramedical & IT College",
    "description": "Excellence in paramedical education with UGC approved programs",
    "imageSrc": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "Explore Programs",
    "ctaLink": "/colleges/csmpic",
    "stats": [
      { "value": 100, "label": "Job Placement" },
      { "value": 25, "label": "Industry Partners" },
      { "value": 10, "label": "Healthcare Programs" }
    ],
    "color": "from-maroon-600/70 to-maroon-800/70"
  },
  {
    "id": 2,
    "title": "Royal College of Vocational Training & Skill Development",
    "description": "Recognized by Government of India, offering vocational and skill-based courses",
    "imageSrc": "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "Discover Training",
    "ctaLink": "/colleges/royal",
    "stats": [
      { "value": 98, "label": "Employment Rate" },
      { "value": 70, "label": "Practical Training" },
      { "value": 15, "label": "Vocational Courses" }
    ],
    "color": "from-college-green/70 to-college-green/70"
  },
  {
    "id": 3,
    "title": "N.H. Paramedical and IT College (NHPC)",
    "description": "Bridging healthcare and technology for future professionals",
    "imageSrc": "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "View Courses",
    "ctaLink": "/colleges/nhpic",
    "stats": [
      { "value": 100, "label": "Career Support" },
      { "value": 20, "label": "Specialized Labs" },
      { "value": 12, "label": "IT Programs" }
    ],
    "color": "from-college-blue/70 to-college-blue/70"
  },
  {
    "id": 4,
    "title": "Millat English Medium High School & Jr. College",
    "description": "Government Recognized Minority Institution",
    "imageSrc": "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "Learn More",
    "ctaLink": "/colleges/millat",
    "stats": [
      { "value": 500, "label": "Students Enrolled" },
      { "value": 30, "label": "Faculty Members" },
      { "value": 12, "label": "Years of Excellence" }
    ],
    "color": "from-indigo-600/70 to-indigo-800/70"
  },
  {
    "id": 5,
    "title": "Nashik Super-30 (NEET/IIT-JEE Academy)",
    "description": "Top-notch preparation for NEET/IIT-JEE aspirants",
    "imageSrc": "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "Join Coaching",
    "ctaLink": "/colleges/nashiksuper30",
    "stats": [
      { "value": 95, "label": "Success Rate" },
      { "value": 10, "label": "Expert Faculty" },
      { "value": 500, "label": "Students Trained" }
    ],
    "color": "from-orange-600/70 to-orange-800/70"
  },
  {
    "id": 6,
    "title": "Nashik Paramedical & IT College",
    "description": "Industry-aligned curriculum, state-of-the-art labs, and career support.",
    "imageSrc": "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2070&auto=format&fit=crop",
    "ctaText": "Learn More",
    "ctaLink": "/colleges/npic",
    "stats": [
      { "value": 95, "label": "Student Satisfaction" },
      { "value": 30, "label": "Modern Facilities" },
      { "value": 20, "label": "Industry Tie-ups" }
    ],
    "color": "from-indigo-600/70 to-indigo-800/70"
  }
]


const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const getTextColor = (gradient) => {
    const colorMap = {
      "from-maroon-600/70 to-maroon-800/70": "text-maroon-600",
      "from-college-green/70 to-college-green/70": "text-college-green",
      "from-college-blue/70 to-college-blue/70": "text-college-blue",
      "from-indigo-600/70 to-indigo-800/70": "text-indigo-600",
      "from-orange-600/70 to-orange-800/70": "text-orange-800"
    };
    return colorMap[gradient] || "text-white";
  };  

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [isAnimating]);

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

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          ref={index === activeSlide ? slideRef : null}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={cn(
                  "text-white space-y-6 max-w-xl",
                  index === activeSlide ? "animate-fade-in" : ""
                )}>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm">
                    Featured College
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={slide.ctaLink}
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 focus:outline-none"
                    >
                      {slide.ctaText}
                    </a>
                    <a
                      href="/inquire"
                      className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded-lg bg-white hover:bg-gray-100 ${getTextColor(slide.color)} focus:outline-none`}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                
                {/* Stats */}
                <div className={cn(
                  "hidden md:grid grid-cols-3 gap-4",
                  index === activeSlide ? "animate-fade-in" : ""
                )}>
                  {slide.stats.map((stat, statIndex) => (
                    <div 
                    key={statIndex} 
                    className={`glass-card rounded-xl p-4 text-center ${getTextColor(slide.color)}`}
                    style={{ animationDelay: `${statIndex * 100 + 300}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}%</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider controls */}
      <div className="absolute left-0 right-0 bottom-8 z-30 flex justify-center items-center space-x-3">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:outline-none transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="flex space-x-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== activeSlide) {
                  setIsAnimating(true);
                  setActiveSlide(index);
                  setTimeout(() => setIsAnimating(false), 1000);
                }
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 focus:outline-none",
                index === activeSlide
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:outline-none transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
