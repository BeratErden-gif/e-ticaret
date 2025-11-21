import React from "react";
import { Link } from "react-router-dom";
import "./BestSellers.css";
import tumunuGor from "../../assets/images.2/Ekran Resmi 2025-08-19 17.55.50.png";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
}

interface Props {
  title?: string;
  hideViewAll?: boolean;
  isHomePage?: boolean;
}

const BestSellers: React.FC<Props> = ({
  title = "ÇOK SATANLAR",
  hideViewAll = false,
  isHomePage = false,
}) => {
  const products: Product[] = [
    {
      id: 1,
      title: "WHEY PROTEIN",
      description: "EN ÇOK TERCİH EDİLEN\nPROTEİN TAKVİYESİ",
      image: "/src/assets/images.2/WHEY PROTEIN.jpg",
      price: 549,
      oldPrice: 717,
      rating: 5,
      reviewCount: 10869,
      discount: 23,
    },
    {
      id: 2,
      title: "FITNESS PAKETI",
      description: "EN POPÜLER ÜRÜNLER\nBİR ARADA",
      image: "/src/assets/images.2/FITNESS PAKET.jpg",
      price: 799,
      oldPrice: 1128,
      rating: 5,
      reviewCount: 7650,
      discount: 29,
    },
    {
      id: 3,
      title: "GÜNLÜK VİTAMİN PAKETİ",
      description: "EN SIK TÜKETİLEN\nTAKVİYELER",
      image: "/src/assets/images.2/günlük vitamin paketi.jpg",
      price: 549,
      oldPrice: 717,
      rating: 5,
      reviewCount: 5013,
    },
    {
      id: 4,
      title: "PRE-WORKOUT SUPREME",
      description: "ANTRENMANDAN ÖNCE\nTAKVİYESİ",
      image: "/src/assets/images.2/PRE-WORKOUT SUPREME.jpg",
      price: 399,
      rating: 5,
      reviewCount: 6738,
    },
    {
      id: 5,
      title: "CREAM OF RICE",
      description: "EN LEZZETLİ\nPİRİNÇ KREMASI",
      image: "/src/assets/images.2/cream of rice.jpg",
      price: 239,
      rating: 5,
      reviewCount: 5216,
    },
    {
      id: 6,
      title: "CREATINE",
      description: "EN POPÜLER\nSPORCU TAKVİYESİ",
      image: "/src/assets/images.2/cratıne2.jpg",
      price: 239,
      rating: 5,
      reviewCount: 8558,
    },
  ];

  return (
    <section className="best-sellers">
      <h2 className="section-title">{title}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              {product.discount && (
                <div className="discount-badge">
                  <span className="discount-percent">%{product.discount}</span>
                  <span className="discount-text">İNDİRİM</span>
                </div>
              )}
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </Link>
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 0L10.2571 5.42857L16 6.28571L12 10.5143L12.9143 16L8 13.4286L3.08571 16L4 10.5143L0 6.28571L5.74286 5.42857L8 0Z"
                      fill={i < product.rating ? "#FFD700" : "#D9D9D9"}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <a href="#" className="product-reviews">
              {product.reviewCount} Yorum
            </a>
            <div className="product-price">
              <span className="current-price">{product.price} TL</span>
              {product.oldPrice && (
                <span className="old-price">{product.oldPrice} TL</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {title === "ÇOK SATANLAR" && !hideViewAll && (
        <div className="view-all">
          <Link to="/products">
            {isHomePage ? (
              <img
                src={tumunuGor}
                alt="Tümünü Gör"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              "TÜMÜNÜ GÖR"
            )}
          </Link>
        </div>
      )}
    </section>
  );
};

export default BestSellers;
