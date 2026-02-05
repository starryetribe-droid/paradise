
import React from 'react';

interface SpecialOffersProps {
  isPersonalized?: boolean;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ isPersonalized }) => {
  return (
    <section className="px-6">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6 bg-black"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-black uppercase">
            {isPersonalized ? 'Recommended For You' : 'Special Collection'}
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-black uppercase leading-tight">
          {isPersonalized ? '오윤기님께 제안하는\n이달의 무드' : '파라다이스에서의\n우아한 도피'}
        </h2>
      </div>
      
      <div className="bg-white border border-gray-100">
        <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&sat=-100" 
            className="w-full h-full object-cover opacity-80"
            alt="Luxury Suite"
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-black text-white text-[8px] px-2 py-1 tracking-widest font-bold uppercase">Limited</span>
            {isPersonalized && <span className="bg-gray-200 text-black text-[8px] px-2 py-1 tracking-widest font-bold uppercase">Member Only</span>}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <span className="text-gray-400 text-[9px] uppercase tracking-widest font-bold">Wellness Package</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 leading-tight text-black">
            스프링 블라썸 : <br />리프레시 오아시스
          </h3>
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-10">
            씨메르 스파 이용권과 프라이빗 라운지 조식이 포함된 봄 시즌 한정 스테이 패키지를 만나보세요.
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-gray-50">
            <div className="flex items-baseline gap-1">
              <span className="text-[9px] text-gray-300 font-bold uppercase mr-1">From</span>
              <span className="text-2xl font-bold text-black tracking-tighter">428,000</span>
              <span className="text-[10px] text-gray-400 font-bold ml-1">KRW</span>
            </div>
            <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
        <button className="text-black border-b border-black pb-0.5">All Packages</button>
        <button className="text-gray-300 hover:text-black transition-colors">Promotion List</button>
      </div>
    </section>
  );
};

export default SpecialOffers;
