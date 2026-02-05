
import React from 'react';

interface HeroProps {
  onAction?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative h-[680px] w-full overflow-hidden bg-black text-left">
      {/* Grayscale Background Image - Verified Luxury Hotel Exterior */}
      <img 
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&sat=-100" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Paradise City Exterior"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white px-8">
        <div className="overflow-hidden mb-6">
          <span className="block text-[10px] tracking-[0.6em] uppercase text-gray-400 font-bold animate-slide-up">Art-tainment Resort</span>
        </div>
        <h1 className="text-3xl leading-[1.3] font-bold tracking-tight animate-slide-up delay-100 whitespace-pre-line">
          Art × Play × Life, {"\n"}
          당신만의 파라다이스
        </h1>
        <div className="w-12 h-px bg-white/20 mt-10"></div>
        <p className="mt-10 text-[11px] leading-[1.8] text-gray-400 max-w-[280px] font-medium tracking-wide">
          감각적인 휴식과 예술적 영감이 어우러진 <br />
          당신만을 위한 완벽한 공간을 제안합니다.
        </p>
      </div>

      <div className="absolute bottom-44 left-0 right-0 z-30 px-6">
        <div className="flex justify-between items-center bg-white/5 border border-white/10 p-1 backdrop-blur-sm">
          {['Room', 'Dining', 'Spa', 'Casino'].map((item, idx) => (
            <button 
              key={item} 
              className={`flex-1 py-3.5 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${idx === 0 ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-5">
        <span className="text-[8px] tracking-[0.5em] uppercase text-white/20 font-bold">Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
