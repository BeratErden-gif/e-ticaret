import React from "react";
import "./CategoryCard.css";

interface CategoryCardProps {
  title: string;
  image: string;
  backgroundColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  backgroundColor,
}) => {
  return (
    <div className="category-card" style={{ backgroundColor }}>
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="category-title">{title}</h2>
      <button className="category-button">İNCELE</button>
    </div>
  );
};

export default CategoryCard;
