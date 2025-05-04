import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where page content is injected */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
