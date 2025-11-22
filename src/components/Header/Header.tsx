import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "../Contact/Contact.css";
import logo from "../../assets/logo.svg";
import InfoBar from "../InfoBar/InfoBar";
import CartSidebar from "../Cart/CartSidebar";

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
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
            <a href="/account" className="protein-account">
              HESAP
            </a>
            <button
              className="protein-cart"
              onClick={() => setIsCartOpen(true)}
            >
              SEPET
              <span className="protein-cart-count">0</span>
            </button>
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              isEmpty={true}
            />
          </div>
        </div>
      </header>

      <nav className="protein-nav">
        <div className="protein-nav-content">
          <a href="/protein" className="protein-nav-link">
            PROTEİN
          </a>
          <a href="#" className="protein-nav-link">
            SPOR GIDALARI
          </a>
          <a href="#" className="protein-nav-link">
            SAĞLIK
          </a>
          <a href="#" className="protein-nav-link">
            GIDA
          </a>
          <a href="#" className="protein-nav-link">
            VİTAMİN
          </a>
          <a href="#" className="protein-nav-link">
            TÜM ÜRÜNLER
          </a>
        </div>
      </nav>

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

      <InfoBar />
    </div>
  );
};

export default Header;
