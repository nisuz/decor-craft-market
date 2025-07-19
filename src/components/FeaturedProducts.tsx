import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import chair1 from "@/assets/chair-1.jpg";
import table1 from "@/assets/table-1.jpg";
import lamp1 from "@/assets/lamp-1.jpg";
import sofa1 from "@/assets/sofa-1.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Modern Lounge Chair",
      price: 1299,
      image: chair1,
      category: "Seating",
      isNew: true,
    },
    {
      id: "2",
      name: "Oak Coffee Table",
      price: 899,
      image: table1,
      category: "Tables",
    },
    {
      id: "3",
      name: "Brass Pendant Light",
      price: 299,
      image: lamp1,
      category: "Lighting",
      isNew: true,
    },
    {
      id: "4",
      name: "Contemporary Sofa",
      price: 2199,
      image: sofa1,
      category: "Seating",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Featured Collection
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Discover our carefully curated selection of premium furniture pieces 
            that blend contemporary design with timeless appeal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;