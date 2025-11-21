import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "./Orders.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

const Orders: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // Örnek sipariş verileri
  const orders = [
    {
      id: "427795",
      date: "31 Mart 2023",
      status: "Teslim Edildi",
      productName: "WHEY PROTEIN",
      image: "/src/assets/images.2/WHEY PROTEIN.jpg"
    },
    {
      id: "290405",
      date: "14 Aralık 2022",
      status: "Teslim Edildi",
      productName: "GÜNLÜK VİTAMİN PAKETİ",
      image: "/src/assets/images.2/günlük vitamin paketi.jpg"
    },
    {
      id: "255564",
      date: "19 Kasım 2022",
      status: "Teslim Edildi",
      productName: "FITNESS PAKETI",
      image: "/src/assets/images.2/FITNESS PAKET.jpg"
    },
    {
      id: "190462",
      date: "1 Ekim 2022",
      status: "Teslim Edildi",
      productName: "CREAM OF RICE",
      image: "/src/assets/images.2/cream of rice.jpg"
    },
  ];

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

      <div className="account-info-container">
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div className="account-info-sidebar">
            <h1 className="account-info-title">Hesabım</h1>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/account-info" style={{ color: "inherit", textDecoration: "none" }}>
                  Hesap Bilgilerim
                </Link>
              </li>
              <li className="sidebar-menu-item active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                Siparişlerim
              </li>
              <li className="sidebar-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/addresses" style={{ color: "inherit", textDecoration: "none" }}>
                  Adreslerim
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="account-info-content">
            <div className="orders-container">
              <h2 className="orders-title">Siparişlerim ({orders.length})</h2>

              {orders.length === 0 ? (
                <div className="no-orders">
                  <p>Henüz siparişiniz bulunmamaktadır.</p>
                </div>
              ) : (
                <div className="orders-list">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="order-item"
                    >
                      <div className="order-content">
                        <div className="order-image-wrapper">
                          <img
                            src={order.image}
                            alt={order.productName}
                            className="order-image"
                          />
                        </div>

                        <div className="order-details">
                          <p className="order-status-label">
                            {order.status}
                          </p>
                          <h3 className="order-product-name">
                            {order.productName}
                          </h3>
                          <p className="order-date-text">
                            {order.date} Tarihinde Sipariş Verildi
                          </p>
                          <p className="order-number-text">
                            {order.id} numaralı sipariş
                          </p>
                        </div>
                      </div>

                      <button className="order-detail-button">
                        Detayı Görüntüle
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
