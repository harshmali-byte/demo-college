import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/shared/ScrollToHash";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import FeaturedCoursesPage from "./pages/FeaturedCoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<WelcomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
        <Route path="/courses" element={<FeaturedCoursesPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
