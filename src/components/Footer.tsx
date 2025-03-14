
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-1">IISD</h2>
              <p className="text-gray-400">Institute for Integrated Skill Development</p>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing quality education and vocational training through our network of colleges, preparing students for successful careers in healthcare, IT, and other professional fields.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">About IISD</a>
              </li>
              <li>
                <a href="/colleges" className="text-gray-300 hover:text-white transition-colors">Our Colleges</a>
              </li>
              <li>
                <a href="/programs" className="text-gray-300 hover:text-white transition-colors">Programs & Courses</a>
              </li>
              <li>
                <a href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Colleges</h3>
            <ul className="space-y-3">
              <li>
                <a href="/colleges/csmpic" className="text-gray-300 hover:text-white transition-colors">Chatrapati Shivaji Maharaj College</a>
              </li>
              <li>
                <a href="/colleges/royal" className="text-gray-300 hover:text-white transition-colors">Royal College</a>
              </li>
              <li>
                <a href="/colleges/nhpic" className="text-gray-300 hover:text-white transition-colors">N.H. Paramedical College</a>
              </li>
              <li>
                <a href="/colleges/npic" className="text-gray-300 hover:text-white transition-colors">Nashik Paramedical College</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <PhoneCall className="h-5 w-5 mr-3 text-maroon-400" />
                <span>
                  <a href="tel:+918149709882" className="text-gray-300 hover:text-white transition-colors">+91 8149709882</a>
                  <br />
                  <a href="tel:+918379059883" className="text-gray-300 hover:text-white transition-colors">+91 8379059883</a>
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-maroon-400" />
                <a href="mailto:info@iisd.edu.in" className="text-gray-300 hover:text-white transition-colors">info@iisd.edu.in</a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-maroon-400" />
                <span className="text-gray-300">
                  647, Golden Jubilee Building,<br />
                  Near BSNL Office,<br />
                  Bhawani Peth, Pune - 411042
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} IISD - Institute for Integrated Skill Development. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
