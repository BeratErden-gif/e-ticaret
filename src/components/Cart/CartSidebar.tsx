import React from "react";
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
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <div className="w-[200px] h-[200px] mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  className="w-full h-full"
                >
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-400 mb-2">
                Sepetinizde Ürün Bulunmamaktadır
              </h3>
              <p className="text-gray-400">
                Sepetiniz boş görünüyor. Hemen alışverişe başlayın!
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
          {!isEmpty && (
            <>
              <div className="cart-sidebar-total">
                <span>TOPLAM</span>
                <span className="cart-sidebar-total-amount">549 TL</span>
              </div>
              <button className="cart-sidebar-checkout">DEVAM ET</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
