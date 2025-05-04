import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet /> {/* This is where page content is injected */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;