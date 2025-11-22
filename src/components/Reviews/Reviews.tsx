import React, { useState } from "react";
import "./Reviews.css";

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      content:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      content:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      content:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      content:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h2 className="reviews-title">GERÇEK MÜŞTERİ YORUMLARI</h2>
        <div className="reviews-right">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.92155 6.51982L0.775554 7.20115C0.553887 7.22798 0.357887 7.37615 0.284387 7.60132C0.210887 7.82648 0.284387 8.06098 0.447721 8.20915C2.27472 9.87632 5.01989 12.373 5.01989 12.373C5.01755 12.373 4.26622 16.0048 3.76689 18.428C3.74309 18.5377 3.75169 18.6519 3.79165 18.7568C3.83161 18.8616 3.90121 18.9526 3.99196 19.0186C4.08271 19.0847 4.1907 19.1229 4.30278 19.1286C4.41487 19.1344 4.5262 19.1074 4.62322 19.051C6.77455 17.8283 9.99689 15.9896 9.99689 15.9896L15.3682 19.0521C15.5642 19.1595 15.8092 19.1572 15.9994 19.0183C16.0899 18.9523 16.1594 18.8617 16.1998 18.7572C16.2401 18.6527 16.2495 18.5388 16.2269 18.4291L14.9774 12.373L19.5496 8.21265C19.6324 8.13733 19.6917 8.03973 19.7204 7.93156C19.7492 7.82338 19.7462 7.70921 19.7117 7.60271C19.6772 7.49622 19.6128 7.40192 19.5261 7.33111C19.4394 7.26031 19.3341 7.216 19.2229 7.20348C16.7636 6.92815 13.0757 6.51982 13.0757 6.51982L10.5289 0.884817C10.4827 0.782906 10.4081 0.696465 10.3141 0.635838C10.22 0.575211 10.1105 0.542969 9.99864 0.542969C9.88675 0.542969 9.77723 0.575211 9.68319 0.635838C9.58915 0.696465 9.51457 0.782906 9.46839 0.884817L6.92155 6.51982Z"
                  fill="#FDD835"
                />
              </svg>
            ))}
          </div>
          <span className="review-count">198453 Yorum</span>
          <div className="nav-buttons">
            <button className="nav-button prev" aria-label="Önceki" onClick={handlePrev}>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path d="M9 1L1 9L9 17" stroke="#56575F" strokeWidth="2" />
              </svg>
            </button>
            <button className="nav-button next" aria-label="Sonraki" onClick={handleNext}>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path d="M1 1L9 9L1 17" stroke="#56575F" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop görünüm - tüm yorumlar */}
      <div className="reviews-list desktop-reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <span className="review-date">{review.date}</span>
            <h3 className="review-title">{review.title}</h3>
            <p className="review-content">{review.content}</p>
          </div>
        ))}
      </div>

      {/* Mobil görünüm - tek yorum slider */}
      <div className="reviews-slider mobile-reviews">
        <div className="review-card">
          <span className="review-date">{reviews[currentIndex].date}</span>
          <h3 className="review-title">{reviews[currentIndex].title}</h3>
          <p className="review-content">{reviews[currentIndex].content}</p>
        </div>
        <div className="slider-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
