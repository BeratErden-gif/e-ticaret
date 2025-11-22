import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Header/Header.css";
import "./FAQ.css";
import logo from "../../assets/logo.svg";
import CartSidebar from "../Cart/CartSidebar";
import InfoBar from "../InfoBar/InfoBar";
import Footer from "../Footer/Footer";
import type { FAQItem } from "../../types/faq";

const navLinks = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "TÜM ÜRÜNLER",
];

const tabs = ["Genel", "Ürünler", "Kargo"] as const;

const mockFAQs: FAQItem[] = [
  {
    id: 1,
    question: "OJS Nutrition ürünlerinin menşei neresi?",
    answer: "OJS Nutrition ürünleri Türkiye'de üretilmektedir.",
    category: "Genel",
  },
  {
    id: 2,
    question: "Hangi sertifikalarınız var?",
    answer: "ISO 9001, HACCP ve GMP sertifikalarına sahibiz.",
    category: "Genel",
  },
  {
    id: 3,
    question: "Satılan ürünler garantili midir? Değişim var mı?",
    answer:
      "Tüm ürünlerimiz 2 yıl garantilidir ve 14 gün içinde iade hakkı sunuyoruz.",
    category: "Genel",
  },
  {
    id: 4,
    question: "Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?",
    answer: "Müşteri hizmetlerimiz ile iletişime geçebilirsiniz.",
    category: "Genel",
  },
  {
    id: 5,
    question: "OJS Nutrition ürünleri nerede satılıyor?",
    answer: "Online mağazamız ve yetkili bayilerimizde satılmaktadır.",
    category: "Ürünler",
  },
  {
    id: 6,
    question: "Yüksek proteinli ürünleri kimler kullanabilir?",
    answer: "18 yaş üstü sağlıklı bireyler kullanabilir.",
    category: "Ürünler",
  },
  {
    id: 7,
    question: "Taksit seçeneği neden yok?",
    answer: "Şu an için taksit seçeneğimiz bulunmamaktadır.",
    category: "Genel",
  },
  {
    id: 8,
    question: "Siparişimi nasıl iptal edebilirim?",
    answer: "Hesabım > Siparişlerim bölümünden iptal edebilirsiniz.",
    category: "Kargo",
  },
  {
    id: 9,
    question:
      "Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?",
    answer: "Bu durumda ürünü teslim almayınız ve bize bildiriniz.",
    category: "Ürünler",
  },
  {
    id: 10,
    question: "Sattığınız ürünler ilaç mıdır?",
    answer: "Hayır, ürünlerimiz gıda takviyesidir.",
    category: "Ürünler",
  },
  {
    id: 11,
    question: "Siparişimi teslim alırken nelere dikkat etmeliyim?",
    answer: "Paket hasarı ve ürün mührünü kontrol ediniz.",
    category: "Kargo",
  },
  {
    id: 12,
    question: "Kapıda ödeme hizmetiniz var mı?",
    answer: "Evet, kapıda kredi kartı ve nakit ödeme yapabilirsiniz.",
    category: "Kargo",
  },
  {
    id: 13,
    question: "Sipariş takibimi nasıl yapabilirim?",
    answer: "Hesabım > Siparişlerim bölümünden takip edebilirsiniz.",
    category: "Kargo",
  },
  {
    id: 14,
    question:
      "İptal ve iade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır?",
    answer: "İade onayından sonra 3-5 iş günü içinde iade yapılır.",
    category: "Kargo",
  },
];

const FAQ: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Genel");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // API'den veri çekme simülasyonu
    const fetchFAQs = async () => {
      try {
        // Gerçek API çağrısı burada yapılacak
        // const response = await fetch('API_URL/faqs');
        // const data = await response.json();

        // Şimdilik mock veriyi kullanıyoruz
        setTimeout(() => {
          setFaqs(mockFAQs);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("FAQs yüklenirken hata oluştu:", error);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => faq.category === activeTab);

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

      {/* FAQ Content */}
      <div className="faq-container">
        {/* Tabs */}
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="faq-content">
          <h3 className="faq-title">{activeTab.toUpperCase()}</h3>
          {loading ? (
            <div className="text-center py-8">Yükleniyor...</div>
          ) : (
            <div className="faq-list">
              {filteredFAQs.map((faq, i) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openIndex === i ? "open" : ""}`}
                  onClick={() => toggleQuestion(i)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-toggle">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === i && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h1>Bize Ulaşın</h1>
        <p>Bize aşağıdaki iletişim ulaşabilirsiniz.</p>

        <div className="form-row">
          <input type="text" className="form-input" placeholder="İsim *" />
          <input type="text" className="form-input" placeholder="Soyad" />
        </div>

        <input
          type="email"
          className="form-input"
          placeholder="E-Posta"
          style={{ width: "100%", marginBottom: "20px", boxSizing: "border-box" }}
        />

        <textarea className="form-textarea" placeholder="Mesaj"></textarea>

        <button type="submit" className="submit-button">
          GÖNDER
        </button>
      </div>

      {/* Footer */}
      <Footer hideRatingSection={true} />
    </div>
  );
};

export default FAQ;
