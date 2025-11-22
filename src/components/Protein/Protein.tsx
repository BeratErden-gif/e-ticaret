import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Protein.css";
import "../Header/Header.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";
import img1 from "../../assets/protein sayfam/1071d4920ccb378e947ad27c8fb333b1c39f9ba4 (1).jpg";
import img2 from "../../assets/protein sayfam/4e89226adabe52f9accd071d9601b34b1f6378c9 (1).jpg";
import img3 from "../../assets/protein sayfam/69371518fea9f73ac87d5917c9e1c764422a20a2 (1).jpg";
import img4 from "../../assets/protein sayfam/69371518fea9f73ac87d5917c9e1c764422a20a2 (2).jpg";
import img5 from "../../assets/protein sayfam/820ce10366f959283b14b4c6ab04680623066ae9 (1).jpg";
import img6 from "../../assets/protein sayfam/b87a02f9cfa93fee17a80f31d4ff368f6d67c410 (1).jpg";
import img7 from "../../assets/protein sayfam/c205257d65679d2d2cef42735ad67a199f44a606.png";
import img8 from "../../assets/protein sayfam/cd11d993d3e914ba4534c748592fa01a71618762.png";
import img9 from "../../assets/protein sayfam/d867641652ed256d3cd4356cd8a1adaab6d5fca5.png";
import img10 from "../../assets/protein sayfam/e78d1ebd6d84c31f66e0bdd7bae34a62cb45f772.png";
import img11 from "../../assets/protein sayfam/ef4580befaa8ae9bf8f59b228e417cf9a6d0c3fb (1).jpg";
import img12 from "../../assets/protein sayfam/f7798d1ccc78793973ec36de66c94c7589fafe3f.png";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

const products = [
  {
    id: 1,
    image: img1,
    title: "WHEY PROTEIN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN",
    rating: 5,
    reviews: 10069,
    price: 549,
  },
  {
    id: 2,
    image: img2,
    title: "WHEY ISOLATE",
    description: "%100 PROTEİN İZOLAT SPOR WHEY",
    rating: 5,
    reviews: 687,
    price: 749,
  },
  {
    id: 3,
    image: img3,
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    rating: 5,
    reviews: 7500,
    price: 799,
    oldPrice: 1198,
    discount: 20,
  },
  {
    id: 4,
    image: img4,
    title: "PEA PROTEIN",
    description: "EN POPÜLER VEGAN PROTEİN",
    rating: 5,
    reviews: 1770,
    price: 349,
  },
  {
    id: 5,
    image: img5,
    title: "MICELLAR CASEIN",
    description: "YAVAS SİNDİRİLEN PROTEİN KAYNAĞI",
    rating: 5,
    reviews: 166,
    price: 599,
  },
  {
    id: 6,
    image: img6,
    title: "EGG WHITE POWDER",
    description: "PROTEİN ALTIN STANDARTI",
    rating: 5,
    reviews: 339,
    price: 899,
  },
  {
    id: 7,
    image: img7,
    title: "MILK PROTEIN",
    description: "%30 KAZEİN, %70 WHEY PROTEİN",
    rating: 5,
    reviews: 205,
    price: 699,
  },
  {
    id: 8,
    image: img8,
    title: "SOYA PROTEIN",
    description: "VEGAN PROTEİN KAYNAĞI",
    rating: 5,
    reviews: 214,
    price: 449,
  },
  {
    id: 9,
    image: img9,
    title: "PROTEIN BAR 2'Lİ PAKET",
    description: "%34 PROTEİN, ŞEKER KARIŞIK",
    rating: 5,
    reviews: 166,
    price: 59,
    oldPrice: 90,
    discount: 34,
  },
  {
    id: 10,
    image: img10,
    title: "MASS GAINER LANSMAN",
    description: "YÜKSEK KALORİLİ YATIŞ ÖNCESİ",
    rating: 5,
    reviews: 365,
    price: 699,
    oldPrice: 999,
    discount: 30,
  },
  {
    id: 11,
    image: img11,
    title: "PROTEIN BAR",
    description: "SÜPER PROTEİN, ŞEKER KARİŞİT",
    rating: 5,
    reviews: 506,
    price: 249,
    oldPrice: 349,
    discount: 29,
  },
  {
    id: 12,
    image: img12,
    title: "COLLAGEN COFFEE",
    description: "KOLLAJEN KAHVE",
    rating: 5,
    reviews: 377,
    price: 349,
  },
];

const Protein: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="protein-header">
        <div className="protein-header-content">
          <button
            className="hamburger-menu"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menü"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="OJS Nutrition" className="protein-logo" />
          </div>
          <form className="protein-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Aradığınız ürünü yazınız" />
            <button type="submit">ARA</button>
          </form>
          <div className="protein-actions">
            <a href="/account" className="protein-account">HESAP</a>
            <button
              className="protein-cart"
              onClick={() => setIsCartOpen(true)}
            >
              <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="cart-text">SEPET</span>
              <span className="protein-cart-count">0</span>
            </button>
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="OJS Nutrition" className="protein-logo" />
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Kapat"
          >
            ×
          </button>
        </div>
        <div className="mobile-menu-links">
          <a href="/protein" onClick={() => setIsMobileMenuOpen(false)}>PROTEİN</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>SPOR GIDALARI</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>SAĞLIK</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>GIDA</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>VİTAMİN</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>TÜM ÜRÜNLER</a>
        </div>
        <div className="mobile-menu-bottom">
          <a href="/account" onClick={() => setIsMobileMenuOpen(false)}>HESABIM</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>MÜŞTERİ YORUMLARI</a>
          <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>İLETİŞİM</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="protein-nav">
        <div className="protein-nav-content">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="protein-nav-link">
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Info Bar */}
      <InfoBar />

      {/* Mobile Search */}
      <div className="mobile-search-container">
        <div className="mobile-search">
          <input type="text" placeholder="Aradığınız ürünü yazınız" />
        </div>
      </div>

      {/* Page Title */}
      <h1 className="protein-page-title">PROTEİN</h1>

      {/* Product Grid */}
      <div className="protein-grid">
        {products.map((product) => (
          <div key={product.id} className="protein-card">
            {product.discount && (
              <div className="protein-card-discount">
                %{product.discount} İNDİRİM
              </div>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="protein-card-image"
            />
            <div className="protein-card-content">
              <h3 className="protein-card-title">{product.title}</h3>
              <p className="protein-card-description">{product.description}</p>
              <div className="protein-card-rating">
                {[...Array(product.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="protein-card-reviews">
                {product.reviews} Yorum
              </div>
              <div>
                <span className="protein-card-price">{product.price} TL</span>
                {product.oldPrice && (
                  <span className="protein-card-old-price">
                    {product.oldPrice} TL
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="protein-footer">
        <div className="protein-total-products">
          Toplam 15 ürün görüntüleniyor
        </div>
        <p className="protein-description">
          Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini
          sağlayan temel yapı taşlarından biri proteindir.{" "}
          <strong>Protein</strong> kısaca, bir veya daha fazla amino asit artık
        </p>
        <a href="#" className="protein-description-link">
          Daha fazla göster
        </a>
      </div>

      {/* Footer */}
      <Footer hideRatingSection={true} />
    </div>
  );
};

export default Protein;
