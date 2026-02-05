
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingEngine from './components/BookingEngine';
import SpecialOffers from './components/SpecialOffers';
import EventsSection from './components/EventsSection';
import SpecialPlace from './components/SpecialPlace';
import Footer from './components/Footer';
import ScreenList from './components/ScreenList';
import PackageListing from './components/PackageListing';
import PackageDetail from './components/PackageDetail';
import OfferDetail from './components/OfferDetail';
import Checkout from './components/Checkout';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'package' | 'package-detail' | 'offer-detail' | 'checkout'>('home');
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeView !== 'home') {
      setShowFloatingBtn(false);
    }
  }, [activeView]);

  useEffect(() => {
    const handleScroll = () => {
      if (activeView === 'home') {
        const scrollThreshold = 450;
        setShowFloatingBtn(window.scrollY > scrollThreshold);
      } else {
        setShowFloatingBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const navigateTo = (viewId: string) => {
    setIsMenuOpen(false);
    if (['package', 'package-detail', 'offer-detail', 'checkout'].includes(viewId)) {
      setActiveView(viewId as any);
    } else {
      setActiveView('home');
      setTimeout(() => {
        const element = document.getElementById(viewId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const getHeaderTitle = () => {
    switch(activeView) {
      case 'package': return '객실 검색 결과';
      case 'package-detail': return '객실 및 옵션 선택';
      case 'checkout': return '예약 확인 및 결제';
      case 'offer-detail': return '특별 프로모션';
      default: return 'PARADISE CITY';
    }
  };

  return (
    <div className="mx-auto w-[375px] bg-white min-h-screen relative overflow-x-hidden border-x border-gray-100 shadow-2xl">
      <Header 
        onMenuClick={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        title={getHeaderTitle()}
        showCart={activeView !== 'home'}
        showShare={['package-detail', 'offer-detail'].includes(activeView)}
        cartCount={activeView === 'checkout' ? 1 : 0}
        onLoginClick={() => setIsLoggedIn(!isLoggedIn)}
        isLoggedIn={isLoggedIn}
      />
      
      {isMenuOpen && (
        <ScreenList onClose={() => setIsMenuOpen(false)} onNavigate={navigateTo} />
      )}

      <main className={isMenuOpen ? 'hidden' : 'block animate-fade-in'}>
        {activeView === 'home' && (
          <>
            <div id="home">
              {/* 원클릭 진입 시 패키지 상세로 바로 연결 */}
              <Hero onAction={() => navigateTo('package-detail')} />
            </div>
            <div id="reservation" className="px-5 -mt-24 relative z-30 mb-16">
              <BookingEngine />
            </div>
            
            <div className="px-5 mb-16">
              <div className="bg-black p-8 text-white">
                <div className="relative z-10 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">Personalized Offer</span>
                  <h3 className="text-xl mt-3 leading-tight font-bold whitespace-pre-line">
                    {isLoggedIn ? '오윤기님을 위한\n특별한 멤버십 혜택' : '멤버십 가입하고\n최대 15% 추가 할인받기'}
                  </h3>
                  <button className="mt-6 text-[10px] font-bold tracking-widest border-b border-white pb-1 uppercase">
                    {isLoggedIn ? '나의 혜택 보기' : '멤버십 가입하기'}
                  </button>
                </div>
              </div>
            </div>

            <div id="offers">
              <SpecialOffers isPersonalized={isLoggedIn} />
            </div>
            <div className="w-full h-px bg-gray-100 my-16 mx-auto px-5"></div>
            <div id="dining">
              <EventsSection />
            </div>
            <div className="w-full h-px bg-gray-100 my-16 mx-auto px-5"></div>
            <div id="wellness">
              <SpecialPlace />
            </div>
          </>
        )}
        {activeView === 'package' && <PackageListing />}
        {activeView === 'package-detail' && <PackageDetail onNext={() => navigateTo('checkout')} />}
        {activeView === 'offer-detail' && <OfferDetail />}
        {activeView === 'checkout' && <Checkout />}
      </main>
      
      {!isMenuOpen && <Footer />}

      {/* Floating Action Button */}
      {activeView === 'home' && (
        <div 
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${
            showFloatingBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <button 
            onClick={() => navigateTo('reservation')}
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase">지금 예약하기</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
