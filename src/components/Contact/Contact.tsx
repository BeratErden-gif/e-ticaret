import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
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

const Contact: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="protein-header">
        <div className="protein-header-content">
          <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="OJS Nutrition" className="protein-logo" />
          </div>
          <form className="protein-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Aradığınız ürünü yazınız" />
            <button type="submit">ARA</button>
          </form>
          <div className="protein-actions">
            <button className="protein-account">HESAP</button>
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

      {/* Contact Form */}
      <div className="contact-form">
        <h1>Bize Ulaşın</h1>
        <p>Bize aşağıdaki iletişim ulaşabilirsiniz.</p>

        <div className="form-row">
          <input type="text" className="form-input" placeholder="İsim *" />
          <input type="text" className="form-input" placeholder="Soyad" />
        </div>

        <input
          type="email"
          className="form-input"
          placeholder="E-Posta"
          style={{ width: "100%", marginBottom: "20px" }}
        />

        <textarea className="form-textarea" placeholder="Mesaj"></textarea>

        <button type="submit" className="submit-button">
          GÖNDER
        </button>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p>
          *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar verilen
          siparişler için geçerlidir.
        </p>
        <p>
          Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.
        </p>
        <p>
          Telefon ile <strong>0850 303 29 89</strong> numarasını arayarak da
          bizlere sesli mesaj bırakabilirsiniz. Sesli mesajlarınıza hafta içi
          saat
        </p>
        <p>09:00-17:00 arasında dönüş sağlanmaktadır.</p>
      </div>

      {/* Protein sayfası özel footer */}
      <footer className="protein-page-footer">
        <div className="protein-page-footer-content">
          <div className="protein-page-footer-column">
            <h3>İletişim</h3>
            <ul className="protein-page-footer-links">
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="#">KVKK</a>
              </li>
              <li>
                <a href="#">Çalışma İlkelerimiz</a>
              </li>
              <li>
                <a href="#">Satış Sözleşmesi</a>
              </li>
              <li>
                <a href="#">Garanti ve İade Koşulları</a>
              </li>
              <li>
                <a href="#">Gerçek Müşteri Yorumları</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="protein-page-footer-column">
            <h3>Kategoriler</h3>
            <ul className="protein-page-footer-links">
              <li>
                <a href="#">Protein</a>
              </li>
              <li>
                <a href="#">Spor Gıdaları</a>
              </li>
              <li>
                <a href="#">Sağlık</a>
              </li>
              <li>
                <a href="#">Gıda</a>
              </li>
              <li>
                <a href="#">Vitamin</a>
              </li>
              <li>
                <a href="#">Aksesuar</a>
              </li>
              <li>
                <a href="#">Tüm Ürünler</a>
              </li>
              <li>
                <a href="#">Paketler</a>
              </li>
              <li>
                <a href="#">Lansmana Özel Fırsatlar</a>
              </li>
            </ul>
          </div>

          <div className="protein-page-footer-column">
            <h3>Popüler Ürünler</h3>
            <ul className="protein-page-footer-links">
              <li>
                <a href="#">Whey Protein</a>
              </li>
              <li>
                <a href="#">Cream of Rice</a>
              </li>
              <li>
                <a href="#">Creatine</a>
              </li>
              <li>
                <a href="#">BCAA+</a>
              </li>
              <li>
                <a href="#">Pre-Workout</a>
              </li>
              <li>
                <a href="#">Fitness Paketi</a>
              </li>
              <li>
                <a href="#">Collagen</a>
              </li>
              <li>
                <a href="#">Günlük Vitamin Paketi</a>
              </li>
              <li>
                <a href="#">ZMA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="protein-page-footer-copyright">
          Copyright © - Tüm Hakları Saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
