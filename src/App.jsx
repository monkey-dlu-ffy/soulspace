import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import Services from "./pages/Services";
import OnlineCounselling from "./pages/OnlineCounselling";
import OfflineCounselling from "./pages/OfflineCounselling";
import Privacy from "./pages/Privacy";
import Resources from "./pages/Resources";
import Assessments from "./pages/Assessments";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/** App shell: router, persistent navigation and footer around each page. */
export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/online-counselling" element={<OnlineCounselling />} />
        <Route path="/offline-counselling" element={<OfflineCounselling />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
