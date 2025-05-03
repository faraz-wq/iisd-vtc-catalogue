import { GalleryImage, ApiResponse, FilterOption } from "../types/gallery";
import { galleryImages } from "../data/galleryImages";

// Simulate API delay
const simulateNetworkDelay = (ms: number = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const galleryApi = {
  // Get all gallery images
  getImages: async (): Promise<ApiResponse<GalleryImage[]>> => {
    await simulateNetworkDelay();
    return {
      data: galleryImages,
      status: 200,
      message: "Images retrieved successfully"
    };
  },

  // Get a single image by ID
  getImageById: async (id: string): Promise<ApiResponse<GalleryImage | null>> => {
    await simulateNetworkDelay();
    const image = galleryImages.find(img => img.id === id) || null;
    
    return {
      data: image,
      status: image ? 200 : 404,
      message: image ? "Image retrieved successfully" : "Image not found"
    };
  },

  // Filter images by category, college, or tags
  filterImages: async (
    filterType: 'category' | 'college' | 'tag',
    value: string
  ): Promise<ApiResponse<GalleryImage[]>> => {
    await simulateNetworkDelay();
    
    let filteredImages: GalleryImage[] = [];
    
    if (value === 'All') {
      filteredImages = galleryImages;
    } else {
      switch (filterType) {
        case 'category':
          filteredImages = galleryImages.filter(img => img.category === value);
          break;
        case 'college':
          filteredImages = galleryImages.filter(img => img.colleges.includes(value));
          break;
        case 'tag':
          filteredImages = galleryImages.filter(img => img.tags.includes(value));
          break;
      }
    }
    
    return {
      data: filteredImages,
      status: 200,
      message: `Found ${filteredImages.length} images matching ${filterType}: ${value}`
    };
  },

  // Get available filter options
  getFilterOptions: async (
    filterType: 'category' | 'college' | 'tag'
  ): Promise<ApiResponse<FilterOption[]>> => {
    await simulateNetworkDelay();
    
    const options = new Map<string, number>();
    
    galleryImages.forEach(img => {
      if (filterType === 'category') {
        const category = img.category;
        options.set(category, (options.get(category) || 0) + 1);
      } else if (filterType === 'college') {
        img.colleges.forEach(college => {
          options.set(college, (options.get(college) || 0) + 1);
        });
      } else if (filterType === 'tag') {
        img.tags.forEach(tag => {
          options.set(tag, (options.get(tag) || 0) + 1);
        });
      }
    });
    
    const filterOptions: FilterOption[] = Array.from(options.entries())
      .map(([value, count]) => ({
        value,
        label: value,
        count
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
    
    // Add "All" option
    filterOptions.unshift({
      value: 'All',
      label: 'All',
      count: galleryImages.length
    });
    
    return {
      data: filterOptions,
      status: 200,
      message: `Retrieved ${filterOptions.length - 1} ${filterType} options`
    };
  }
};