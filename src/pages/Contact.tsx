import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const contactInfo = [
  {
    college: "Chhatrapati Shivaji Maharaj Paramedical & IT College",
    address:
      "647, Golden Jubilee Building, Near SBI Office, Bhawani Peth - 411042",
    phone: "+91 93568 96964",
    email: "iisdvtc@gmail.com",
    hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  },
  {
    college: "Royal College of Vocational Training & Skill Development",
    address:
      "Royal College Campus, Penkar Pada, Mira Road (East), Dist. Thane - 401107",
    phone: "+91 93260 93464",
    email: "royalparamedicalcentre@gmail.com",
    hours: "Monday - Saturday: 8:30 AM - 4:30 PM",
  },
  {
    college: "N.H. Paramedical and IT College (NHPC)",
    address:
      "NH English Academy, Asmita Enclave, Mira Nagar, Mira Road (East), Dist. Thane - 401107",
    phone: "+91 93213 74051",
    email: "nhpccollege@gmail.com",
    hours: "Monday - Saturday: 9:30 AM - 5:30 PM",
  },
  {
    college: "Nashik Paramedical & IT College",
    address:
      "Millat Campus, Survey No. 973, Sector B/3, Shivaji Chowk, New Nashik",
    phone: "+91 98340 93308",
    email: "paramedicalcollege04@gmail.com",
    hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  }, 
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.post(`${API_URL}/forms`, formData);

      // Simulate form submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Show success toast
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });

        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }, 1500); // Simulated delay
    } catch (error) {
      setIsSubmitting(false);
      console.error("Form submission failed:", error);

      // Show error toast
      toast({
        title: "Submission Failed",
        description:
          "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-maroon-600 to-maroon-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-white/90 mb-8">
              Get in touch with our team for inquiries, admissions information,
              or any questions you may have about our programs and campuses.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
          
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Message subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-maroon-600 hover:bg-maroon-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Campuses
              </h2>
              <div className="gap-6 grid lg:grid-cols-2 ">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-sm overflow-hidden"
                  >
                    <div className="h-3 bg-maroon-600"></div>
                    <CardContent className="px-6 py-4">
                      <h3 className="text-md font-bold text-gray-900 mb-4">
                        {info.college}
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-1">
                              Address
                            </div>
                            <div className="text-gray-900 text-sm">{info.address}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Phone className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-1">Phone</div>
                            <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-maroon-600 text-sm">
                              {info.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Mail className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-1">
                              Email
                            </div>
                            <a
                              href={`mailto:${info.email}`}
                              className="text-gray-900 hover:text-maroon-600 text-sm"
                            >
                              {info.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Main Campus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Mumbai, our main campus is easily
              accessible by public transportation
            </p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-md border border-gray-200">
            {/* Replace with actual Google Maps embed */}
            <iframe
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "Chhatrapati Shivaji Maharaj Paramedical & IT College" +
                  "647, Golden Jubilee Building, Near SBI Office, Bhawani Peth - 411042"
              )}&output=embed`}
              className="w-full h-full"
              style={{ border: "0" }}
              allowFullScreen
              title="College Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about contacting and
              visiting our campuses
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What are the visiting hours for prospective students?
                </h3>
                <p className="text-gray-600">
                  Prospective students can visit our campuses during regular
                  working hours (9 AM - 5 PM) from Monday to Saturday. We
                  recommend scheduling an appointment for a campus tour by
                  calling our admissions office.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How can I get admission information?
                </h3>
                <p className="text-gray-600">
                  You can get admission information by calling our admission
                  helpline, visiting our campus in person, or filling out the
                  contact form on this page. You can also check the Admissions
                  page on our website.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How long does it typically take to get a response to
                  inquiries?
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24-48 hours on
                  working days. For urgent matters, we recommend calling our
                  helpline directly for immediate assistance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Do you offer virtual campus tours?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer virtual campus tours for students who cannot
                  visit in person. You can schedule a virtual tour by contacting
                  our admissions office through email or phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-college-green to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Have more specific questions about our programs? Fill out our
            inquire form for detailed information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/inquire"
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Inquire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
