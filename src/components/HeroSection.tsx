import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Modern Living",
      subtitle: "Discover our curated collection of contemporary furniture",
      cta: "Shop Now",
    },
    {
      image: hero2,
      title: "Timeless Design",
      subtitle: "Elegant pieces that blend comfort with sophistication",
      cta: "Explore Collections",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-warm-white max-w-2xl px-4 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-warm-white/90 max-w-lg mx-auto">
                  {slide.subtitle}
                </p>
                <Button variant="hero" size="xl" className="animate-scale-in">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-warm-white/20 backdrop-blur-sm hover:bg-warm-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 text-warm-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-warm-white/20 backdrop-blur-sm hover:bg-warm-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 text-warm-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-warm-white scale-110" 
                : "bg-warm-white/50 hover:bg-warm-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;