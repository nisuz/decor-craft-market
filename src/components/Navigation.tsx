import { Search, ShoppingCart, Heart, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-trendy-red mr-2" />
            <span className="text-xl font-bold text-black">TRENDYKARTT</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trendy-red focus:border-transparent"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 h-8 px-3 bg-trendy-red hover:bg-trendy-red-dark"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Wishlist</span>
            </div>
            <div className="flex items-center space-x-1">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Cart</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Login</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="hidden md:flex items-center space-x-8 py-3 border-t border-gray-100">
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Women</a>
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Men</a>
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Kids</a>
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Home & Kitchen</a>
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Beauty</a>
          <a href="#" className="text-gray-700 hover:text-trendy-red transition-colors">Electronics</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;