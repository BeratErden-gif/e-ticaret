import React from "react";
import "./ProductReviews.css";

const ProductReviews: React.FC = () => {
  const rating = 4.8;
  const total = 10869;
  const breakdown = [
    { stars: 5, count: 6584 },
    { stars: 4, count: 2702 },
    { stars: 3, count: 1251 },
    { stars: 2, count: 228 },
    { stars: 1, count: 104 },
  ];

  const reviews = new Array(10).fill(0).map((_, i) => ({
    author: [
      "EREN U.",
      "Bahadır K.",
      "Burhan K.",
      "Berke Ç.",
      "Deniz C.",
      "Burak B.",
      "Fatih K.",
      "Berk Y.",
      "Esat S.",
      "Egemen B.",
    ][i],
    title: [
      "Her zamanki kalite. Teşekkürler",
      "En iyi aroma",
      "Yıllardır en beğendiğim protein tozu",
      "Beğendim.",
      "Çok iyi tat",
      "Tadı harika, kesinlikle tavsiye ederim",
      "Fatih kaya",
      "Gayet beğendim ve sürekli olarak",
      "Çok iyi üründen memnun oldum",
      "Harika",
    ][i],
    content: [
      "Her zamanki kalite. Teşekkürler",
      "En iyi aroma",
      "Yıllardır en beğendiğim protein tozu gerçekten iyi ve kalitesi yüksek olsada",
      "Beğendim.",
      "Çok iyi tat",
      "Tadı harika, kesinlikle tavsiye ederim",
      "Çikolatalı ve raspberry cheesecake tadı aynı işi temiz aromasız gelmedi",
      "Gayet beğendim ve sürekli olarak kullanıyorum.",
      "çok iyi üründen memnun oldum",
      "Ben gayet iyi buldum, devamını diliyorum.",
    ][i],
    date: i === 9 ? "04/05/24" : "06/05/24",
    stars: 5,
  }));

  const maxCount = Math.max(...breakdown.map((b) => b.count));

  return (
    <section className="product-reviews">
      <div className="product-reviews__summary">
        <div className="summary-left">
          <div className="summary-rating">{rating}</div>
          <div className="summary-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star" />
            ))}
          </div>
          <div className="summary-total">{total} YORUM</div>
          <button className="summary-chip" type="button">
            YORUM ({total})
          </button>
        </div>
        <div className="summary-right">
          {breakdown.map((b) => (
            <div key={b.stars} className="bar-row">
              <span className="bar-row__stars">{b.stars}★</span>
              <div className="bar">
                <div
                  className="bar__fill"
                  style={{ width: `${(b.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="bar-row__count">{b.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="product-reviews__list">
        {reviews.map((r, idx) => (
          <article key={idx} className="review-item">
            <div className="review-item__left">
              <div className="stars-inline">
                {[...Array(r.stars)].map((_, i) => (
                  <span key={i} className="star" />
                ))}
              </div>
              <div className="review-author">{r.author}</div>
              <h3 className="review-title">{r.title}</h3>
              <p className="review-content">{r.content}</p>
            </div>
            <div className="review-date">{r.date}</div>
          </article>
        ))}
      </div>

      <div className="product-reviews__pagination">
        {"<"} 1 2 3 4 5 6 7 8 9 {">"}
      </div>
    </section>
  );
};

export default ProductReviews;
