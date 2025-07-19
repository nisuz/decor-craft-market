import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Shop Trendy Fashion
                <br />
                <span className="text-trendy-red">At Affordable Prices</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-lg">
                Discover the latest trends in fashion for women, men, and kids. From stylish clothing to accessories, find everything you need at prices that won't break the bank.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="trendy" size="lg" className="px-8">
                Shop Now
              </Button>
              <Button variant="trendyOutline" size="lg" className="px-8">
                Women's Collection
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-trendy-red" />
                <span className="text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-trendy-red" />
                <span className="text-gray-700">Easy Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-trendy-red" />
                <span className="text-gray-700">Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Right Image with Badges */}
          <div className="relative">
            <div className="bg-trendy-red rounded-2xl p-8 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion collection"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              
              {/* New Arrivals Badge */}
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                <p className="text-trendy-red font-semibold text-sm">New Arrivals</p>
                <p className="text-gray-600 text-xs">Up to 40% off</p>
              </div>

              {/* Sale Badge */}
              <div className="absolute bottom-4 right-4 bg-sale-yellow text-black px-6 py-3 rounded-full shadow-lg">
                <p className="font-bold text-lg">SALE</p>
                <p className="font-bold text-sm">50% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;