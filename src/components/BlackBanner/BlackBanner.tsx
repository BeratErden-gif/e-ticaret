import React from "react";
import "./BlackBanner.css";

const BlackBanner: React.FC = () => {
  return (
    <div className="black-banner">
      <div className="banner-content">
        <div className="banner-left">
          <div className="rating-group">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.92155 6.51982L0.775554 7.20115C0.553887 7.22798 0.357887 7.37615 0.284387 7.60132C0.210887 7.82648 0.284387 8.06098 0.447721 8.20915C2.27472 9.87632 5.01989 12.373 5.01989 12.373C5.01755 12.373 4.26622 16.0048 3.76689 18.428C3.74309 18.5377 3.75169 18.6519 3.79165 18.7568C3.83161 18.8616 3.90121 18.9526 3.99196 19.0186C4.08271 19.0847 4.1907 19.1229 4.30278 19.1286C4.41487 19.1344 4.5262 19.1074 4.62322 19.051C6.77455 17.8283 9.99689 15.9896 9.99689 15.9896L15.3682 19.0521C15.5642 19.1595 15.8092 19.1572 15.9994 19.0183C16.0899 18.9523 16.1594 18.8617 16.1998 18.7572C16.2401 18.6527 16.2495 18.5388 16.2269 18.4291L14.9774 12.373L19.5496 8.21265C19.6324 8.13733 19.6917 8.03973 19.7204 7.93156C19.7492 7.82338 19.7462 7.70921 19.7117 7.60271C19.6772 7.49622 19.6128 7.40192 19.5261 7.33111C19.4394 7.26031 19.3341 7.216 19.2229 7.20348C16.7636 6.92815 13.0757 6.51982 13.0757 6.51982L10.5289 0.884817C10.4827 0.782906 10.4081 0.696465 10.3141 0.635838C10.22 0.575211 10.1105 0.542969 9.99864 0.542969C9.88675 0.542969 9.77723 0.575211 9.68319 0.635838C9.58915 0.696465 9.51457 0.782906 9.46839 0.884817L6.92155 6.51982Z"
                    fill="#FDD835"
                  />
                </svg>
              ))}
            </div>
            <span className="rating-count">(140.000+)</span>
          </div>
          <h2 className="banner-title">
            LABORATUVAR TESTLİ ÜRÜNLER
            <br />
            AYNI GÜN & ÜCRETSİZ KARGO
            <br />
            MEMNUNİYET GARANTİSİ
          </h2>
        </div>
        <div className="banner-description">
          200.000'den fazla ürün yorumumuza dayanarak,
          <br />
          ürünlerimizi seveceğinize eminiz. Eğer herhangi
          <br />
          bir sebeple memnun kalmazsan, bizimle iletişime
          <br />
          geçtiğinde çözüme kavuşturacağız.
        </div>
      </div>
    </div>
  );
};

export default BlackBanner;
