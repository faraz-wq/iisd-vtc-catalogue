import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Inquire from "./pages/Inquire";
import CollegeDetail from "./pages/CollegeDetail";
import Colleges from "./pages/Colleges";
import GalleryPage from "./pages/GalleryPage";
import Layout from "./components/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Layout-wrapped routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="inquire" element={<Inquire />} />
            <Route path="gallery" element={<GalleryPage />} />
            {/* Colleges routes: static before dynamic */}
            <Route path="colleges" element={<Colleges />} />
            <Route path="colleges/:collegeId" element={<CollegeDetail />} />
          </Route>

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
