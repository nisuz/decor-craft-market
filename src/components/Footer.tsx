import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
  ];

  const categories = [
    { name: "Seating", href: "/category/seating" },
    { name: "Tables", href: "/category/tables" },
    { name: "Storage", href: "/category/storage" },
    { name: "Lighting", href: "/category/lighting" },
  ];

  return (
    <footer className="bg-soft-beige border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-charcoal rounded"></div>
              <span className="text-xl font-semibold text-charcoal">Furni</span>
            </div>
            <p className="text-warm-gray mb-6 max-w-md">
              Crafting exceptional furniture experiences with timeless design 
              and uncompromising quality for modern living spaces.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-medium text-charcoal mb-3">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button variant="default" size="default">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-terracotta">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-terracotta">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-terracotta">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-warm-gray hover:text-charcoal transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-warm-gray hover:text-charcoal transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-gray text-sm">
            © 2024 Furni. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-warm-gray text-sm hover:text-charcoal transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-warm-gray text-sm hover:text-charcoal transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;