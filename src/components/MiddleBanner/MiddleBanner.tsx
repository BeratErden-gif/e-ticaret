import React from "react";
import "./MiddleBanner.css";
import bannerImage from "../../assets/images.2/Ekran Resmi 2025-08-19 17.55.50.png";
import bannerImageMobile from "../../assets/images/Ekran Resmi 2025-08-27 16.17.46.png";

const MiddleBanner: React.FC = () => {
  return (
    <div className="middle-banner">
      <img src={bannerImage} alt="OJS Nutrition Gym" className="middle-banner-image desktop-banner" />
      <img src={bannerImageMobile} alt="OJS Nutrition" className="middle-banner-image mobile-banner" />
    </div>
  );
};

export default MiddleBanner;
