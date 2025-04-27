import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import {
  MessageSquare,
  Book,
  Send,
  Phone,
  Mail,
  Calendar,
  Clock,
} from "lucide-react";
import { COLLEGES, PROGRAMS } from "./collegedata";
import { College, getColleges, Program } from "@/services/collegeService";
import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

type InquiryFormData = {
  name: string;
  email: string;
  phone: string;
  college: string;
  program: string;
  inquiry: string;
};

const InquireForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [colleges, setColleges] = useState<College[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);

  const form = useForm<InquiryFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      program: "",
      inquiry: "",
    },
  });

  // Fetch colleges on component mount
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const fetchedColleges = await getColleges();
        setColleges(fetchedColleges);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };
    fetchColleges();
  }, []);

  // Update programs when a college is selected
  const handleCollegeChange = (collegeName: string) => {
    const selectedCollege = colleges.find(
      (college) => college.name === collegeName
    );
    if (selectedCollege) {
      setPrograms(selectedCollege.programs);
    } else {
      setPrograms([]);
    }
  };

  const handleSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Send the form data to the backend
      const response = await axios.post(`${API_URL}/inquiries`, data);

      // Show success toast
      toast.success(
        "Inquiry Submitted Successfully" +
          "Our team will contact you within 24-48 hours."
      );

      console.log("Server response:", response.data);
    } catch (error) {
      // Show error toast
      toast.error(
        "Submission Failed" + error.response?.data?.error ||
          "An error occurred while submitting your inquiry. Please try again later."
      );

      console.error("Error submitting inquiry:", error);
    } finally {
      setIsSubmitting(false);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College of Interest</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                    {...field}
                    onChange={(e) => {
                      field.onChange(e); // Update form state
                      handleCollegeChange(e.target.value); // Update programs list
                    }}
                  >
                    <option value="">Select a college</option>
                    {colleges.map((college) => (
                      <option key={college._id} value={college.name}>
                        {college.name}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program of Interest</FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                  {...field}
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program._id} value={program.title}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormDescription>
                Select the program you are interested in learning more about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Inquiry</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-32 resize-none"
                  required
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Include any specific questions or information you'd like to
                receive.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-maroon-600 hover:bg-maroon-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Submitting Inquiry...</>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Inquiry
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

const CallbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bestTime: "morning",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true);

    try {
      // Send the form data to the backend
      const response = await axios.post(`${API_URL}/forms`, formData);

      // Show success toast
      toast.success(
        "Your callback request has been submitted successfully. Our team will contact you shortly."
      );

      console.log("Server response:", response.data);

      // Reset the form after successful submission
      setFormData({
        name: "",
        phone: "",
        bestTime: "morning",
      });
    } catch (error) {
      // Show error toast
      toast.error(
        "Submission Failed" + error.response?.data?.error ||
          "An error occurred while submitting your form. Please try again later."
      );

      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Ensure the loading state is reset
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Best Time to Call */}
      <div className="space-y-2">
        <Label htmlFor="bestTime">Best Time to Call</Label>
        <select
          id="bestTime"
          name="bestTime"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          value={formData.bestTime}
          onChange={handleChange}
          required
        >
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
          <option value="evening">Evening (3 PM - 6 PM)</option>
        </select>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-college-green hover:bg-green-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Processing Request...</>
        ) : (
          <>
            <Phone className="mr-2 h-4 w-4" />
            Request Callback
          </>
        )}
      </Button>
    </form>
  );
};

const Inquire = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Request Information
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Have questions about our programs, admissions process, or campus
              facilities? We're here to help. Fill out the form below and our
              team will get back to you with detailed information.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Forms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Submit an Inquiry
                  </CardTitle>
                  <CardDescription>
                    Fill out this form to receive detailed information about our
                    programs and admissions process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="inquiry" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="inquiry" className="text-sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Detailed Inquiry
                      </TabsTrigger>
                      <TabsTrigger value="callback" className="text-sm">
                        <Phone className="mr-2 h-4 w-4" />
                        Request Callback
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="inquiry">
                      <InquireForm />
                    </TabsContent>

                    <TabsContent value="callback">
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-sm">
                          Prefer to speak with someone directly? Request a
                          callback and our admissions team will call you at your
                          preferred time to discuss your queries.
                        </p>
                      </div>
                      <CallbackForm />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Why Inquire?
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Book className="h-3 w-3 text-maroon-600" />
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">
                            Detailed Program Information
                          </span>{" "}
                          - Get comprehensive details about curriculum, faculty,
                          and outcomes.
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Calendar className="h-3 w-3 text-college-blue" />
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">
                            Admissions Guidance
                          </span>{" "}
                          - Learn about eligibility, application process, and
                          important dates.
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Mail className="h-3 w-3 text-college-green" />
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">
                            Personalized Responses
                          </span>{" "}
                          - Get answers tailored to your specific questions and
                          needs.
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="h-3 w-3 text-purple-600" />
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">Quick Response</span> -
                          Our team responds to all inquiries within 24-48 hours.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-600 mb-1">
                            Admissions Helpline
                          </div>
                          <a
                            href="tel:+918888888888"
                            className="text-gray-900 hover:text-maroon-600"
                          >
                            +91 888 888 8888
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-600 mb-1">
                            Email
                          </div>
                          <a
                            href="mailto:admissions@iisd.edu.in"
                            className="text-gray-900 hover:text-maroon-600"
                          >
                            admissions@iisd.edu.in
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-600 mb-1">
                            Office Hours
                          </div>
                          <div className="text-gray-900">
                            Monday - Saturday: 9:00 AM - 5:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to frequently asked questions from prospective students
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How soon will I receive a response?
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24-48 hours during
                  working days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Will I receive information by email?
                </h3>
                <p className="text-gray-600">
                  Yes, detailed information will be sent to the email address
                  you provide in the form.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I visit the campus after inquiry?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We encourage campus visits and can arrange a tour
                  for you after your inquiry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Is financial aid information available?
                </h3>
                <p className="text-gray-600">
                  Yes, we can provide details about scholarships, payment plans,
                  and financial assistance options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who began their journey with an inquiry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "I was unsure about which program to choose, so I submitted an
                  inquiry. The detailed information I received helped me make an
                  informed decision. Now I'm in my final year of B.P.Th. and
                  couldn't be happier!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">
                      B.P.Th. Student, Final Year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The quick response to my inquiry impressed me. Within a day,
                  I received comprehensive information, and within a week, I was
                  enrolled in the B.Sc. IT program. The admissions team made the
                  entire process seamless."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rahul Patel</h4>
                    <p className="text-sm text-gray-600">
                      B.Sc. IT Student, Second Year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "I requested a callback after browsing the website. The
                  admissions counselor was extremely helpful and answered all my
                  questions about the Pharmacy program. Their guidance was
                  invaluable in making my decision."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sneha Desai</h4>
                    <p className="text-sm text-gray-600">
                      D.Pharm Student, First Year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inquire;
