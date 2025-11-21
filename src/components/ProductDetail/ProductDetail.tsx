import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import BestSellers from "../BestSellers/BestSellers";
import ProductReviews from "../ProductReviews/ProductReviews";
import CartSidebar from "../Cart/CartSidebar";
import "./ProductDetail.css";
import wheyProteinImage from "../../assets/images/90824d0dc93a810b179e49b1b092f231efc186ee.jpg";

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="collapsible">
      <button
        type="button"
        className="collapsible__header"
        onClick={() => setOpen(!open)}
      >
        <span className="collapsible__title">{title}</span>
        <span
          className={`collapsible__icon${open ? " open" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <div className="collapsible__content">{children}</div>}
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const flavors = [
    { name: "Bisküvi", swatch: "#FFFFFF", outline: true },
    { name: "Çikolata", swatch: "#4B3B2B" },
    { name: "Muz", swatch: "#F5D657" },
    { name: "Salted Caramel", swatch: "#C58B52" },
    { name: "Choco Nut", swatch: "#5A3A28" },
    { name: "Hindistan Cevizi", swatch: "#D7D7CF" },
    { name: "Raspberry Cheesecake", swatch: "#EA5B7F" },
    { name: "Çilek", swatch: "#FF4B6A" },
  ];
  const [selectedFlavor, setSelectedFlavor] = useState<string>(flavors[0].name);

  type SizeOption = {
    key: string;
    label: string;
    servings: number;
    isDiscount?: boolean;
  };
  const sizeOptions: SizeOption[] = [
    { key: "400g", label: "400G", servings: 16 },
    { key: "1600g", label: "1.6KG", servings: 64 },
    { key: "3200g", label: "1.6KG X 2 ADET", servings: 128, isDiscount: true },
  ];
  const [selectedSize, setSelectedSize] = useState<string>(sizeOptions[0].key);

  const priceTRY = 549;
  const pricePerServingTRY = 34.31;

  return (
    <>
      <section className="product-detail">
        <div className="product-detail__grid">
          <div className="product-detail__gallery">
            <img
              src={wheyProteinImage}
              alt="Whey Protein"
              className="product-detail__image"
            />
          </div>
          <div className="product-detail__info">
            <h1 className="product-detail__title">WHEY PROTEIN</h1>
            <p className="product-detail__subtitle">
              EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
            </p>
            <div className="product-detail__rating">
              <RatingStars rating={5} />
              <span className="product-detail__reviews">10869 Yorum</span>
            </div>

            <div className="product-detail__section">
              <div className="product-detail__label">AROMA:</div>
              <div className="product-detail__flavors">
                {flavors.map((flavor) => (
                  <button
                    key={flavor.name}
                    type="button"
                    className={`flavor${
                      selectedFlavor === flavor.name ? " selected" : ""
                    }`}
                    onClick={() => setSelectedFlavor(flavor.name)}
                  >
                    <span
                      className="flavor__swatch"
                      style={{
                        backgroundColor: flavor.swatch,
                        boxShadow: flavor.outline
                          ? "inset 0 0 0 1px #e5e7eb"
                          : undefined,
                        border: flavor.outline
                          ? "1px solid #e5e7eb"
                          : undefined,
                      }}
                    />
                    <span className="flavor__name">{flavor.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail__section">
              <div className="product-detail__label">BOYUT:</div>
              <div className="product-detail__sizes">
                {sizeOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    className={`size${
                      selectedSize === opt.key ? " selected" : ""
                    }`}
                    onClick={() => setSelectedSize(opt.key)}
                  >
                    <div className="size__top">
                      {opt.isDiscount && (
                        <span className="size__discount">% İNDİRİM</span>
                      )}
                      <span className="size__label">{opt.label}</span>
                    </div>
                    <div className="size__servings">{opt.servings} servis</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail__price-row">
              <div className="product-detail__price">
                <span className="product-detail__price-current">
                  {priceTRY} TL
                </span>
              </div>
              <div className="product-detail__per-serving">
                {pricePerServingTRY} TL /Servis
              </div>
            </div>

            <div className="product-detail__cta-row">
              <div
                className="quantity-stepper"
                role="group"
                aria-label="Adet seçimi"
              >
                <button
                  type="button"
                  className="quantity-stepper__btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Azalt"
                >
                  –
                </button>
                <div className="quantity-stepper__value" aria-live="polite">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="quantity-stepper__btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Arttır"
                >
                  +
                </button>
              </div>

              <button
                className="product-detail__add-to-cart"
                onClick={() => setIsCartOpen(true)}
              >
                <span className="cart-icon" aria-hidden="true" />
                SEPETE EKLE
              </button>
              <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </div>

            <div className="product-detail__info-row">
              <div className="info-item">
                <span
                  className="info-icon info-icon--truck"
                  aria-hidden="true"
                />
                <div>
                  <div className="info-item__title">Aynı Gün</div>
                  <div className="info-item__subtitle">Ücretsiz Kargo</div>
                </div>
              </div>
              <div className="info-item">
                <span
                  className="info-icon info-icon--users"
                  aria-hidden="true"
                />
                <div>
                  <div className="info-item__title">750.000+</div>
                  <div className="info-item__subtitle">Mutlu Müşteri</div>
                </div>
              </div>
              <div className="info-item">
                <span
                  className="info-icon info-icon--shield"
                  aria-hidden="true"
                />
                <div>
                  <div className="info-item__title">100%</div>
                  <div className="info-item__subtitle">
                    Memnuniyet Garantisi
                  </div>
                </div>
              </div>
            </div>

            <div className="product-detail__expiry">
              Son Kullanma Tarihi: 07/2025
            </div>

            {/* Collapsible sections - desktop order unchanged; mobile order via CSS */}
            <div className="mobile-order mobile-order--features">
              <Collapsible title="ÖZELLİKLER">
                <ul className="product-detail__features">
                  <li>30g yüksek kaliteli protein</li>
                  <li>Düşük yağ ve karbonhidrat</li>
                  <li>BCAA ve glutamin desteği</li>
                </ul>
              </Collapsible>
            </div>

            <div className="mobile-order mobile-order--nutrition">
              <Collapsible title="BESİN İÇERİĞİ">
                <p className="product-detail__text">
                  Servis başı 30g protein, 2g yağ, 3g karbonhidrat içerir.
                </p>
              </Collapsible>
            </div>

            <div className="mobile-order mobile-order--usage">
              <Collapsible title="KULLANIM ŞEKLİ">
                <p className="product-detail__text">
                  1 ölçek (40g) ürünü 300ml su ya da süt ile karıştırarak
                  tüketiniz.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
      <BestSellers title="SON GÖRÜNTÜLENEN ÜRÜNLER" />
      <ProductReviews />
      <BestSellers title="ÇOK SATANLAR" />
      <nav className="breadcrumb">
        <Link to="/">OJS Nutrition</Link>
        <span className="separator">&gt;</span>
        <Link to="/protein">Protein</Link>
        <span className="separator">&gt;</span>
        <Link to="/protein/proteinler">PROTEİNLER</Link>
        <span className="separator">&gt;</span>
        <span className="current">WHEY PROTEIN</span>
      </nav>
    </>
  );
};

export default ProductDetail;
