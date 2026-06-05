import PageLayout from "../components/shared/PageLayout";
import PageBanner from "../components/shared/PageBanner";
import FeaturedCoursesGrid from "../components/FeaturedCoursesGrid";
import { PAGE_BANNERS } from "../data/bannerContent";

const FeaturedCoursesPage = () => (
  <PageLayout>
    <PageBanner {...PAGE_BANNERS.courses} />
    <FeaturedCoursesGrid />
  </PageLayout>
);

export default FeaturedCoursesPage;
