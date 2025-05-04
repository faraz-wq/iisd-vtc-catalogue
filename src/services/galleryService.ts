import { GalleryImage, ApiResponse, FilterOption } from "../types/gallery"; 


const VITE_URL = import.meta.env.VITE_API_URL + "/gallery"

const API_BASE_URL = VITE_URL || "http://localhost:5000/gallery";

export const galleryApi = {
  // Get all gallery images
  getImages: async (): Promise<ApiResponse<GalleryImage[]>> => {
    const response = await fetch(API_BASE_URL);
    return handleFetchResponse<ApiResponse<GalleryImage[]>>(response);
  },

  // Get a single image by ID
  getImageById: async (id: string): Promise<ApiResponse<GalleryImage | null>> => {
    const response = await fetch(`${API_BASE_URL}/id?id=${id}`);
    return handleFetchResponse<ApiResponse<GalleryImage | null>>(response);
  },

  getImageByCollege: async (id: string): Promise<ApiResponse<GalleryImage[]>> => {
    const response = await fetch(`${API_BASE_URL}/college/${id}`)
    return handleFetchResponse<ApiResponse<GalleryImage[]>>(response);
  },

  // Filter images by category, college, or tags
  filterImages: async (
    filterType: 'category' | 'college' | 'tag',
    value: string
  ): Promise<ApiResponse<GalleryImage[]>> => {
    const params = new URLSearchParams({ filterType, value });
    const response = await fetch(`${API_BASE_URL}/filter?${params}`);
    return handleFetchResponse<ApiResponse<GalleryImage[]>>(response);
  },

  // Get available filter options
  getFilterOptions: async (
    filterType: 'category' | 'college' | 'tag'
  ): Promise<ApiResponse<FilterOption[]>> => {
    const params = new URLSearchParams({ filterType });
    const response = await fetch(`${API_BASE_URL}/filters/options?${params}`);
    return handleFetchResponse<ApiResponse<FilterOption[]>>(response);
  },
};

// src/utils/fetchUtils.ts
export const handleFetchResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  console.log('response',response);
  return await response.json();
};