import { useState, useEffect } from 'react';


import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Stethoscope, Monitor, GraduationCap, Pill, Search, Clock, Building, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils"; 
import { College, Program } from '@/services/collegeService';
import { getPrograms } from '@/services/programService';

const CATEGORIES = [
  { id: "all", name: "All Programs" },
  { id: "paramedical", name: "Paramedical Sciences", icon: Stethoscope, color: "text-maroon-600" },
  { id: "it", name: "Information Technology", icon: Monitor, color: "text-college-blue" },
  { id: "vocational", name: "Vocational Training", icon: GraduationCap, color: "text-college-green" },
  { id: "pharmacy", name: "Pharmacy Studies", icon: Pill, color: "text-purple-600" },
];

const ProgramCard = ({ program }: { program: Program }) => {
  const categoryData = CATEGORIES.find(cat => cat.id === program.category) || CATEGORIES[0];
  const Icon = categoryData.id !== "all" ? categoryData.icon : GraduationCap;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className={cn(
        "h-2",
        program.category === "paramedical" ? "bg-maroon-600" :
        program.category === "it" ? "bg-college-blue" :
        program.category === "vocational" ? "bg-college-green" :
        "bg-purple-600"
      )}></div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
            program.category === "paramedical" ? "bg-maroon-100 text-maroon-600" :
            program.category === "it" ? "bg-blue-100 text-college-blue" :
            program.category === "vocational" ? "bg-green-100 text-college-green" :
            "bg-purple-100 text-purple-600"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
            <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                {program.colleges.length} Colleges
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Eligibility</h4>
            <p className="text-gray-800">{program.eligibility}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Career Paths</h4>
            <p className="text-gray-800 text-sm truncate">{program.career}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {program.features.map((feature: string, index: number) => (
            <span
              key={index}
              className={cn(
                "text-xs px-3 py-1 rounded-full",
                program.category === "paramedical" ? "bg-maroon-50 text-maroon-600" :
                program.category === "it" ? "bg-blue-50 text-college-blue" :
                program.category === "vocational" ? "bg-green-50 text-college-green" :
                "bg-purple-50 text-purple-600"
              )}
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Available at</h4>
          <div className="space-y-1">
            {program.colleges.map((college: College, index: number) => (
              <a
                key={index}
                href={`/colleges/${college.shortName.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-gray-700 hover:text-maroon-600"
              >
                {college.name}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch programs on component mount
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const fetchedPrograms = await getPrograms();
        setPrograms(fetchedPrograms);
        setFilteredPrograms(fetchedPrograms); // Initially show all programs
      } catch (err) {
        setError("Failed to load programs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  // Filter programs based on search term and active category
  useEffect(() => {
    const filtered = programs.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            program.career.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || program.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPrograms(filtered);
  }, [searchTerm, activeCategory, programs]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Programs & Courses</h1>
            <p className="text-lg text-white/90 mb-8">
              Discover our wide range of specialized programs designed to prepare you for a successful career in healthcare, technology, and more.
            </p>
            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search programs by name, career path, or keywords..."
                className="pl-10 py-6 text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus-visible:ring-maroon-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Programs Catalog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100 p-1 w-full flex overflow-x-auto no-scrollbar">
              {CATEGORIES.map((category) => {
                const Icon = category.icon || GraduationCap;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={cn(
                      "flex-1 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:font-medium py-3",
                      category.id === "paramedical" && activeCategory === "paramedical" && "data-[state=active]:text-maroon-600",
                      category.id === "it" && activeCategory === "it" && "data-[state=active]:text-college-blue",
                      category.id === "vocational" && activeCategory === "vocational" && "data-[state=active]:text-college-green",
                      category.id === "pharmacy" && activeCategory === "pharmacy" && "data-[state=active]:text-purple-600"
                    )}
                  >
                    {category.id !== "all" && (
                      <Icon className={cn("mr-2 h-4 w-4", category.color)} />
                    )}
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* Program Results */}
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program._id} program={program} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-xl">
                <Zap className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No programs found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We couldn't find any programs matching your search criteria. Try adjusting your search or browse all programs.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 px-5 py-2 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors"
                >
                  View All Programs
                </button>
              </div>
            )}
          </Tabs>
        </div>
      </section>
      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed with industry input to ensure you gain practical skills and knowledge that employers are looking for
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-maroon-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Recognized Certifications</h3>
                <p className="text-gray-600">
                  Our programs lead to certifications that are recognized by leading healthcare institutions and technology companies.
                </p>
              </CardContent>
            </Card>
            {/* Benefit 2 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">State-of-the-Art Facilities</h3>
                <p className="text-gray-600">
                  Learn in modern laboratories and classrooms equipped with the latest technology and equipment used in the industry.
                </p>
              </CardContent>
            </Card>
            {/* Benefit 3 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6 text-college-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellent Placement Support</h3>
                <p className="text-gray-600">
                  Our dedicated placement cell works to connect students with top employers, resulting in our impressive 98% placement rate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-college-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step toward a rewarding career by applying to one of our specialized programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/inquire" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Programs;