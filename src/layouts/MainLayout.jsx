import Navbar from "../components/layout/Navbar";
import Footer from "./Footer";
import AuroraBackground from "../components/effects/AuroraBackground";
import BackToTop from "../components/common/BackToTop";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AuroraBackground />

      <div className="relative z-10">
        <Navbar />

        {children}

        <Footer />

        <BackToTop />
      </div>
    </div>
  );
}

export default MainLayout;