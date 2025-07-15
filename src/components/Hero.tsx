import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Schema.org structured data for educational institutions
const getSchemaMarkup = (slide) => {
  return `
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "${slide.title}",
      "description": "${slide.description}",
      "url": "${window.location.origin}${slide.ctaLink}",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nashik",
        "addressCountry": "India"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${slide.stats[0].value}",
        "reviewCount": "100"
      },
      "offers": {
        "@type": "Offer",
        "category": "Education",
        "numberOfItems": "${slide.stats[2].value}"
      }
    }
  `;
};

const SLIDES = [
  {
    id: 1,
    title: "Goa College of Skill Development",
    description:
      "Industry-aligned curriculum, state-of-the-art labs, and career support.",
    ctaText: "Explore Paramedical Programs",
    ctaLink: "/colleges/gcsd",
    imageSrc:
      "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: 100, label: "Job Placement" },
      { value: 25, label: "Industry Partners" },
      { value: 10, label: "Healthcare Programs" },
    ],
    color: "from-[#800000]/70 to-[#6F2A3D]/70",
    featured: true,
  },
  {
    id: 2,
    title: "Chatrapati Shivaji Maharaj Paramedical & IT College",
    description:
      "UGC approved paramedical education programs with 100% job placement track record",
    imageSrc:
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Explore Paramedical Programs",
    ctaLink: "/colleges/csmpic",
    stats: [
      { value: 100, label: "Job Placement" },
      { value: 25, label: "Industry Partners" },
      { value: 10, label: "Healthcare Programs" },
    ],
    color: "from-[#6F2A3D]/70 to-[#4A3B6C]/70",
  },
  {
    id: 3,
    title: "Royal College of Vocational Training & Skill Development",
    description:
      "Recognized by Government of India, offering vocational and skill-based courses",
    imageSrc:
      "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Discover Training",
    ctaLink: "/colleges/royal",
    stats: [
      { value: 98, label: "Employment Rate" },
      { value: 70, label: "Practical Training" },
      { value: 15, label: "Vocational Courses" },
    ],
    color: "from-[#4A3B6C]/70 to-[#2F4B7C]/70",
  },
  {
    id: 4,
    title: "N.H. Paramedical and IT College (NHPC)",
    description: "Bridging healthcare and technology for future professionals",
    imageSrc:
      "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop",
    ctaText: "View Courses",
    ctaLink: "/colleges/nhpic",
    stats: [
      { value: 100, label: "Career Support" },
      { value: 20, label: "Specialized Labs" },
      { value: 12, label: "IT Programs" },
    ],
    color: "from-[#2F4B7C]/70 to-[#1C509E]/70",
  },
  {
    id: 5,
    title: "Nashik Paramedical & IT College",
    description:
      "Industry-aligned curriculum, state-of-the-art labs, and career support.",
    imageSrc:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Learn More",
    ctaLink: "/colleges/npic",
    stats: [
      { value: 95, label: "Student Satisfaction" },
      { value: 30, label: "Modern Facilities" },
      { value: 20, label: "Industry Tie-ups" },
    ],
    color: "from-[#1C509E]/70 to-[#0000FF]/70",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);

  // Get text color based on gradient
  const getTextColor = (gradient) => {
    const colorMap = {
      "from-[#800000]/70 to-[#6F2A3D]/70": "text-[#800000]/70",
      "from-[#6F2A3D]/70 to-[#4A3B6C]/70": "text-[#6F2A3D]/70",
      "from-[#4A3B6C]/70 to-[#2F4B7C]/70": "text-[#4A3B6C]/70",
      "from-[#2F4B7C]/70 to-[#1C509E]/70": "text-[#2F4B7C]/70",
      "from-[#1C509E]/70 to-[#0000FF]/70": "text-[#0000FF]/70",
    };
    return colorMap[gradient] || "text-white";
  };

  // Carousel controls
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isAnimating, nextSlide]);

  // Animation observers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Schema Markup for current slide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getSchemaMarkup(SLIDES[activeSlide]),
        }}
      />

      <section
        className="relative h-[100dvh] w-full overflow-hidden"
        aria-labelledby={`slide-title-${SLIDES[activeSlide].id}`}
        role="region"
        aria-roledescription="carousel"
      >
        {/* Slides Container */}
        <div className="absolute inset-0">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              ref={index === activeSlide ? slideRef : null}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
              role="group"
              aria-hidden={index !== activeSlide}
              tabIndex={index === activeSlide ? 0 : -1}
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <img
                  src={`${slide.imageSrc}&q=50`}
                  alt={`Campus view of ${slide.title}`}
                  width={1280}
                  height={720}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}
                  style={{
                    // Fallback for dynamic Tailwind classes
                    background: slide.color.includes("maroon")
                      ? "linear-gradient(90deg, rgba(128,0,0,0.7) 0%, rgba(102,0,0,0.7) 100%)"
                      : slide.color.includes("college-green")
                      ? "linear-gradient(90deg, rgba(34,197,94,0.7) 0%, rgba(22,163,74,0.7) 100%)"
                      : slide.color.includes("college-blue")
                      ? "linear-gradient(90deg, rgba(29,78,216,0.7) 0%, rgba(37,99,235,0.7) 100%)"
                      : undefined,
                  }}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Text Content */}
                      <div
                        className={cn(
                          "text-white space-y-6 max-w-xl",
                          index === activeSlide ? "animate-fade-in" : ""
                        )}
                        itemScope
                        itemType="https://schema.org/EducationalOrganization"
                      >
                        {slide.featured && (
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm">
                            Featured Institution
                          </span>
                        )}

                        {index === activeSlide && (
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {slide.title}
                          </h1>
                        )}

                        <p
                          className="text-lg md:text-xl opacity-90"
                          itemProp="description"
                        >
                          {slide.description}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <a
                            href={slide.ctaLink}
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 focus:outline-none"
                            itemProp="url"
                            aria-label={`Learn more about ${slide.title}`}
                          >
                            {slide.ctaText}
                          </a>
                          <a
                            href="/inquire"
                            className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded-lg bg-white hover:bg-gray-100 ${getTextColor(
                              slide.color
                            )} focus:outline-none`}
                            aria-label="Apply for admission now"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>

                      {/* Stats */}
                      <div
                        className={cn(
                          "hidden md:grid grid-cols-3 gap-4",
                          index === activeSlide ? "animate-fade-in" : ""
                        )}
                        itemScope
                        itemType="https://schema.org/AggregateRating"
                      >
                        {slide.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className={`glass-card rounded-xl p-4 text-center ${getTextColor(
                              slide.color
                            )}`}
                            style={{
                              animationDelay: `${statIndex * 100 + 300}ms`,
                            }}
                          >
                            <div
                              className="text-3xl md:text-4xl font-bold mb-1"
                              itemProp={
                                stat.label.includes("Rate") ? "ratingValue" : ""
                              }
                            >
                              {stat.value}
                              {stat.label.includes("Rate") ? "%" : ""}
                            </div>
                            <div className="text-sm font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div
          className="absolute left-0 right-0 bottom-8 z-30 flex justify-center items-center space-x-3"
          role="navigation"
          aria-label="Carousel navigation"
        >
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:outline-none transition-colors"
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="flex space-x-2"
            role="tablist"
            aria-label="Slide indicators"
          >
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
                aria-current={index === activeSlide ? "true" : "false"}
                role="tab"
                aria-selected={index === activeSlide ? "true" : "false"}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:outline-none transition-colors"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Accessibility Announcer */}
        <div className="sr-only" aria-live="polite" role="status">
          Slide {activeSlide + 1} of {SLIDES.length}:{" "}
          {SLIDES[activeSlide].title}
        </div>
      </section>
    </>
  );
};

export default Hero;
