import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Header/Header.css";
import "./About.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";

// Sertifika resimleri
import cert1 from "../../assets/Sertifikalarımız/CERTIFIED COMPANY.png";
import cert2 from "../../assets/Sertifikalarımız/GIDA GÜVENLİĞİ YÖNETİMİ.png";
import cert3 from "../../assets/Sertifikalarımız/GOOD MANUFACTURING PRACTICE.png";
import cert4 from "../../assets/Sertifikalarımız/HELAL GIDA.png";
import cert5 from "../../assets/Sertifikalarımız/INTERNATIONAL QUALITY SERVICES.png";
import cert6 from "../../assets/Sertifikalarımız/KALİTELİ YÖNETİM SİSTEMİ.png";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

type Review = {
  name: string;
  title: string;
  text: string;
  product: string;
  date: string;
};

const reviews: Review[] = [
  {
    name: "Mustafa Ü.",
    title: "L carnitine",
    text: "Gayet şeffaf ve güzel kargoyla geldi çok memnun kaldım.",
    product: "L Carnitine",
    date: "06/05/24",
  },
  {
    name: "Erol Ş.",
    title: "Muhteşem tad",
    text: "Tadı çok iyi. Faydası da görüldü.",
    product: "Caffeine Tablets",
    date: "06/05/24",
  },
  {
    name: "Umut E.",
    title: "Harika",
    text: "Öneririm.",
    product: "C Vitamini",
    date: "06/05/24",
  },
  {
    name: "Bahadır Y.",
    title: "İşe yarar",
    text: "Antrenman öncesi enerjimi artırdı, memnunum.",
    product: "BCAA + Glutamine",
    date: "06/05/24",
  },
  {
    name: "Yusuf A.",
    title: "Süper",
    text: "Harika.",
    product: "Protein Izolat / Laktoz İçermez",
    date: "06/05/24",
  },
  {
    name: "Umut E.",
    title: "Harika",
    text: "Kargo hızlı, ürün orijinal.",
    product: "Kreatin Monohidrat",
    date: "06/05/24",
  },
  {
    name: "Muhammet I.",
    title: "Kalite",
    text: "Süper.",
    product: "Amino Asit Kompleksi",
    date: "06/05/24",
  },
  {
    name: "Serhat A.",
    title: "Süper",
    text: "Efsane.",
    product: "Amino Asit Kompleksi",
    date: "06/05/24",
  },
  {
    name: "Ertuğrul T.",
    title: "Pump olarak gerçekten başarılı",
    text: "Etki olarak güzel, tavsiye ederim.",
    product: "Pre-Workout & Nitrate",
    date: "06/05/24",
  },
];

const About: React.FC = () => {
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

      <div className="about-container">
        <h1 className="about-title">
          Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
        </h1>

        <p className="about-text">
          2018 yılından beri sporcu gıdaları, takviye edici gıdalar ve
          fonksiyonel gıdaları üreten bir firma olarak, müşterilerimize en
          kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.
        </p>

        <p className="about-text">
          Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur.
          Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, sporcuların
          ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici
          çözümler sunuyoruz. Ürün yelpazemizdeki protein tozları, aminoasitler,
          vitamin ve mineral takviyeleri ile spor performansınızı desteklemek
          için ideal besin değerlerini sunuyoruz.
        </p>

        <p className="about-text">
          Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle,
          inovasyon, kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli
          olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri
          sunmaya devam ediyoruz.
        </p>

        <p className="about-text">
          Sporcu gıdaları konusunda lider bir marka olarak, sizin sağlığınıza ve
          performansınıza değer veriyoruz. Siz de spor performansınızı en üst
          seviyeye çıkarmak ve sağlıklı yaşam tarzınızı desteklemek
          istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın.
          Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.
        </p>

        <h2 className="customer-count">1.000.000+ den Fazla Mutlu Müşteri</h2>
        <p className="about-text">
          Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın
          her alanında sağlıklı yaşamı ve beslenmeyi hedefleyen 1.000.000'den
          fazla kişiye ulaştık.
        </p>

        {/* Sertifikalarımız */}
        <div className="certificates-section">
          <h2 className="certificates-title">Sertifikalarımız</h2>
          <div className="certificates-grid">
            {[cert1, cert2, cert3, cert4, cert5, cert6].map((cert, i) => (
              <img
                key={i}
                src={cert}
                alt={`Sertifika ${i + 1}`}
                className="certificate-img"
              />
            ))}
          </div>
        </div>

        {/* Yorumlar */}
        <section className="reviews-section">
          <h2 className="reviews-title">Müşteri Yorumları</h2>

          {/* üst şerit: yıldız + yorum sayısı + buton */}
          <div className="reviews-topbar">
            <div className="reviews-starsline">
              <span className="stars-big">★★★★★</span>
              <span className="reviews-count">19960 Yorum</span>
            </div>
            <button className="reviews-outline-btn">ÜRÜN İNCELEMELERİ</button>
          </div>

          {/* kartlar */}
          <div className="reviews-list">
            {reviews.map((r, idx) => (
              <article key={idx} className="review-card wide">
                <header className="review-header">
                  <div className="stars">★★★★★</div>
                  <span className="review-author">{r.name}</span>
                  <span className="verified">DOĞRULANMIŞ MÜŞTERİ</span>
                  <time className="review-date">{r.date}</time>
                </header>

                <h3 className="review-title">{r.title}</h3>
                <p className="review-text">{r.text}</p>
                <span className="review-product">Alınan Ürün: {r.product}</span>
              </article>
            ))}
          </div>

          {/* sayfalama */}
          <div className="reviews-pagination">
            <span className="pag-ctl">&lt;</span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <span key={n} className={`pag-num ${n === 1 ? "active" : ""}`}>
                {n}
              </span>
            ))}
            <span className="pag-ctl">&gt;</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer hideRatingSection={true} />
    </div>
  );
};

export default About;
