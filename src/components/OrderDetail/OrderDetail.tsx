import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrderDetail.css";
import wheyProteinImage from "../../assets/images/90824d0dc93a810b179e49b1b092f231efc186ee.jpg";

const OrderDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Örnek sipariş verisi (gerçek uygulamada API'den gelecek)
  const order = {
    id: id || "290405",
    status: "Teslim Edildi",
    date: "14 Aralık 2022",
    shippingCompany: "hepsiJet",
    trackingNumber: "HJZ192904051",
    products: [
      {
        id: 1,
        name: "MELATONIN",
        quantity: 2,
        price: 62,
        size: "1 KUTU",
        image: wheyProteinImage,
      },
      {
        id: 2,
        name: "GÜNLÜK VİTAMİN PAKETİ",
        quantity: 1,
        price: 449,
        size: "1 Paket x 2 Adet",
        image: wheyProteinImage,
      },
      {
        id: 3,
        name: "BROMELAIN",
        quantity: 1,
        price: 197,
        size: "1 KUTU x 2 Adet",
        image: wheyProteinImage,
      },
    ],
    address: {
      name: "Uğur İLTER",
      line1: "Barbaros, Nidakule Ataşehir Batı,",
      line2: "Begonya Sk. No: 1/2, 34746",
      line3: "Ataşehir/İstanbul",
    },
    payment: {
      method: "Kredi Kartı",
      amount: 770,
      cardLast4: "61",
    },
    summary: {
      subtotal: 856,
      shipping: 0,
      tax: 8,
      discount: 86,
      discountLabel: "Yüzde 10 indirim!",
      total: 770,
    },
  };

  return (
    <div className="order-detail-container">
      {/* Left Column */}
      <div className="order-details">
        <button className="back-button" onClick={() => navigate("/orders")}>
          ← Siparişlerime Dön
        </button>

        <h1 className="page-title">Sipariş {order.status}</h1>
        <p className="order-info">
          {order.date} Tarihinde Sipariş Verildi - {order.id} numaralı sipariş
        </p>

        <hr className="divider" />

        {/* Products */}
        {order.products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <div className="product-name">
                {product.name} x {product.quantity}
              </div>
              <div className="product-price">{product.price} TL</div>
              <div className="product-size">Boyut: {product.size}</div>
            </div>
          </div>
        ))}

        <hr className="divider" />

        <div className="order-footer">
          <span className="shipping-company">{order.shippingCompany}</span>
          <span>Takip Numarası: {order.trackingNumber}</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="sidebar">
        {/* Address */}
        <div className="section">
          <h2 className="section-title">Adres</h2>
          <div className="section-content">
            <strong>{order.address.name}</strong>
            <span className="address-line">{order.address.line1}</span>
            <span className="address-line">{order.address.line2}</span>
            <span className="address-line">{order.address.line3}</span>
          </div>
        </div>

        <hr className="divider-thin" />

        {/* Payment */}
        <div className="section">
          <h2 className="section-title">Ödeme</h2>
          <div className="section-content">
            <div>
              {order.payment.method} - {order.payment.amount} TL
            </div>
            <div className="card-info">**** **** **** **{order.payment.cardLast4}</div>
          </div>
        </div>

        <hr className="divider-thin" />

        {/* Summary */}
        <div className="section">
          <h2 className="section-title">Özet</h2>

          <div className="summary-row">
            <span className="summary-label">Ara Toplam</span>
            <span className="summary-value">{order.summary.subtotal} TL</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Kargo</span>
            <span className="summary-value">{order.summary.shipping} TL</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Toplam Vergi</span>
            <span className="summary-value">{order.summary.tax} TL</span>
          </div>

          <div className="summary-row discount-row">
            <span className="summary-label">{order.summary.discountLabel}</span>
            <span className="summary-value">- {order.summary.discount} TL</span>
          </div>

          <div className="summary-row total-row">
            <span className="summary-label">Toplam</span>
            <span className="summary-value">{order.summary.total} TL</span>
          </div>
        </div>

        <hr className="divider-thin" />

        {/* Help */}
        <div className="section">
          <h3 className="help-title">Yardıma mı ihtiyacın var?</h3>
          <ul className="help-links">
            <li>
              <a href="/faq">Sıkça Sorulan Sorular</a>
            </li>
            <li>
              <a href="#">Satış Sözleşmesi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
