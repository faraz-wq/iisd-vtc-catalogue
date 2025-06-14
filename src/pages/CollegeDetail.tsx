import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Building,
  GraduationCap,
  Users,
  Search,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Check,
} from "lucide-react";
import { College, getCollegeByName } from "@/services/collegeService";
import Gallery from "@/components/gallery/Gallery";
import { galleryApi } from "@/services/galleryService";
import { GalleryImage } from "@/types/gallery";

const CollegeDetail = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [college, setCollege] = useState<College | null>(null); // State to hold college data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<"category" | "tag">("category");

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        setLoading(true);
        const fetchedCollege = await getCollegeByName(collegeId);
        console.log("Fetched college data from API:", fetchedCollege);
  
        if (
          fetchedCollege?.contact &&
          typeof fetchedCollege.contact === "string"
        ) {
          try {
            fetchedCollege.contact = JSON.parse(fetchedCollege.contact);
          } catch (e) {
            console.error("Failed to parse contact JSON:", e);
            fetchedCollege.contact = {};
          }
        }
  
        setCollege(fetchedCollege);
  
        if (!fetchedCollege?._id) {
          throw new Error("College ID not found");
        }
  
        const response = await galleryApi.getImageByCollege(fetchedCollege._id);
        console.log("imag", response);
        setImages(response.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch college details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCollege();
  }, [collegeId]);
  // Add a separate useEffect to log state changes
  useEffect(() => {
    console.log("college state updated:", college);
  }, [college]);

  // Log during render
  console.log("college state during render:", college);

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow flex items-center mt-32 justify-center">
          <p className="text-gray-600">Loading college details...</p>
        </main>
        
      </div>
    );
  }

  // Handle error state
  if (error || !college) {
    return (
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow flex mt-32 items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              College Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              {error || "The college you are looking for does not exist."}
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 bg-maroon-600 text-white rounded-md hover:bg-maroon-700 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </main>
        
      </div>
    );
  }

const isValidBanner =
  college.banner &&
  typeof college.banner === "string" &&
  college.banner.trim() !== "";

if (!isValidBanner) {
  console.warn("Invalid or missing banner URL, using fallback.");
}

const bannerUrl = isValidBanner
  ? college.banner.trim()
  : "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1200&auto=format&fit=crop";

  
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Banner and College Info */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center bg-no-repeat from-gray-900 to-gray-800"
        style={{
          backgroundImage: `url(${bannerUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img
                  src={college.logo || "/fallback-logo.jpg"}
                  alt={college.name}
                  className="w-24 h-24 object-cover rounded"
                  onError={(e) => (e.currentTarget.src = "/fallback-logo.jpg")}
                />
              </div>
              <div className="text-white text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {college.name}
                </h1>
                <p className="text-lg mt-2 flex items-center justify-center md:justify-start">
                  <MapPin className="h-5 w-5 mr-2" /> {college.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 bg-white p-1 shadow-sm w-full md:w-auto flex flex-wrap justify-center">
              <TabsTrigger
                value="overview"
                className="px-4 py-2 text-sm md:text-base"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="px-4 py-2 text-sm md:text-base"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="facilities"
                className="px-4 py-2 text-sm md:text-base"
              >
                Facilities
              </TabsTrigger>
              <TabsTrigger
                value="faculty"
                className="px-4 py-2 text-sm md:text-base"
              >
                Faculty
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="px-4 py-2 text-sm md:text-base"
              >
                Gallery
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="px-4 py-2 text-sm md:text-base"
              >
                Contact
              </TabsTrigger>
            </TabsList>
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    About
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {college.description}
                  </p>
                  {/* Key Highlights */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-full bg-maroon-500 text-white`}
                        >
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Quality Education
                          </h4>
                          <p className="text-sm text-gray-600">
                            Industry-aligned curriculum and experienced faculty
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-full bg-maroon-500 text-white`}
                        >
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Modern Facilities
                          </h4>
                          <p className="text-sm text-gray-600">
                            State-of-the-art labs and learning spaces
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-full bg-maroon-500 text-white`}
                        >
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Career Support
                          </h4>
                          <p className="text-sm text-gray-600">
                            Placement assistance and industry connections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Upcoming Events */}
              {college.events && college.events.length > 0 ? (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Upcoming Events
                    </h2>
                    <div className="space-y-4">
                      {college.events.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                        >
                          <div
                            className={`p-2 rounded-lg bg-maroon-500 text-white flex-shrink-0`}
                          >
                            <CalendarDays className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {event.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {event.date}
                            </p>
                            <p className="text-sm text-gray-700">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Upcoming Events
                    </h2>
                    <p className="text-gray-700">
                      No upcoming events at this time.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Programs Offered
                  </h2>
                  {college.programs && college.programs.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {college.programs.map((program, index) => (
                        <div
                          key={index}
                          className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className={`p-4 bg-maroon-500 text-white`}>
                            <h3 className="font-bold text-lg">
                              {program.title}
                            </h3>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 mb-4">
                              {program.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-600">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Duration: {program.duration}
                            </div>
                            <div className="mt-4">
                              <a
                                href="/inquire"
                                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded border border-maroon-500 text-maroon-500 hover:bg-maroon-500 hover:text-white transition-colors`}
                              >
                                Inquire Now
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      No programs available at this time.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            {/* Facilities Tab */}
            <TabsContent value="facilities" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Campus Facilities
                  </h2>
                  {college.facilities && college.facilities.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-700 mb-6">
                          At {college.name}, we provide state-of-the-art
                          facilities to ensure that our students have access to
                          the best resources for their education and overall
                          development.
                        </p>
                        <ul className="space-y-3">
                          {college.facilities.map((facility, index) => (
                            <li key={index} className="flex items-center">
                              <Check
                                className={`h-5 w-5 mr-2 text-maroon-500`}
                              />
                              <span className="text-gray-700">{facility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg overflow-hidden h-64 md:h-80">
                        <iframe
                          loading="lazy"
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            college.name + college.contact.address
                          )}&output=embed`}
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowFullScreen
                          title="College Location on Google Maps"
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      No facilities available at this time.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            {/* Faculty Tab */}
            <TabsContent value="faculty" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Our Faculty
                  </h2>
                  {college.faculty && college.faculty.length > 0 ? (
                    <>
                      <p className="text-gray-700 mb-6">
                        Our faculty members are experienced professionals who
                        are dedicated to providing quality education and
                        guidance to our students.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        {college.faculty.map((faculty, index) => (
                          <div key={index} className="text-center">
                            <h3 className="font-bold text-gray-800">
                              {faculty.name}
                            </h3>
                            <p
                              className={`text-sm text-maroon-500 font-medium`}
                            >
                              {faculty.position}
                            </p>
                            <p className="text-sm text-gray-600">
                              {faculty.qualification}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-700">
                      No faculty information available at this time.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="gallery" className="space-y-6">
              <Gallery
                images={images}
                title={""}
                description={`Life at ${college.name}`}
                columns={3}
                filterType={filterType}
                filters={false}
              />
            </TabsContent>
            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className={`h-5 w-5 text-maroon-500`} />
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Address
                            </h3>
                            <p className="text-sm text-gray-600">
                              {college.contact?.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className={`h-5 w-5 text-maroon-500`} />
                          <div>
                            <h3 className="font-medium text-gray-800">Phone</h3>
                            <p className="text-sm text-gray-600 gap-6">
                              {college.contact?.phone.join(", ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className={`h-5 w-5 text-maroon-500`} />
                          <div>
                            <h3 className="font-medium text-gray-800">Email</h3>
                            <p className="text-sm text-gray-600">
                              {college.contact?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <h3 className="font-medium text-gray-800 mb-3">
                          Inquire About Admission
                        </h3>
                        <a
                          href="/inquire"
                          className={`inline-flex items-center px-4 py-2 bg-maroon-500 text-white rounded-md hover:opacity-90 transition-colors`}
                        >
                          Submit Inquiry
                        </a>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden h-64">
                      {/* This would typically be a Google Map - using a placeholder image */}
                      <iframe
                        loading="lazy"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                          college.name + college.contact.address
                        )}&output=embed`}
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen
                        title="College Location on Google Maps"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
    </div>
  );
};

export default CollegeDetail;
