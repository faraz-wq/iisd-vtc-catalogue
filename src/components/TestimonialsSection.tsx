
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The paramedical program at Chatrapati Shivaji Maharaj College gave me practical skills that employers value. I secured a job at a top hospital immediately after graduation.",
    name: "Aditya Sharma",
    title: "Physiotherapist, Apollo Hospitals",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    program: "B.P.Th. (Bachelor in Physiotherapy)",
    year: "2022"
  },
  {
    id: 2,
    quote: "The IT faculty at IISD are industry professionals who bring real-world experience to the classroom. The hands-on projects prepared me perfectly for my current role.",
    name: "Priya Patel",
    title: "Software Developer, TCS",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    program: "B.Sc. Information Technology",
    year: "2025"
  },
  {
    id: 3,
    quote: "Royal College's vocational training gave me specialized skills in medical lab technology. The 70% practical training approach made all the difference in my career.",
    name: "Rahul Deshmukh",
    title: "Medical Lab Technician, Fortis Healthcare",
    imageSrc: "https://images.unsplash.com/photo-1663576139896-f1e9b9537634?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    program: "Diploma in Medical Lab Technology",
    year: "2021"
  },
  {
    id: 4,
    quote: "The pharmacy program at N.H. Paramedical College provided me with comprehensive knowledge and practical experience. The faculty support was exceptional.",
    name: "Sneha Joshi",
    title: "Pharmacist, Lifeline Pharmaceuticals",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    program: "D.Pharm (Diploma in Pharmacy)",
    year: "2022"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="py-20 bg-gray-900 relative overflow-hidden"
      id="testimonials"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-maroon-600/10 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-college-blue/10 to-transparent"></div>
      </div>
      
      <div 
        ref={testimonialRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Hear from our alumni who have successfully launched their careers after graduating from our institutions
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Quote */}
              <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-white/10 relative">
                <Quote className="absolute text-maroon-500/20 h-24 w-24 -top-4 -left-4 rotate-180 z-1100" />
                
                <div className="relative">
                  {TESTIMONIALS.map((testimonial, idx) => (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "transition-opacity duration-500 absolute inset-0",
                        idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      )}
                    >
                      <p className="text-xl md:text-2xl font-light text-gray-100 italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-maroon-500">
                          <img
                            src={testimonial.imageSrc}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Current testimonial for proper height */}
                  <div className="opacity-0 pointer-events-none">
                    <p className="text-xl md:text-2xl font-light text-transparent italic mb-6 leading-relaxed">
                      "{TESTIMONIALS[activeIndex].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full"></div>
                      <div>
                        <h4 className="text-transparent font-semibold">{TESTIMONIALS[activeIndex].name}</h4>
                        <p className="text-transparent text-sm">{TESTIMONIALS[activeIndex].title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Student details */}
              <div className="flex flex-col items-center">
                <div className="relative bg-gradient-to-b from-maroon-600 to-maroon-800 rounded-xl p-1 mb-8 shadow-xl">
                  <div className="h-60 w-60 md:h-80 md:w-80 overflow-hidden rounded-lg relative">
                    {TESTIMONIALS.map((testimonial, idx) => (
                      <div
                        key={testimonial.id}
                        className={cn(
                          "absolute inset-0 transition-all duration-500",
                          idx === activeIndex 
                            ? "opacity-100 scale-100 rotate-0" 
                            : "opacity-0 scale-95 rotate-3"
                        )}
                      >
                        <img
                          src={testimonial.imageSrc}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center w-full max-w-md">
                  {TESTIMONIALS.map((testimonial, idx) => (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "transition-all duration-500 absolute inset-0",
                        idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      )}
                    >
                      <div className="px-4">
                        <h4 className="text-xl font-semibold text-white mb-1">
                          {testimonial.program}
                        </h4>
                        <p className="text-gray-400">
                          Class of {testimonial.year}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Current testimonial for proper height */}
                  <div className="opacity-0 pointer-events-none">
                    <div className="px-4">
                      <h4 className="text-xl font-semibold text-transparent mb-1">
                        {TESTIMONIALS[activeIndex].program}
                      </h4>
                      <p className="text-transparent">
                        Class of {TESTIMONIALS[activeIndex].year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating && idx !== activeIndex) {
                      setIsAnimating(true);
                      setActiveIndex(idx);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none",
                    idx === activeIndex
                      ? "bg-white/90 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
