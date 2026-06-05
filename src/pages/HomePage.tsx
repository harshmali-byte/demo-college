import PageLayout from "../components/shared/PageLayout";
import FirstVisitModals from "../components/modals/FirstVisitModals";
import HomeHero from "../components/home/HomeHero";
import {
  PlatformSection,
  AboutSection,
  MissionSection,
  CoursesSection,
  FacilitiesSection,
  GallerySection,
  DepartmentsInquirySection,
  ShiningStarsSection,
} from "../components/home/HomeSections";

const HomePage = () => (
  <PageLayout>
    <FirstVisitModals />
    <HomeHero />
    <PlatformSection />
    <AboutSection />
    <MissionSection />
    <CoursesSection />
    <FacilitiesSection />
    <GallerySection />
    <DepartmentsInquirySection />
    <ShiningStarsSection />
  </PageLayout>
);

export default HomePage;
