import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-product transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-soft-beige">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        
        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-terracotta text-charcoal text-xs font-semibold px-2 py-1 rounded">
            New
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isWishlisted 
              ? "bg-terracotta text-charcoal" 
              : "bg-warm-white/80 text-warm-gray hover:bg-warm-white hover:text-terracotta"
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Add to Cart Overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <Button 
            variant="hero" 
            size="sm" 
            className="w-full"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-warm-gray uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-medium text-charcoal mb-2 group-hover:text-terracotta transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-charcoal">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;