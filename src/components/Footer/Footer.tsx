import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhite from "../../assets/logo-white.svg";

interface FooterProps {
  hideRatingSection?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideRatingSection = false }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Desktop Footer */}
        <div className="footer-top desktop-footer">
          <div className="footer-column">
            <img
              src={logoWhite}
              alt="OJS Nutrition Logo"
              className="footer-logo"
            />
            <ul className="footer-links">
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/faq">Sıkça Sorulan Sorular</Link>
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
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading-desktop">Kategoriler</h3>
            <ul>
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
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading-desktop">Popüler Ürünler</h3>
            <ul>
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

        {/* Mobile Footer */}
        <div className="mobile-footer">
          {/* Rating Section */}
          {!hideRatingSection && (
            <div className="rating-section">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-count">(140.000+)</span>
              </div>

              <div className="features">
                <div className="feature-item">LABORATUVAR TESTLİ ÜRÜNLER</div>
                <div className="feature-item">AYNI GÜN & ÜCRETSİZ KARGO</div>
                <div className="feature-item">MEMNUNİYET GARANTİSİ</div>
              </div>

              <p className="feature-description">
                200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsanız, bizimle iletişime geçtiğinizde çözüme kavuşturacağız.
              </p>
            </div>
          )}

          {/* Logo */}
          <div className="footer-logo-section">
            <img src={logoWhite} alt="OJS Nutrition" className="footer-logo-mobile" />
          </div>

          {/* Navigation */}
          <div className="footer-nav-mobile">
            <div className={`nav-section ${openSection === 'about' ? 'active' : ''}`}>
              <div className="nav-header" onClick={() => toggleSection('about')}>
                <span className="nav-title">OJS NUTRITION</span>
                <span className="nav-toggle">+</span>
              </div>
              <div className="nav-content">
                <ul className="nav-links">
                  <li><Link to="/about">Hakkımızda</Link></li>
                  <li><Link to="/contact">İletişim</Link></li>
                  <li><Link to="/faq">Sıkça Sorulan Sorular</Link></li>
                  <li><a href="#">KVKK</a></li>
                  <li><a href="#">Çalışma İlkelerimiz</a></li>
                </ul>
              </div>
            </div>

            <div className={`nav-section ${openSection === 'categories' ? 'active' : ''}`}>
              <div className="nav-header" onClick={() => toggleSection('categories')}>
                <span className="nav-title">KATEGORİLER</span>
                <span className="nav-toggle">+</span>
              </div>
              <div className="nav-content">
                <ul className="nav-links">
                  <li><a href="#">Protein</a></li>
                  <li><a href="#">Spor Gıdaları</a></li>
                  <li><a href="#">Sağlık</a></li>
                  <li><a href="#">Gıda</a></li>
                  <li><a href="#">Vitamin</a></li>
                </ul>
              </div>
            </div>

            <div className={`nav-section ${openSection === 'popular' ? 'active' : ''}`}>
              <div className="nav-header" onClick={() => toggleSection('popular')}>
                <span className="nav-title">POPÜLER ÜRÜNLER</span>
                <span className="nav-toggle">+</span>
              </div>
              <div className="nav-content">
                <ul className="nav-links">
                  <li><a href="#">Whey Protein</a></li>
                  <li><a href="#">Creatine</a></li>
                  <li><a href="#">BCAA+</a></li>
                  <li><a href="#">Pre-Workout</a></li>
                  <li><a href="#">Collagen</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">Copyright © - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
