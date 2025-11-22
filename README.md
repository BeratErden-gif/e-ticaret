# OJS Nutrition E-Ticaret Sitesi

Modern ve kullanıcı dostu bir spor gıdaları e-ticaret platformu. React, TypeScript ve Vite ile geliştirilmiştir.

## Özellikler

### Genel Özellikler
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Modern UI/UX**: Kullanıcı dostu arayüz ve navigasyon
- **Hızlı Performans**: Vite ile optimize edilmiş build ve geliştirme süreci
- **Type Safety**: TypeScript ile tip güvenliği

### Kullanıcı Özellikleri
- **Ürün Kataloğu**: Kategorilere göre filtrelenebilir ürün listesi
- **Ürün Detay**: Detaylı ürün bilgileri, görseller ve yorumlar
- **Sepet Yönetimi**: Dinamik sepet işlemleri (ekleme, çıkarma, güncelleme)
- **Kullanıcı Hesabı**: Hesap bilgileri yönetimi
- **Adres Yönetimi**: Birden fazla teslimat adresi ekleme ve düzenleme
- **Sipariş Takibi**: Geçmiş siparişleri görüntüleme ve detaylarını inceleme
- **Ödeme Sayfası**: Güvenli ödeme işlem akışı

### Sayfalar
- Ana Sayfa (Home)
- Ürün Listesi (Protein)
- Ürün Detay
- Sepet (Cart Sidebar)
- Hesap Yönetimi
  - Hesap Bilgilerim
  - Siparişlerim
  - Adreslerim
- Ödeme (Checkout)
- Sipariş Detay
- Hakkımızda
- İletişim
- SSS (Sıkça Sorulan Sorular)

## Teknolojiler

- **React 19.1.1**: Modern React özellikleri ile component tabanlı mimari
- **TypeScript 5.8.3**: Tip güvenliği ve daha iyi geliştirici deneyimi
- **Vite 7.1.0**: Hızlı build aracı ve geliştirme sunucusu
- **React Router DOM 6.30.1**: Client-side routing
- **React Icons 5.5.0**: İkon kütüphanesi
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **ESLint**: Kod kalitesi ve tutarlılığı

## Kurulum

### Gereksinimler
- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/BeratErden-gif/e-ticaret.git
cd e-ticaret-sitesi
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda açın:
```
http://localhost:5173
```

## Komutlar

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Linting kontrolü
npm run lint

# Production build'i önizle
npm run preview
```

## Proje Yapısı

```
e-ticaret-sitesi/
├── src/
│   ├── assets/              # Görseller ve statik dosyalar
│   ├── components/          # React componentleri
│   │   ├── About/          # Hakkımızda sayfası
│   │   ├── Account/        # Hesap sayfası
│   │   ├── AccountInfo/    # Hesap bilgileri
│   │   ├── Addresses/      # Adres yönetimi
│   │   ├── BestSellers/    # En çok satanlar
│   │   ├── BlackBanner/    # Banner component
│   │   ├── Cart/           # Sepet sidebar
│   │   ├── CategoryCard/   # Kategori kartları
│   │   ├── Checkout/       # Ödeme sayfası
│   │   ├── Contact/        # İletişim sayfası
│   │   ├── FAQ/            # SSS sayfası
│   │   ├── Footer/         # Footer component
│   │   ├── Header/         # Header component
│   │   ├── InfoBar/        # Bilgi çubuğu
│   │   ├── MiddleBanner/   # Orta banner
│   │   ├── OrderDetail/    # Sipariş detay
│   │   ├── Orders/         # Siparişler
│   │   ├── ProductDetail/  # Ürün detay
│   │   ├── Protein/        # Protein listesi
│   │   └── Reviews/        # Yorumlar
│   ├── App.tsx             # Ana uygulama component
│   ├── main.tsx            # Giriş noktası
│   └── index.css           # Global stiller
├── public/                  # Statik dosyalar
├── package.json            # Proje bağımlılıkları
├── tsconfig.json           # TypeScript yapılandırması
├── vite.config.ts          # Vite yapılandırması
└── README.md               # Bu dosya
```

## Özellik Detayları

### Responsive Tasarım
- Mobil öncelikli tasarım yaklaşımı
- Hamburger menü ile mobil navigasyon
- Tüm sayfalarda tablet ve mobil optimizasyonu
- Esnek grid ve flexbox düzenleri

### Sepet Sistemi
- Sidebar olarak açılır sepet
- Ürün ekleme/çıkarma
- Miktar güncelleme
- Toplam fiyat hesaplama
- Sepet ürün sayısı göstergesi

### Kullanıcı Yönetimi
- Giriş/Kayıt formu
- Hesap bilgileri düzenleme
- Şifre değiştirme
- Çıkış yapma

### Sipariş Yönetimi
- Sipariş geçmişi listeleme
- Sipariş durumu takibi
- Sipariş detaylarını görüntüleme
- Sipariş özeti ve fatura bilgileri

## Geliştirme

### Kod Standardı
- ESLint kurallarına uygun kod yazımı
- TypeScript tip tanımlamaları
- Component bazlı mimari
- CSS modülleri ile stil izolasyonu

### Git Workflow
```bash
# Yeni özellik için branch oluştur
git checkout -b feature/ozellik-adi

# Değişiklikleri commit et
git add .
git commit -m "feat: yeni özellik açıklaması"

# Ana branch'e push et
git push origin main
```

## Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## İletişim

Proje Sahibi: Berat Erden
GitHub: [@BeratErden-gif](https://github.com/BeratErden-gif)

## Ekran Görüntüleri

Proje aşağıdaki sayfa ve özellikleri içermektedir:
- Ana sayfa ile kategori kartları ve en çok satanlar
- Ürün detay sayfası ile zoom özelliği
- Responsive header ve mobil menü
- Sepet yönetimi sidebar
- Kullanıcı hesap paneli
- Sipariş takip sistemi
- Modern ve minimalist tasarım

---

Made with ❤️ using React + TypeScript + Vite
