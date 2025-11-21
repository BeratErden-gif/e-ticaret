import React from "react";
import "./Categories.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import protein from "../../assets/protein.jpg";
import sporGidalari from "../../assets/images/spor gıdaları.jpg";
import vitaminler from "../../assets/images/vitaminler.jpg";
import saglik from "../../assets/images/sağlık.jpg";
import gida from "../../assets/images/gıda.jpg";
import tumUrunler from "../../assets/images/tüm ürünler.png";

const Categories: React.FC = () => {
  const categories = [
    {
      title: "PROTEİN",
      image: protein,
      backgroundColor: "#7EA0A2",
    },
    {
      title: "VİTA-\nMİNLER",
      image: vitaminler,
      backgroundColor: "#FDE8D7",
    },
    {
      title: "SAĞLIK",
      image: saglik,
      backgroundColor: "#CCCBC6",
    },
    {
      title: "SPOR\nGIDALARI",
      image: sporGidalari,
      backgroundColor: "#D9D8D3",
    },
    {
      title: "GIDA",
      image: gida,
      backgroundColor: "#72B4CE",
    },
    {
      title: "TÜM\nÜRÜNLER",
      image: tumUrunler,
      backgroundColor: "rgb(171, 218, 236)",
    },
  ];

  return (
    <section className="categories">
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
            backgroundColor={category.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
