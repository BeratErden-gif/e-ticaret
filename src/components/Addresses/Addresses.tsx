import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "./Addresses.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";

type Address = {
  id: number;
  title: string;
  name: string;
  surname: string;
  address: string;
  city: string;
  district: string;
  phone: string;
};

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

const Addresses: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const addresses: Address[] = [
    {
      id: 1,
      title: "Ev",
      name: "Ahmet",
      surname: "Mehmetoğlu",
      address: "Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2",
      city: "İstanbul",
      district: "Ataşehir",
      phone: "+90 555 555 55 55",
    },
    {
      id: 2,
      title: "Ofis",
      name: "Ahmet",
      surname: "Mehmetoğlu",
      address: "Ayşe Mah. Fatmaoğlu Cad., No: 4 D: 4",
      city: "İstanbul",
      district: "Ataşehir",
      phone: "+90 555 555 55 55",
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

      <div className="addresses-container">
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div className="addresses-sidebar">
            <h1 className="addresses-title">Hesabım</h1>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <a
                  href="/account-info"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Hesap Bilgilerim
                </a>
              </li>
              <li className="sidebar-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                Siparişlerim
              </li>
              <li className="sidebar-menu-item active">
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
          <div className="addresses-content">
            <div className="addresses-form">
              <div className="addresses-header">
                <h2>
                  Adreslerim{" "}
                  <span className="addresses-count">({addresses.length})</span>
                </h2>
                <button
                  className="add-address-button"
                  onClick={() => setShowForm(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 0V16M0 8H16"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Yeni adres ekle
                </button>
              </div>

              {showForm ? (
                <>
                  <form>
                    <div className="form-group">
                      <label>*Adres Başlığı</label>
                      <input type="text" placeholder="ev, iş vb..." />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>*Ad</label>
                        <input type="text" />
                      </div>
                      <div className="form-group">
                        <label>*Soyad</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>*Adres</label>
                      <input type="text" />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>*Şehir</label>
                        <input type="text" />
                      </div>
                      <div className="form-group">
                        <label>*İlçe</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>*Telefon</label>
                      <div className="phone-input">
                        <select>
                          <option value="+90">🇹🇷 +90</option>
                        </select>
                        <input type="tel" defaultValue="+90" />
                      </div>
                    </div>

                    <button type="submit" className="save-button">
                      Kaydet
                    </button>
                  </form>
                </>
              ) : (
                <div className="address-cards">
                  {addresses.map((address) => (
                    <div key={address.id} className="address-card">
                      <h3 className="address-title">{address.title}</h3>
                      <p className="address-text">
                        {address.address}, {address.district}, {address.city},
                        Türkiye
                      </p>
                      <div className="address-actions">
                        <button className="address-action">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M2 4H14M6 4V2H10V4M8 6V12M5 6L5.5 12M11 6L10.5 12M3 4L4 14H12L13 4"
                              stroke="currentColor"
                            />
                          </svg>
                          Sil
                        </button>
                        <button className="address-action">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M11.5 2L14 4.5L5 13.5L2 14L2.5 11L11.5 2Z"
                              stroke="currentColor"
                            />
                          </svg>
                          Adresi Düzenle
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
