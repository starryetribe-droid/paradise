
import React from 'react';

interface ScreenListProps {
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const ScreenList: React.FC<ScreenListProps> = ({ onNavigate }) => {
  const screens = [
    { id: 'home', en: 'HOME', ko: '메인' },
    { id: 'package', en: 'PACKAGE & TICKET', ko: '패키지 리스트' },
    { id: 'package-detail', en: 'PACKAGE DETAIL', ko: '객실 및 옵션 선택' },
    { id: 'offer-detail', en: 'OFFER DETAIL', ko: '오퍼 상세' },
    { id: 'checkout', en: 'CHECKOUT', ko: '예약 확인 및 결제' },
    { id: 'reservation', en: 'RESERVATION', ko: '빠른 객실 예약' },
    { id: 'offers', en: 'SPECIAL OFFERS', ko: '특별 멤버십 혜택' },
    { id: 'dining', en: 'DINING EXPERIENCE', ko: '다이닝 서비스' },
    { id: 'wellness', en: 'WELLNESS & ART', ko: '웰니스 및 아트' },
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-white pt-32 px-10 pb-20 flex flex-col justify-between animate-fade-in overflow-y-auto text-left">
      <div className="flex flex-col gap-12">
        <div className="text-[10px] tracking-[0.5em] text-gray-300 font-bold border-b border-gray-100 pb-4 uppercase">
          NAVIGATION
        </div>
        <nav className="flex flex-col gap-10 text-left">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => onNavigate(screen.id)}
              className="flex flex-col items-start group transition-all"
            >
              <span className="text-2xl font-bold tracking-tight group-hover:pl-3 transition-all duration-300 text-black">
                {screen.ko}
              </span>
              <span className="text-[10px] text-gray-300 mt-1.5 tracking-[0.2em] font-bold uppercase opacity-60 group-hover:opacity-100 transition-all duration-300">
                {screen.en}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-10 pt-20">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-tight">
          <button className="hover:text-black transition-colors">실시간 예약</button>
          <button className="hover:text-black transition-colors">마이페이지</button>
        </div>
        <div className="w-full h-px bg-gray-100"></div>
        <div className="flex justify-between items-center text-[10px] font-bold text-gray-200">
          <span className="tracking-widest">PARADISE CITY</span>
          <span className="tracking-widest">© 2025</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenList;
