import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Header/Header.css";
import "./Addresses.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";

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

const initialAddresses: Address[] = [
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

const Addresses: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<Omit<Address, 'id'>>({
    title: '',
    name: '',
    surname: '',
    address: '',
    city: '',
    district: '',
    phone: '',
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleDeleteClick = (id: number) => {
    setAddressToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (addressToDelete !== null) {
      setAddresses(addresses.filter(addr => addr.id !== addressToDelete));
    }
    setDeleteModalOpen(false);
    setAddressToDelete(null);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setAddressToDelete(null);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      title: address.title,
      name: address.name,
      surname: address.surname,
      address: address.address,
      city: address.city,
      district: address.district,
      phone: address.phone,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      // Düzenleme
      setAddresses(addresses.map(addr =>
        addr.id === editingAddress.id
          ? { ...formData, id: editingAddress.id }
          : addr
      ));
    } else {
      // Yeni ekleme
      const newId = Math.max(...addresses.map(a => a.id), 0) + 1;
      setAddresses([...addresses, { ...formData, id: newId }]);
    }
    setShowForm(false);
    setEditingAddress(null);
    setFormData({
      title: '',
      name: '',
      surname: '',
      address: '',
      city: '',
      district: '',
      phone: '',
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingAddress(null);
    setFormData({
      title: '',
      name: '',
      surname: '',
      address: '',
      city: '',
      district: '',
      phone: '',
    });
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

      <div className="addresses-container">
        {/* Mobile Tab Navigation */}
        <div className="mobile-account-tabs">
          <a href="/account-info" className="mobile-tab">Hesap Bilgilerim</a>
          <a href="/orders" className="mobile-tab">Siparişlerim</a>
          <a href="/addresses" className="mobile-tab active">Adreslerim</a>
        </div>

        <div className="addresses-layout">
          {/* Sidebar */}
          <div className="addresses-sidebar">
            <h1 className="addresses-title">Hesabım</h1>
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
              <li className="sidebar-menu-item" onClick={() => navigate("/orders")} style={{ cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                Siparişlerim
              </li>
              <li className="sidebar-menu-item active" style={{ cursor: "pointer" }}>
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
                  <h1 className="create-address-title">
                    {editingAddress ? 'Adresi Düzenle' : 'Adres Oluştur'}
                  </h1>

                  {!editingAddress && (
                    <div className="info-box">
                      Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label><span className="required">*</span>Adres Başlığı</label>
                        <input
                          type="text"
                          placeholder="ev, iş vb..."
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group empty-group"></div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label><span className="required">*</span>Ad</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label><span className="required">*</span>Soyad</label>
                        <input
                          type="text"
                          value={formData.surname}
                          onChange={(e) => setFormData({...formData, surname: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label><span className="required">*</span>Adres</label>
                      <textarea
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required
                      ></textarea>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Şehir</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label><span className="required">*</span>İlçe</label>
                        <input
                          type="text"
                          value={formData.district}
                          onChange={(e) => setFormData({...formData, district: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Telefon</label>
                      <div className="phone-wrapper">
                        <div className="country-selector">
                          <span className="flag">🇹🇷</span>
                          <span className="dropdown-icon">▼</span>
                        </div>
                        <span className="country-code">+90</span>
                        <input
                          type="tel"
                          placeholder=""
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="button" className="cancel-button" onClick={handleCancel}>
                        İptal
                      </button>
                      <button type="submit" className="save-button">
                        {editingAddress ? 'Güncelle' : 'Kaydet'}
                      </button>
                    </div>
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
                        <button className="address-action" onClick={() => handleDeleteClick(address.id)}>
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
                        <button className="address-action" onClick={() => handleEdit(address)}>
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

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="delete-modal-overlay" onClick={handleDeleteCancel}>
          <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Adresi Sil</h3>
            <p>Bu adresi silmek istediğinizden emin misiniz?</p>
            <div className="delete-modal-actions">
              <button className="delete-modal-cancel" onClick={handleDeleteCancel}>
                İptal
              </button>
              <button className="delete-modal-confirm" onClick={handleDeleteConfirm}>
                Sil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer hideRatingSection={true} />
    </div>
  );
};

export default Addresses;
