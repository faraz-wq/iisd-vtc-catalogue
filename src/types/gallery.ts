export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: string;
    title: string;
    description?: string;
    width: number;
    height: number;
    colleges: string[];
    tags: string[];
  }
  
  export interface GalleryProps {
    images: GalleryImage[];
    title?: string;
    description?: string;
    categories?: string[];
    columns?: number;
    filters: boolean;
    className?: string;
    filterType?: 'category' | 'college' | 'tag';
  }
  
  export interface FilterOption {
    value: string;
    label: string;
    count: number;
  }
  
  export type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
  };
  