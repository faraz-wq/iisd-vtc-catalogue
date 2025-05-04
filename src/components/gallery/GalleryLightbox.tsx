
import React, { useEffect, useState } from "react";
import { GalleryImage } from "@/types/gallery";
import { X, ChevronLeft, ChevronRight, Loader, School, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface GalleryLightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  current: number;
  total: number;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  current,
  total,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-white/90 hover:text-white z-50"
        onClick={onClose}
      >
        <X size={24} />
        <span className="sr-only">Close</span>
      </button>
      
      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/90">
        <span className="text-sm">{current} / {total}</span>
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button 
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white/90",
            "hover:bg-black/60 transition pointer-events-auto",
            isFirst && "opacity-50 cursor-not-allowed"
          )}
          onClick={(e) => {
            e.stopPropagation();
            if (!isFirst) onPrevious();
          }}
          disabled={isFirst}
        >
          <ChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>
        
        <button 
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white/90",
            "hover:bg-black/60 transition pointer-events-auto",
            isLast && "opacity-50 cursor-not-allowed"
          )}
          onClick={(e) => {
            e.stopPropagation();
            if (!isLast) onNext();
          }}
          disabled={isLast}
        >
          <ChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
      
      {/* Image container */}
      <div 
        className="relative max-w-[90%] max-h-[90%] overflow-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="animate-spin text-white/90" />
          </div>
        )}
        
        <img
          src={`${image.src}?auto=format&w=1200&q=90`}
          alt={image.alt}
          className={cn(
            "max-w-full max-h-[80vh] object-contain",
            !isLoaded && "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        
        <div className="bg-black/70 p-4 text-white mt-2 rounded">
          <h3 className="text-xl font-bold">{image.title}</h3>
          
          {image.description && (
            <p className="text-sm text-white/80 mt-1">{image.description}</p>
          )}
          
          <div className="mt-3 space-y-2">
            {/* Category */}
            <p className="text-xs text-white/60 flex items-center gap-1">
              <span>Category: </span>
              <Badge variant="secondary" className="bg-primary/30 text-white/70">
                {image.category}
              </Badge>
            </p>
            
            {/* Colleges */}
            <div className="flex flex-wrap items-center gap-1">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <School size={14} />
                <span>Colleges: </span>
              </div>
              {image.colleges.map(college => (
                <Badge key={college._id} variant="outline" className="text-xs text-white/70 bg-transparent border-white/30">
                  {college.name}
                </Badge>
              ))}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-1">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <Tag size={14} />
                <span>Tags: </span>
              </div>
              {image.tags.map(tag => (
                <span key={tag} className="text-xs text-maroon-200">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;