const CategoryGrid = () => {
  const categories = [
    {
      title: "Women's Fashion",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/category/women"
    },
    {
      title: "Men's Fashion", 
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/category/men"
    },
    {
      title: "Kids' Fashion",
      image: "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=600", 
      link: "/category/kids"
    },
    {
      title: "Beauty Products",
      image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/category/beauty"
    },
    {
      title: "Home & Kitchen",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/category/home"
    },
    {
      title: "Electronics",
      image: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/category/electronics"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of products across popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-semibold text-sm text-center w-full">
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-trendy-red font-medium hover:text-trendy-red-dark transition-colors">
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;