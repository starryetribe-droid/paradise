import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScreenList from './components/ScreenList';
import Home from './screens/Home';
import PackageListing from './screens/PackageListing';
import PackageDetail from './screens/PackageDetail';
import OfferDetail from './screens/OfferDetail';
import Checkout from './screens/Checkout';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const scrollThreshold = 450;
        setShowFloatingButton(window.scrollY > scrollThreshold);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navigateTo = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('#') || !path.startsWith('/')) {
      // Handle anchor links or specific IDs
      const targetId = path.startsWith('#') ? path.substring(1) : path;
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToElement(targetId), 100);
      } else {
        scrollToElement(targetId);
      }
    } else {
      navigate(path);
    }
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/package': return '객실 검색 결과';
      case '/package-detail': return '객실 및 옵션 선택';
      case '/checkout': return '예약 확인 및 결제';
      case '/offer-detail': return '특별 프로모션';
      default: return 'PARADISE CITY';
    }
  };

  return (
    <div className="mx-auto w-[375px] bg-white min-h-screen relative overflow-x-hidden border-x border-gray-100 shadow-2xl">
      <Header
        onMenuClick={toggleMenu}
        isMenuOpen={isMenuOpen}
        title={getHeaderTitle()}
        showCart={location.pathname !== '/'}
        showShare={['/package-detail', '/offer-detail'].includes(location.pathname)}
        cartCount={location.pathname === '/checkout' ? 1 : 0}
        onLoginClick={() => setIsLoggedIn(!isLoggedIn)}
        isLoggedIn={isLoggedIn}
      />

      {isMenuOpen && (
        <ScreenList onClose={() => setIsMenuOpen(false)} onNavigate={navigateTo} />
      )}

      <main className={isMenuOpen ? 'hidden' : 'block animate-fade-in'}>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} navigateTo={navigateTo} />} />
          <Route path="/package" element={<PackageListing />} />
          <Route path="/package-detail" element={<PackageDetail />} />
          <Route path="/offer-detail" element={<OfferDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Fallback for other paths from ScreenList mapping */}
          <Route path="/reservation" element={<Home isLoggedIn={isLoggedIn} navigateTo={navigateTo} />} />
          <Route path="/offers" element={<Home isLoggedIn={isLoggedIn} navigateTo={navigateTo} />} />
          <Route path="/dining" element={<Home isLoggedIn={isLoggedIn} navigateTo={navigateTo} />} />
          <Route path="/wellness" element={<Home isLoggedIn={isLoggedIn} navigateTo={navigateTo} />} />
        </Routes>
      </main>

      {!isMenuOpen && <Footer />}

      {/* Floating Action Button */}
      {location.pathname === '/' && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${showFloatingButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
          <button
            onClick={() => scrollToElement('reservation')}
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase">지금 예약하기</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
