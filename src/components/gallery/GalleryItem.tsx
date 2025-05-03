
import React, { useState } from "react";
import { GalleryImage } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  image, 
  onClick,
  className 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "overflow-hidden rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow duration-300",
        "cursor-pointer h-full flex flex-col",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[66.66%] overflow-hidden bg-muted/20">
        {/* Image skeleton while loading */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-muted animate-pulse",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        
        <img
          src={`${image.src}?auto=format,compress&w=600&q=80`}
          alt={image.alt}
          width={600}
          height={400}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-300",
            "hover:animate-image-zoom",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
        />

        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-medium text-white/90 px-2 py-1 rounded-full bg-primary/70">
            {image.category}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{image.title}</h3>
        {image.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{image.description}</p>
        )}
        
        <div className={cn(
          "mt-auto pt-2 space-y-2 transition-all duration-300", 
          isHovered ? "opacity-100" : "opacity-70"
        )}>
          {/* Colleges */}
          {image.colleges.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {image.colleges.slice(0, 2).map(college => (
                <Badge key={college} variant="outline" className="text-xs">
                  {college}
                </Badge>
              ))}
              {image.colleges.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{image.colleges.length - 2} more
                </Badge>
              )}
            </div>
          )}
          
          {/* Tags */}
          {image.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
              {image.tags.slice(0, 3).map(tag => (
                <span key={tag} className="after:content-[','] last:after:content-['']">
                  #{tag}
                </span>
              ))}
              {image.tags.length > 3 && <span>+{image.tags.length - 3} more</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;