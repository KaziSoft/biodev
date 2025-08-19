import Slider from "./components/Carousel";
import ClientLogoSlider from "./components/ClientLogoSlider";
import ViewProjectsPage from "./components/ProjectGallery";
import PromotionalBanner from "./components/PromotionalBanner";
import ViewBlogs from "./components/ViewBlogs";

export default function Home() {
  return (
    <>
      <Slider />
      <ViewProjectsPage/>
      <PromotionalBanner />
      <ViewBlogs/>
      <ClientLogoSlider/>
    </>
  );
}
