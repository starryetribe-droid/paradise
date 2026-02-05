
import React from 'react';

const SpecialPlace: React.FC = () => {
  return (
    <section className="pb-24">
      <div className="px-5 mb-12 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.5em] text-gray-300 font-bold uppercase">Ultimate Destination</span>
          <h2 className="text-2xl font-bold tracking-tight text-black uppercase">웰니스 & 엔터테인먼트</h2>
        </div>
      </div>
      
      {/* Cinematic Casino Section - Verified Casino Image */}
      <div className="relative w-full h-[540px] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800&sat=-100" 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms] ease-out"
          alt="Paradise Casino"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-center text-center">
          <div className="w-10 h-px bg-white/40 mb-8"></div>
          
          <span className="text-[10px] tracking-[0.6em] text-white/60 font-bold uppercase mb-4 animate-pulse">The Biggest & Finest</span>
          
          <h3 className="text-3xl font-bold uppercase tracking-[0.15em] mb-6 text-white leading-tight">
            PARADISE <br />
            <span className="text-white/40">CASINO</span>
          </h3>
          
          <p className="text-[11px] text-white/50 uppercase tracking-widest leading-loose font-bold max-w-[280px] mb-10">
            품격 있는 서비스와 합리적인 게임. <br />
            국내 최대 규모의 외국인 전용 카지노가 <br />
            당신에게 잊지 못할 밤을 선사합니다.
          </p>
          
          <button className="group flex items-center gap-4 text-white text-[10px] font-bold tracking-[0.4em] uppercase border border-white/20 px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500">
            Learn More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-40">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-4 h-px bg-white"></div>
        </div>
      </div>
      
      <div className="flex justify-start gap-4 mt-8 px-7">
        <button className="w-8 h-8 flex items-center justify-center text-gray-200 hover:text-black transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-black">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="flex-1 h-px bg-gray-100 self-center ml-4"></div>
      </div>

      <div className="mt-20 space-y-px bg-gray-100 border-y border-gray-100">
        {[
          { en: 'ART GALLERY', ko: '아트 갤러리' },
          { en: 'WONDERBOX', ko: '원더박스' },
          { en: 'CIMER SPA', ko: '씨메르 스파' }
        ].map((item) => (
          <div key={item.en} className="relative h-24 bg-white flex items-center justify-center group hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all duration-300">{item.en}</span>
              <span className="text-[9px] text-gray-400 mt-1 font-bold uppercase tracking-widest">{item.ko}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialPlace;
