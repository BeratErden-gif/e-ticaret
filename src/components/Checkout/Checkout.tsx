import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import logo from "../../assets/logo.svg";
import wheyProteinImage from "../../assets/images/90824d0dc93a810b179e49b1b092f231efc186ee.jpg";

interface Address {
  id: string;
  title: string;
  address: string;
  city: string;
  district: string;
  phone: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(true);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    addressTitle: "Ev",
    address: "Ahmet Mh. Mehmetoğlu Sk. No: 1 Daire: 2",
    city: "İstanbul",
    district: "Ataşehir",
    phone: "+90 537 265 80 23",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingAddressId) {
      // Update existing address
      setAddresses(prev => prev.map(addr =>
        addr.id === editingAddressId
          ? {
              ...addr,
              title: formData.addressTitle,
              address: formData.address,
              city: formData.city,
              district: formData.district,
              phone: formData.phone,
            }
          : addr
      ));
      setSelectedAddressId(editingAddressId);
    } else {
      // Add new address
      const newAddress: Address = {
        id: Date.now().toString(),
        title: formData.addressTitle,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        phone: formData.phone,
      };
      setAddresses(prev => [...prev, newAddress]);
      setSelectedAddressId(newAddress.id);
    }

    setIsEditing(false);
    setEditingAddressId(null);
  };

  const handleEditAddress = (address: Address) => {
    setFormData({
      addressTitle: address.title,
      address: address.address,
      city: address.city,
      district: address.district,
      phone: address.phone,
    });
    setEditingAddressId(address.id);
    setIsEditing(true);
  };

  const handleNewAddress = () => {
    setFormData({
      addressTitle: "",
      address: "",
      city: "",
      district: "",
      phone: "+90 ",
    });
    setEditingAddressId(null);
    setIsEditing(true);
  };

  const handleDeleteAddress = () => {
    if (editingAddressId) {
      setAddresses(prev => prev.filter(addr => addr.id !== editingAddressId));
      if (selectedAddressId === editingAddressId) {
        setSelectedAddressId(addresses.length > 1 ? addresses[0].id : null);
      }
    }
    setIsEditing(false);
    setEditingAddressId(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingAddressId(null);
  };

  return (
    <div className="checkout-container">
      {/* Left Column */}
      <div className="checkout-content">
        <div className="checkout-top">
          <div className="checkout-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="OJS Nutrition" />
          </div>
          <div className="user-info">
            <div className="user-name">İsim Soyisim</div>
            <div className="user-email">isimsoyisim@mail.com</div>
          </div>
        </div>

        {/* Address Section */}
        <div className="checkout-section">
          <div className="section-header">
            <span className="section-number">1</span>
            <span className="section-title">Adres</span>
          </div>

          {isEditing ? (
            <>
              <div className="form-header">
                <div className="form-title">{editingAddressId ? "Adres Düzenle" : "Yeni Adres"}</div>
                {addresses.length > 0 && (
                  <a href="#" className="cancel-link" onClick={(e) => { e.preventDefault(); handleCancel(); }}>Vazgeç</a>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Adres Başlığı</label>
                  <input
                    type="text"
                    className="form-input"
                    name="addressTitle"
                    value={formData.addressTitle}
                    onChange={handleInputChange}
                    placeholder="Ev, Ofis, vb."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Adres</label>
                  <input
                    type="text"
                    className="form-input"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Mahalle, Sokak, No, Daire"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">İl</label>
                    <input
                      type="text"
                      className="form-input"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="İl"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">İlçe</label>
                    <input
                      type="text"
                      className="form-input"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      placeholder="İlçe"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Telefon</label>
                  <div className="phone-input-wrapper">
                    <div className="phone-flag"></div>
                    <input
                      type="tel"
                      className="form-input"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                </div>

                <div className="button-group">
                  {editingAddressId && (
                    <button type="button" className="btn btn-delete" onClick={handleDeleteAddress}>
                      Adresi Sil
                    </button>
                  )}
                  <button type="submit" className={`btn btn-save ${!editingAddressId ? 'full-width' : ''}`}>
                    Kaydet
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="section-subtitle">Teslimat Adresi</div>

              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`address-card ${selectedAddressId === address.id ? "selected" : ""}`}
                  onClick={() => setSelectedAddressId(address.id)}
                >
                  <div className="address-header">
                    <div className="address-type">
                      <span className="radio-icon"></span>
                      {address.title}
                    </div>
                    <a
                      href="#"
                      className="edit-link"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleEditAddress(address);
                      }}
                    >
                      Düzenle
                    </a>
                  </div>
                  <div className="address-text">
                    {address.address}, {address.district}, {address.city}, Türkiye
                  </div>
                </div>
              ))}

              <div className="address-card new-address" onClick={handleNewAddress}>
                <div className="address-header">
                  <div className="address-type">
                    <span className="radio-icon"></span>
                    Yeni Adres
                  </div>
                </div>
              </div>

              <button className="continue-btn">Kargo ile Devam Et</button>
            </>
          )}
        </div>

        {/* Shipping Section */}
        <div className="checkout-section inactive">
          <div className="section-header">
            <span className="section-number">2</span>
            <span className="section-title">Kargo</span>
          </div>
        </div>

        {/* Payment Section */}
        <div className="checkout-section inactive">
          <div className="section-header">
            <span className="section-number">3</span>
            <span className="section-title">Ödeme</span>
          </div>
        </div>
      </div>

      {/* Right Column - Cart Summary */}
      <div className="cart-summary">
        <div className="summary-cart-item">
          <div className="item-image-wrapper">
            <img src={wheyProteinImage} alt="Whey Protein" className="item-image" />
            <span className="item-badge">2</span>
          </div>
          <div className="item-details">
            <div className="item-name">WHEY PROTEIN</div>
            <div className="item-variant">Çilek / 400g</div>
          </div>
          <div className="item-price">1,098 TL</div>
        </div>

        <div className="summary-cart-item">
          <div className="item-image-wrapper">
            <img src={wheyProteinImage} alt="Arginine" className="item-image" />
            <span className="item-badge">2</span>
          </div>
          <div className="item-details">
            <div className="item-name">ARGININE</div>
            <div className="item-variant">120g</div>
          </div>
          <div className="item-price">458 TL</div>
        </div>

        <div className="subtotal-section">
          <div className="subtotal-row">
            <span className="subtotal-label">
              Ara Toplam
              <span className="info-icon">?</span>
            </span>
            <span>1,675 TL</span>
          </div>
        </div>

        <div className="total-section">
          <span className="total-label">Toplam</span>
          <span className="total-amount">1,556 TL</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
