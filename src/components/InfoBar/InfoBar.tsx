import React from "react";
import { FaBox, FaSmile, FaShieldAlt } from "react-icons/fa";
import "./InfoBar.css";

const InfoBar: React.FC = () => {
  return (
    <div className="info-bar">
      {/* Aynı Gün Kargo */}
      <div className="info-item">
        <FaBox className="icon" />
        <span>
          <strong>AYNI GÜN KARGO</strong> - 16:00'DAN ÖNCEKİ SİPARİŞLERDE
        </span>
      </div>

      {/* Ücretsiz Kargo */}
      <div className="info-item">
        <FaSmile className="icon" />
        <span>
          <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ SİPARİŞLERDE
        </span>
      </div>

      {/* Güvenli Alışveriş */}
      <div className="info-item">
        <FaShieldAlt className="icon" />
        <span>
          <strong>GÜVENLİ ALIŞVERİŞ</strong> - 1.000.000+ MUTLU MÜŞTERİ
        </span>
      </div>
    </div>
  );
};

export default InfoBar;


