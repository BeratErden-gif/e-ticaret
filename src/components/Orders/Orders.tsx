import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Header/Header.css";
import "./Orders.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";
import wheyProteinImage from "../../assets/images/90824d0dc93a810b179e49b1b092f231efc186ee.jpg";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

interface OrderType {
  id: string;
  date: string;
  status: string;
  productName: string;
  image: string;
  shippingCompany: string;
  trackingNumber: string;
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    size: string;
    image: string;
  }[];
  address: {
    name: string;
    line1: string;
    line2: string;
    line3: string;
  };
  payment: {
    method: string;
    amount: number;
    cardLast4: string;
  };
  summary: {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    discountLabel: string;
    total: number;
  };
}

const Orders: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const navigate = useNavigate();

  // Örnek sipariş verileri
  const orders: OrderType[] = [
    {
      id: "427795",
      date: "31 Mart 2023",
      status: "Teslim Edildi",
      productName: "WHEY PROTEIN",
      image: wheyProteinImage,
      shippingCompany: "hepsiJet",
      trackingNumber: "HJZ192904051",
      products: [
        { id: 1, name: "WHEY PROTEIN", quantity: 2, price: 549, size: "400g", image: wheyProteinImage },
      ],
      address: {
        name: "Uğur İLTER",
        line1: "Barbaros, Nidakule Ataşehir Batı,",
        line2: "Begonya Sk. No: 1/2, 34746",
        line3: "Ataşehir/İstanbul",
      },
      payment: { method: "Kredi Kartı", amount: 1098, cardLast4: "61" },
      summary: { subtotal: 1098, shipping: 0, tax: 8, discount: 0, discountLabel: "", total: 1098 },
    },
    {
      id: "290405",
      date: "14 Aralık 2022",
      status: "Teslim Edildi",
      productName: "GÜNLÜK VİTAMİN PAKETİ",
      image: wheyProteinImage,
      shippingCompany: "hepsiJet",
      trackingNumber: "HJZ192904051",
      products: [
        { id: 1, name: "MELATONIN", quantity: 2, price: 62, size: "1 KUTU", image: wheyProteinImage },
        { id: 2, name: "GÜNLÜK VİTAMİN PAKETİ", quantity: 1, price: 449, size: "1 Paket x 2 Adet", image: wheyProteinImage },
        { id: 3, name: "BROMELAIN", quantity: 1, price: 197, size: "1 KUTU x 2 Adet", image: wheyProteinImage },
      ],
      address: {
        name: "Uğur İLTER",
        line1: "Barbaros, Nidakule Ataşehir Batı,",
        line2: "Begonya Sk. No: 1/2, 34746",
        line3: "Ataşehir/İstanbul",
      },
      payment: { method: "Kredi Kartı", amount: 770, cardLast4: "61" },
      summary: { subtotal: 856, shipping: 0, tax: 8, discount: 86, discountLabel: "Yüzde 10 indirim!", total: 770 },
    },
    {
      id: "255564",
      date: "19 Kasım 2022",
      status: "Teslim Edildi",
      productName: "FITNESS PAKETI",
      image: wheyProteinImage,
      shippingCompany: "Aras Kargo",
      trackingNumber: "ARS123456789",
      products: [
        { id: 1, name: "FITNESS PAKETI", quantity: 1, price: 899, size: "1 Paket", image: wheyProteinImage },
      ],
      address: {
        name: "Uğur İLTER",
        line1: "Barbaros, Nidakule Ataşehir Batı,",
        line2: "Begonya Sk. No: 1/2, 34746",
        line3: "Ataşehir/İstanbul",
      },
      payment: { method: "Kredi Kartı", amount: 899, cardLast4: "61" },
      summary: { subtotal: 899, shipping: 0, tax: 8, discount: 0, discountLabel: "", total: 899 },
    },
    {
      id: "190462",
      date: "1 Ekim 2022",
      status: "Teslim Edildi",
      productName: "CREAM OF RICE",
      image: wheyProteinImage,
      shippingCompany: "Yurtiçi Kargo",
      trackingNumber: "YK987654321",
      products: [
        { id: 1, name: "CREAM OF RICE", quantity: 1, price: 299, size: "1kg", image: wheyProteinImage },
      ],
      address: {
        name: "Uğur İLTER",
        line1: "Barbaros, Nidakule Ataşehir Batı,",
        line2: "Begonya Sk. No: 1/2, 34746",
        line3: "Ataşehir/İstanbul",
      },
      payment: { method: "Kredi Kartı", amount: 299, cardLast4: "61" },
      summary: { subtotal: 299, shipping: 0, tax: 8, discount: 0, discountLabel: "", total: 299 },
    },
  ];

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

      <div className="account-info-container">
        {/* Mobile Tab Navigation */}
        <div className="mobile-account-tabs">
          <a href="/account-info" className="mobile-tab">Hesap Bilgilerim</a>
          <a href="/orders" className="mobile-tab active">Siparişlerim</a>
          <a href="/addresses" className="mobile-tab">Adreslerim</a>
        </div>

        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div className="account-info-sidebar">
            <h1 className="account-info-title">Hesabım</h1>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item" onClick={() => navigate("/account-info")} style={{ cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                Hesap Bilgilerim
              </li>
              <li className="sidebar-menu-item active" onClick={() => { setSelectedOrder(null); }} style={{ cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                Siparişlerim
              </li>
              <li className="sidebar-menu-item" onClick={() => navigate("/addresses")} style={{ cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
                Adreslerim
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="account-info-content">
            {selectedOrder ? (
              // Sipariş Detay Görünümü
              <div className="order-detail-view">
                <button className="back-button" onClick={() => setSelectedOrder(null)}>
                  ← Siparişlerime Dön
                </button>

                <div className="order-detail-grid">
                  {/* Sol Kolon */}
                  <div className="order-detail-left">
                    <h1 className="order-detail-title">Sipariş {selectedOrder.status}</h1>
                    <p className="order-detail-info">
                      {selectedOrder.date} Tarihinde Sipariş Verildi - {selectedOrder.id} numaralı sipariş
                    </p>

                    <hr className="order-divider" />

                    {/* Ürünler */}
                    {selectedOrder.products.map((product) => (
                      <div key={product.id} className="order-product-item">
                        <div className="order-product-image">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="order-product-info">
                          <div className="order-product-name">
                            {product.name} x {product.quantity}
                          </div>
                          <div className="order-product-price">{product.price} TL</div>
                          <div className="order-product-size">Boyut: {product.size}</div>
                        </div>
                      </div>
                    ))}

                    <hr className="order-divider" />

                    <div className="order-shipping-footer">
                      <span className="shipping-company">{selectedOrder.shippingCompany}</span>
                      <span>Takip Numarası: {selectedOrder.trackingNumber}</span>
                    </div>
                  </div>

                  {/* Sağ Kolon */}
                  <div className="order-detail-right">
                    {/* Adres */}
                    <div className="order-detail-section">
                      <h2 className="order-section-title">Adres</h2>
                      <div className="order-section-content">
                        <strong>{selectedOrder.address.name}</strong>
                        <span className="address-line">{selectedOrder.address.line1}</span>
                        <span className="address-line">{selectedOrder.address.line2}</span>
                        <span className="address-line">{selectedOrder.address.line3}</span>
                      </div>
                    </div>

                    <hr className="order-divider-thin" />

                    {/* Ödeme */}
                    <div className="order-detail-section">
                      <h2 className="order-section-title">Ödeme</h2>
                      <div className="order-section-content">
                        <div>{selectedOrder.payment.method} - {selectedOrder.payment.amount} TL</div>
                        <div className="card-info">**** **** **** **{selectedOrder.payment.cardLast4}</div>
                      </div>
                    </div>

                    <hr className="order-divider-thin" />

                    {/* Özet */}
                    <div className="order-detail-section">
                      <h2 className="order-section-title">Özet</h2>

                      <div className="summary-row">
                        <span className="summary-label">Ara Toplam</span>
                        <span className="summary-value">{selectedOrder.summary.subtotal} TL</span>
                      </div>

                      <div className="summary-row">
                        <span className="summary-label">Kargo</span>
                        <span className="summary-value">{selectedOrder.summary.shipping} TL</span>
                      </div>

                      <div className="summary-row">
                        <span className="summary-label">Toplam Vergi</span>
                        <span className="summary-value">{selectedOrder.summary.tax} TL</span>
                      </div>

                      {selectedOrder.summary.discount > 0 && (
                        <div className="summary-row discount-row">
                          <span className="summary-label">{selectedOrder.summary.discountLabel}</span>
                          <span className="summary-value">- {selectedOrder.summary.discount} TL</span>
                        </div>
                      )}

                      <div className="summary-row total-row">
                        <span className="summary-label">Toplam</span>
                        <span className="summary-value">{selectedOrder.summary.total} TL</span>
                      </div>
                    </div>

                    <hr className="order-divider-thin" />

                    {/* Yardım */}
                    <div className="order-detail-section">
                      <h3 className="help-title">Yardıma mı ihtiyacın var?</h3>
                      <ul className="help-links">
                        <li><Link to="/faq">Sıkça Sorulan Sorular</Link></li>
                        <li><a href="#">Satış Sözleşmesi</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Sipariş Listesi Görünümü
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

                        <button
                          className="order-detail-button"
                          onClick={() => setSelectedOrder(order)}
                        >
                          Detayı Görüntüle
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer hideRatingSection={true} />
    </div>
  );
};

export default Orders;
