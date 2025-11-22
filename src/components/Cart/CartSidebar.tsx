import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";
import wheyProteinImage from "../../assets/images/90824d0dc93a810b179e49b1b092f231efc186ee.jpg";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isEmpty?: boolean;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  isEmpty = false,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {isOpen && <div className="cart-sidebar-overlay" onClick={onClose} />}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2 className="text-xl font-medium">SEPETİM</h2>
          <button onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar-content">
          {isEmpty ? (
            <div className="empty-cart-content">
              <p className="empty-cart-message">
                Sepetinizde Ürün Bulunmamaktadır
              </p>
            </div>
          ) : (
            <div className="cart-item">
              <img
                src={wheyProteinImage}
                alt="Whey Protein"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3 className="cart-item-title">WHEY PROTEIN</h3>
                <p className="cart-item-variant">Çikolata</p>
                <p className="cart-item-variant">400g</p>
                <div className="cart-item-quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              <div className="cart-item-price">549 TL</div>
            </div>
          )}
        </div>

        <div className="cart-sidebar-footer">
          <div className="cart-sidebar-total">
            {isEmpty ? (
              <span className="cart-sidebar-total-amount-right">TOPLAM 0 TL</span>
            ) : (
              <>
                <span>TOPLAM</span>
                <span className="cart-sidebar-total-amount">549 TL</span>
              </>
            )}
          </div>
          <button className="cart-sidebar-checkout" onClick={handleCheckout}>
            DEVAM ET
            <span className="play-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
