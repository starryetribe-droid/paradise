
import React from 'react';

const EventsSection: React.FC = () => {
  return (
    <section className="px-5">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-black mb-3 uppercase">다이닝 익스피리언스</h2>
        <p className="text-[11px] text-gray-400 leading-relaxed px-10 font-medium">
          도심의 영혼을 담아 수확한 식재료. 셰프의 진심이 담긴 파인 다이닝을 만나보세요.
        </p>
        <button className="mt-6 text-[10px] uppercase tracking-widest text-black flex items-center justify-center gap-2 mx-auto font-bold border-b border-black pb-1">
          Explore Dining
        </button>
      </div>
      
      <div className="space-y-4">
        {[
          { 
            category: 'BAKERY', 
            name: 'BOUTIQUE', 
            img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800&sat=-100' 
          },
          { 
            category: 'ON THE', 
            name: 'PLATE', 
            img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800&sat=-100' 
          }
        ].map((item) => (
          <div key={item.name} className="relative aspect-square overflow-hidden bg-gray-100 border border-gray-100 group">
            <img 
              src={item.img} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              alt={item.name}
              onError={(e) => {
                // Fallback in case of specific image load failure
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800&sat=-100';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/20 group-hover:bg-white/40 transition-colors">
              <span className="text-[11px] uppercase tracking-[0.4em] mb-1 font-bold">{item.category}</span>
              <div className="w-6 h-px bg-black/20 mb-1"></div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
