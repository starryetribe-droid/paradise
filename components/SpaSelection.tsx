
import React, { useState } from 'react';

interface SpaSelectionProps {
  onNext: () => void;
}

const SpaSelection: React.FC<SpaSelectionProps> = ({ onNext }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const spaTreatments = [
    {
      id: 1,
      name: '씨메르 시그니처 바디 테라피',
      desc: '천연 아로마 오일을 사용한 전신 이완 프로그램',
      duration: '60분',
      price: 180000,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600&sat=-100'
    },
    {
      id: 2,
      name: '딥 티슈 리커버리',
      desc: '심부 근육층의 긴장을 해소하는 고강도 테라피',
      duration: '90분',
      price: 240000,
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600&sat=-100'
    },
    {
      id: 3,
      name: '오가닉 페이셜 케어',
      desc: '피부 본연의 광채를 되찾아주는 유기농 페이셜',
      duration: '60분',
      price: 150000,
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600&sat=-100'
    },
    {
      id: 4,
      name: '헤드 & 숄더 릴렉서',
      desc: '짧은 시간 내 피로를 집중 해소하는 상체 케어',
      duration: '40분',
      price: 95000,
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600&sat=-100'
    }
  ];

  const toggleItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedItems.reduce((acc, id) => {
    const item = spaTreatments.find(t => t.id === id);
    return acc + (item?.price || 0);
  }, 0);

  return (
    <div className="bg-white animate-fade-in pb-48 text-left">
      {/* Step Header */}
      <div className="sticky top-[64px] z-[90] bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">RESERVATION FLOW</span>
            <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold tracking-tight">스파 프로그램 추가</span>
          </div>
          <span className="text-[9px] font-bold text-gray-300">추가 단계 / 옵션</span>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-1 bg-black"></div>
          <div className="flex-1 h-1 bg-black"></div>
          <div className="w-1/2 h-1 bg-black"></div>
          <div className="w-1/2 h-1 bg-gray-100"></div>
        </div>
      </div>

      <div className="px-6 py-12">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">CIMER Wellness</span>
        <h1 className="text-2xl font-bold tracking-tight text-black mb-8 leading-tight">
          완벽한 휴식을 위한 <br />
          스파 프로그램을 더해보세요
        </h1>
        <p className="text-[12px] text-gray-500 leading-relaxed font-medium mb-12">
          투숙 기간 중 이용 가능한 최적의 시간대를 확인해 드립니다. <br />
          테라피스트의 전문적인 케어로 지친 심신에 활력을 불어넣으세요.
        </p>
      </div>

      {/* Categories */}
      <div className="px-6 mb-10 overflow-x-auto scrollbar-hide flex gap-6 border-b border-gray-50 pb-4">
        {['전체', '바디 케어', '페이셜 케어', '집중 케어'].map((cat, idx) => (
          <button key={cat} className={`text-[11px] font-bold whitespace-nowrap transition-all ${idx === 0 ? 'text-black border-b-2 border-black pb-2' : 'text-gray-300'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Spa Items */}
      <div className="px-6 space-y-12">
        {spaTreatments.map((item) => (
          <div key={item.id} className="group">
            <div className="relative aspect-[16/9] bg-gray-100 border border-gray-100 overflow-hidden mb-5">
              <img 
                src={item.img} 
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                alt={item.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544161515-436cead5457a?auto=format&fit=crop&q=80&w=800&sat=-100';
                }}
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 border border-gray-100">
                <span className="text-[9px] font-bold text-black uppercase">{item.duration}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-black tracking-tight">{item.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold">{item.price.toLocaleString()}</span>
                <span className="text-[9px] text-gray-400 font-bold">원</span>
              </div>
            </div>
            
            <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
              {item.desc}
            </p>
            
            <button 
              onClick={() => toggleItem(item.id)}
              className={`w-full py-3.5 text-[11px] font-bold tracking-widest transition-all ${selectedItems.includes(item.id) ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:border-black'}`}
            >
              {selectedItems.includes(item.id) ? '취소하기' : '선택하기'}
            </button>
          </div>
        ))}
      </div>

      {/* Fixed Summary Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-gray-100 z-[100] p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400">추가된 프로그램</span>
            <span className="text-[11px] font-bold text-black">{selectedItems.length}건 선택됨</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tighter">+{totalPrice.toLocaleString()}</span>
            <span className="text-[10px] text-gray-400 font-bold">원</span>
          </div>
        </div>
        <button 
          onClick={onNext}
          className="w-full py-5 bg-black text-white text-[13px] font-bold tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98]"
        >
          최종 결제로 넘어가기
        </button>
      </div>
    </div>
  );
};

export default SpaSelection;
