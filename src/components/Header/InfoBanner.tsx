import React from "react";

const InfoBanner: React.FC = () => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-[1200px] h-[40px] mx-auto flex items-center justify-center">
        <img
          src="/info-bar.png"
          alt="Info bar"
          className="h-[40px] w-auto select-none"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default InfoBanner;
