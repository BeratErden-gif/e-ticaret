import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhite from "../../assets/logo-white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-column">
            <img
              src={logoWhite}
              alt="OJS Nutrition Logo"
              className="footer-logo"
            />
            <ul id="footer-about" className="footer-links">
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
            <ul id="footer-categories">
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
            <ul id="footer-popular">
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
        <div className="footer-bottom">
          <p className="copyright-text">Copyright © - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
