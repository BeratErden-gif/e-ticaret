import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  discountedPrice,
  rating,
  reviewCount,
  discount,
}) => {
  return (
    <div className="w-full p-4 relative">
      {discount && (
        <div className="absolute top-2 right-2 bg-accent text-white text-sm font-medium px-2 py-1 rounded">
          %{discount}
        </div>
      )}
      <div className="w-full aspect-square mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-row justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600">({reviewCount})</span>
        </div>
        <div>
          {discountedPrice ? (
            <div className="flex flex-row items-center gap-2">
              <span className="text-accent font-semibold">
                {discountedPrice.toFixed(2)} TL
              </span>
              <span className="text-gray-400 line-through text-sm">
                {price.toFixed(2)} TL
              </span>
            </div>
          ) : (
            <span className="font-semibold">{price.toFixed(2)} TL</span>
          )}
        </div>
      </div>
      <h3 className="text-primary font-medium text-sm lg:h-12 md:h-auto">
        {title}
      </h3>
      <button className="w-full bg-primary text-white py-2 mt-4 rounded hover:bg-opacity-90 transition-colors">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
