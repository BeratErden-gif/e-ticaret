import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Header/Header.css";
import "./Account.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

const Account: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "login") {
      window.location.href = "/account-info";
    } else {
      alert("Üyelik oluşturuldu ✅");
    }
  };

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
              isEmpty={true}
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

      <InfoBar />

      {/* Mobile Search */}
      <div className="mobile-search-container">
        <div className="mobile-search">
          <input type="text" placeholder="Aradığınız ürünü yazınız" />
        </div>
      </div>

      {/* Account Form */}
      <div className="account-container">
        {/* Tabs */}
        <div className="account-tabs">
          <button
            className={`tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Giriş Yap
          </button>
          <button
            className={`tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Üye Ol
          </button>
        </div>

        {/* Form */}
        <form className="account-form" onSubmit={handleSubmit}>
          {activeTab === "login" ? (
            <>
              <div className="form-group">
                <label>*E-Posta</label>
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*Şifre</label>
                <input
                  type="password"
                  placeholder="Şifrenizi girin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="forgot-password">
                <a href="#">Şifremi Unuttum?</a>
              </div>

              <button type="submit" className="submit-btn">
                GİRİŞ YAP
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>*Ad</label>
                <input
                  type="text"
                  placeholder="Adınızı girin"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*Soyad</label>
                <input
                  type="text"
                  placeholder="Soyadınızı girin"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*E-Posta</label>
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*Şifre</label>
                <input
                  type="password"
                  placeholder="Şifrenizi girin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*Şifre Tekrar</label>
                <input
                  type="password"
                  placeholder="Şifrenizi tekrar girin"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>*Telefon</label>
                <input
                  type="tel"
                  placeholder="Telefon numaranızı girin"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                ÜYE OL
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Account;
