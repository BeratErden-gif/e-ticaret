import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products: React.FC = () => {
  const products = [
    {
      image: "/products/1.jpg",
      title: "Günlük Vitamin Paketi",
      price: 899.99,
      discountedPrice: 649.99,
      rating: 5,
      reviewCount: 128,
      discount: 25,
    },
    // ... diğer ürünler
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
