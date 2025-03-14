
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    title: "Chatrapati Shivaji Maharaj Paramedical & IT College",
    description: "Excellence in paramedical education with UGC approved programs",
    imageSrc: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Explore Programs",
    ctaLink: "/colleges/csmpic",
    stats: [
      { value: 100, label: "Job Placement" },
      { value: 25, label: "Industry Partners" },
      { value: 10, label: "Healthcare Programs" },
    ],
    color: "from-maroon-600/90 to-maroon-800/90",
  },
  {
    id: 2,
    title: "Royal College of Vocational Training",
    description: "Training skilled professionals for tomorrow's workforce needs",
    imageSrc: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Discover Training",
    ctaLink: "/colleges/royal",
    stats: [
      { value: 98, label: "Employment Rate" },
      { value: 70, label: "Practical Training" },
      { value: 15, label: "Vocational Courses" },
    ],
    color: "from-college-green/90 to-college-green/90",
  },
  {
    id: 3,
    title: "N.H. Paramedical and IT College",
    description: "Bridging healthcare and technology for future professionals",
    imageSrc: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop",
    ctaText: "View Courses",
    ctaLink: "/colleges/nhpic",
    stats: [
      { value: 100, label: "Career Support" },
      { value: 20, label: "Specialized Labs" },
      { value: 12, label: "IT Programs" },
    ],
    color: "from-college-blue/90 to-college-blue/90",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

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
                      href="/admissions"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-maroon-600 hover:bg-maroon-700 focus:outline-none"
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
                      className="glass-card rounded-xl p-4 text-white text-center"
                      style={{ animationDelay: `${statIndex * 100 + 300}ms` }}
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}%</div>
                      <div className="text-sm font-medium opacity-80">{stat.label}</div>
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
