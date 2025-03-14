
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Program {
  name: string;
  description: string;
}

interface CollegeCardProps {
  name: string;
  imageSrc: string;
  programs: Program[];
  location: string;
  color: string;
  href: string;
}

const CollegeCard = ({ 
  name, 
  imageSrc, 
  programs, 
  location, 
  color,
  href 
}: CollegeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl group transition-all duration-300 h-full",
        "shadow-md hover:shadow-xl bg-white border"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        <div className={cn(
          "absolute inset-0 h-48 bg-gradient-to-b from-transparent to-black/70"
        )}></div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        {/* College name tag */}
        <div className={cn(
          "absolute -top-5 left-6 right-6 px-4 py-2 rounded-md text-white font-medium shadow-sm",
          `bg-${color}`
        )}>
          {name}
        </div>
        
        {/* Programs */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Featured Programs</h3>
          <ul className="space-y-3">
            {programs.map((program, index) => (
              <li key={index} className="flex items-start">
                <span className={`inline-block h-2 w-2 mt-2 rounded-full bg-${color} mr-2`}></span>
                <span className="text-gray-700">{program.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Location */}
        <div className="mt-4 text-sm text-gray-500">
          {location}
        </div>
        
        {/* Link */}
        <div className="mt-6">
          <a
            href={href}
            className={cn(
              "inline-flex items-center text-sm font-medium transition-all duration-300",
              `text-${color} hover:opacity-80`
            )}
          >
            Learn more
            <ArrowRight 
              className={cn(
                "ml-1 h-4 w-4 transition-transform duration-300",
                isHovered && "translate-x-1"
              )} 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
