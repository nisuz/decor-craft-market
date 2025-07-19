import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
