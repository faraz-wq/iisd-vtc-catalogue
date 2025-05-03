
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { GalleryProps, GalleryImage } from "@/types/gallery";
import { cn } from "@/lib/utils";
import GalleryItem from "./GalleryItem";
import GalleryFilters from "./GalleryFilters";
import GalleryLightbox from "./GalleryLightbox";
import { galleryApi } from "@/services/galleryService";
import { Skeleton } from "@/components/ui/skeleton";

const Gallery: React.FC<GalleryProps> = ({
  images: initialImages,
  title = "Campus Gallery",
  description,
  categories: propCategories,
  columns = 3,
  className,
  filterType = 'category'
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [images, setImages] = useState<GalleryImage[]>(initialImages || []);
  const [isLoading, setIsLoading] = useState(false);
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    currentIndex: number;
  }>({
    isOpen: false,
    currentIndex: 0,
  });

  // Fetch images when filter changes
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await galleryApi.filterImages(filterType, activeFilter);
        setImages(response.data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [activeFilter, filterType]);

  // Open lightbox at specific index
  const openLightbox = useCallback((index: number) => {
    setLightbox({
      isOpen: true,
      currentIndex: index,
    });
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightbox({
      isOpen: false,
      currentIndex: 0,
    });
  }, []);

  // Navigate through lightbox
  const navigateLightbox = useCallback((direction: "next" | "prev") => {
    setLightbox((prev) => {
      const lastIndex = images.length - 1;
      let newIndex = prev.currentIndex;
      
      if (direction === "next") {
        newIndex = prev.currentIndex >= lastIndex ? 0 : prev.currentIndex + 1;
      } else {
        newIndex = prev.currentIndex <= 0 ? lastIndex : prev.currentIndex - 1;
      }
      
      return {
        ...prev,
        currentIndex: newIndex,
      };
    });
  }, [images.length]);

  return (
    <div className={cn("w-full py-8", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
        )}
        
        {description && (
          <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <GalleryFilters 
          filterType={filterType}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          className="mb-8"
        />

        {isLoading ? (
          <div 
            className={cn(
              "grid gap-4",
              {
                "grid-cols-1 sm:grid-cols-2": columns === 2,
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": columns === 3,
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns === 4,
              }
            )}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full mb-3" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No images found for this filter.
            </p>
          </div>
        ) : (
          <div 
            className={cn(
              "grid gap-4",
              {
                "grid-cols-1 sm:grid-cols-2": columns === 2,
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": columns === 3,
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns === 4,
              }
            )}
          >
            {images.map((image, index) => (
              <GalleryItem 
                key={image.id} 
                image={image} 
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox.isOpen && images.length > 0 && (
        <GalleryLightbox
          image={images[lightbox.currentIndex]}
          onClose={closeLightbox}
          onNext={() => navigateLightbox("next")}
          onPrevious={() => navigateLightbox("prev")}
          isFirst={lightbox.currentIndex === 0}
          isLast={lightbox.currentIndex === images.length - 1}
          total={images.length}
          current={lightbox.currentIndex + 1}
        />
      )}
    </div>
  );
};

export default Gallery;