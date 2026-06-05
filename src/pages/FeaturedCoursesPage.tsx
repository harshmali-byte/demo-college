import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import FeaturedCoursesGrid from "../components/FeaturedCoursesGrid";

const FeaturedCoursesPage = () => (
  <PageLayout>
    <PageBanner
      title="Featured Courses"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses" },
      ]}
    />
    <FeaturedCoursesGrid />
  </PageLayout>
);

export default FeaturedCoursesPage;
