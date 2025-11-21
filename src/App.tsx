import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Categories from "./components/Categories/Categories";
import BestSellers from "./components/BestSellers/BestSellers";
import MiddleBanner from "./components/MiddleBanner/MiddleBanner";
import Reviews from "./components/Reviews/Reviews";
import BlackBanner from "./components/BlackBanner/BlackBanner";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Protein from "./components/Protein/Protein";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Account from "./components/Account/Account";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import About from "./components/About/About";
import Addresses from "./components/Addresses/Addresses";
import Orders from "./components/Orders/Orders";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <BestSellers hideViewAll={true} isHomePage={true} />
      <MiddleBanner />
      <Reviews />
      <BlackBanner />
    </>
  );
}

function AppContent() {
  const location = useLocation();

  if (
    location.pathname === "/contact" ||
    location.pathname === "/faq" ||
    location.pathname === "/account" ||
    location.pathname === "/account-info" ||
    location.pathname === "/about" ||
    location.pathname === "/addresses" ||
    location.pathname === "/orders"
  ) {
    if (location.pathname === "/contact") return <Contact />;
    if (location.pathname === "/faq") return <FAQ />;
    if (location.pathname === "/account") return <Account />;
    if (location.pathname === "/account-info") return <AccountInfo />;
    if (location.pathname === "/about") return <About />;
    if (location.pathname === "/addresses") return <Addresses />;
    if (location.pathname === "/orders") return <Orders />;
  }

  if (location.pathname === "/protein") {
    return (
      <div className="w-full overflow-x-hidden bg-white">
        <Routes>
          <Route path="/protein" element={<Protein />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full md:container md:max-w-[768px] md:mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
