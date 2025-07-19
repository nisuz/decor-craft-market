import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-trendy-red">TRENDYKARTT</h3>
            <p className="text-gray-300 leading-relaxed">
              Your one-stop destination for trendy fashion at affordable prices. Quality products, fast delivery, and exceptional customer service.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Shop</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Women's Fashion</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Men's Fashion</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Kids' Fashion</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Beauty Products</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Electronics</a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Track Your Order</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Returns & Refunds</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Size Guide</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQs</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trendy-red"
              />
              <Button variant="trendy" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Truck className="h-6 w-6 text-trendy-red" />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-gray-300">On orders over ₹999</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-trendy-red" />
              <div>
                <p className="font-semibold">Secure Payments</p>
                <p className="text-sm text-gray-300">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="h-6 w-6 text-trendy-red" />
              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-sm text-gray-300">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-trendy-red" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-trendy-red" />
              <span className="text-gray-300">support@trendykartt.co.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-trendy-red" />
              <span className="text-gray-300">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TrendyKartt. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;