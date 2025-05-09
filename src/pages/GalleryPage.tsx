import React, { useState, useEffect } from "react";

import { GalleryImage } from "@/types/gallery";
import { galleryApi } from "@/services/galleryService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Gallery from "@/components/gallery/Gallery";



const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<'category' | 'college' | 'tag'>('category');

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await galleryApi.getImages();
        setImages(response.data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    
    <div className="min-h-screen bg-background">
      
      <header className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-primary-foreground py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">University Campus Gallery</h1>
        <p className="max-w-2xl mx-auto">
          Explore our beautiful campus, state-of-the-art facilities, and vibrant student life through our curated photo gallery.
        </p>
      </header>

      <main>
        <Gallery 
          images={images}
          title="Campus Highlights"
          description="Browse through images of our campus life, academic facilities, and student activities."
          columns={3}
          filterType={filterType}
        />
      </main>

      
    </div>
  );
};

export default GalleryPage;