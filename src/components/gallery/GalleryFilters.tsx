
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FilterOption } from "@/types/gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { galleryApi } from "@/services/galleryService";

interface GalleryFiltersProps {
  filterType?: 'category' | 'college' | 'tag';
  activeFilter: string;
  onChange: (filter: string) => void;
  className?: string;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  filterType = 'category',
  activeFilter,
  onChange,
  className,
}) => {
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);
  const [currentFilterType, setCurrentFilterType] = useState<'category' | 'college' | 'tag'>(filterType);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadFilterOptions = async () => {
      setIsLoading(true);
      try {
        const response = await galleryApi.getFilterOptions(currentFilterType);
        setFilterOptions(response.data);
        // If current active filter is not in the new options, reset to 'All'
        if (!response.data.find(option => option.value === activeFilter)) {
          onChange('All');
        }
      } catch (error) {
        console.error('Failed to load filter options:', error);
        setFilterOptions([{ value: 'All', label: 'All', count: 0 }]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadFilterOptions();
  }, [activeFilter, currentFilterType, onChange]);

  const handleFilterTypeChange = (value: string) => {
    setCurrentFilterType(value as 'category' | 'college' | 'tag');
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Tabs 
        defaultValue={currentFilterType} 
        onValueChange={handleFilterTypeChange}
        className="w-full max-w-md mx-auto"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="category">Categories</TabsTrigger>
          <TabsTrigger value="college">Colleges</TabsTrigger>
          <TabsTrigger value="tag">Tags</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className={cn("flex flex-wrap gap-2 justify-center", isLoading ? "opacity-50" : "")}>
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            onClick={() => onChange(option.value)}
            variant={activeFilter === option.value ? "default" : "outline"}
            size="sm"
            className="transition-all duration-200 flex items-center gap-1.5"
          >
            <span>{option.label}</span>
            <span className="bg-primary/20 text-primary-foreground/90 rounded-full px-1.5 py-0.5 text-xs">
              {option.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;