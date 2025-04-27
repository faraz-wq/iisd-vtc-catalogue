import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react"; // Adjust the import path as needed
import { College, getColleges } from "@/services/collegeService";

const Colleges = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const collegesData = await getColleges();
        setColleges(collegesData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load colleges. Please try again later.");
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-700">Loading colleges...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(HEADER_BANNER_URL)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Our Colleges
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Explore our network of institutions dedicated to excellence.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${college.banner})` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {college.name}
                      </h2>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> {college.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">{college.description}</p>
                  <div className="mt-6">
                    <Link
                      to={`/colleges/${college.shortName}`}
                      className={`inline-flex items-center px-4 py-2 text-white rounded-md hover:opacity-90 transition bg-maroon-600`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Colleges;