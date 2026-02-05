
import React, { useState } from 'react';

interface PackageDetailProps {
  onNext?: () => void;
}

const PackageDetail: React.FC<PackageDetailProps> = ({ onNext }) => {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [addedOptions, setAddedOptions] = useState<string[]>([]);
  const [selectedSpas, setSelectedSpas] = useState<number[]>([]);
  const [benefitAutoApplied, setBenefitAutoApplied] = useState(true);

  const spaTreatments = [
    {
      id: 1,
      name: '씨메르 시그니처 바디 테라피',
      duration: '60분',
      price: 180000,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800&sat=-100'
    },
    {
      id: 2,
      name: '딥 티슈 리커버리',
      duration: '90분',
      price: 240000,
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800&sat=-100'
    }
  ];

  const roomPrice = selectedRoom === 0 ? 353000 : 408000;
  const optionPrice = addedOptions.length * 55000; 
  const spaPrice = selectedSpas.reduce((acc, id) => {
    const item = spaTreatments.find(t => t.id === id);
    return acc + (item?.price || 0);
  }, 0);
  
  const basePrice = roomPrice + optionPrice + spaPrice;
  const discount = benefitAutoApplied ? basePrice * 0.1 : 0;
  const totalPrice = basePrice - discount;

  const toggleOption = (name: string) => {
    setAddedOptions(prev => prev.includes(name) ? prev.filter(o => o !== name) : [...prev, name]);
  };

  const toggleSpa = (id: number) => {
    setSelectedSpas(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="bg-white animate-fade-in pb-56">
      {/* 1. 진행 단계 헤더 */}
      <div className="sticky top-[64px] z-[90] bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">RESERVATION FLOW</span>
            <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold tracking-tight">상세 옵션 및 스파 선택</span>
          </div>
          <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">2단계 / 전체 3단계</span>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-1 bg-black"></div>
          <div className="flex-1 h-1 bg-black"></div>
          <div className="flex-1 h-1 bg-gray-100"></div>
        </div>
      </div>

      {/* 2. 메인 비주얼 - Verified Deluxe Room */}
      <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center border-b border-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800&sat=-100" 
          className="w-full h-full object-cover opacity-80" 
          alt="Package Room"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&sat=-100';
          }}
        />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
           <div className="flex gap-1">
             <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
           </div>
           <button className="bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold tracking-tight border border-gray-100">이미지 더보기</button>
        </div>
      </div>

      {/* 3. 패키지 기본 정보 */}
      <div className="px-6 py-12 text-left">
        <div className="flex gap-2 mb-4">
          <span className="bg-black text-white text-[9px] px-2 py-1 font-bold tracking-tight">추천 상품</span>
          <span className="border border-black text-black text-[9px] px-2 py-1 font-bold tracking-tight">스마트 혜택 적용</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black mb-8 leading-tight">크리스탈 스위트 스테이 패키지</h1>
        
        <div className="bg-gray-50 p-5 border border-gray-100 flex justify-between items-center mb-8">
          <div className="flex items-center gap-3 text-left">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse flex-shrink-0"></div>
            <p className="text-[10px] font-bold tracking-tight">보유 쿠폰 중 가장 유리한 10% 쿠폰이 자동 적용되었습니다.</p>
          </div>
          <button className="text-[9px] text-gray-400 font-bold border-b border-gray-200 flex-shrink-0 ml-2">변경</button>
        </div>

        {/* 포함 혜택 아이콘 섹션 */}
        <div className="grid grid-cols-4 gap-4 py-8 border-y border-gray-50 mb-10">
          {[
            { label: '조식 2인', icon: 'M12 3v18M3 12h18' },
            { label: '스파 이용', icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' },
            { label: '기프트', icon: 'M20 12V8H4v4m16 0v8H4v-8m16 0H4' },
            { label: '피트니스', icon: 'M18 8h1V7h-1V6h-1v1h-1v1h1v1h1V8Z' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.2">
                  <path d={item.icon} />
                </svg>
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{item.label}</span>
            </div>
          ))}
        </div>

        {/* 객실 타입 선택 */}
        <label className="text-[10px] font-bold tracking-widest text-gray-400 mb-8 block uppercase">객실 타입 선택</label>
        <div className="space-y-4 mb-16">
          {[
            { name: '디럭스 킹', price: 353000, desc: '32sqm | 시티 뷰' },
            { name: '프리미어 킹', price: 408000, desc: '40sqm | 가든 뷰' }
          ].map((room, i) => (
            <div 
              key={room.name} 
              onClick={() => setSelectedRoom(i)}
              className={`p-6 border transition-all cursor-pointer ${selectedRoom === i ? 'border-black bg-white ring-1 ring-black/5' : 'border-gray-100 bg-gray-50/50'}`}
            >
              <div className="flex justify-between items-start">
                <div className="text-left">
                  <span className="text-[12px] font-bold block mb-1">{room.name}</span>
                  <span className="text-[10px] text-gray-400 font-medium tracking-tight">{room.desc}</span>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedRoom === i ? 'border-black' : 'border-gray-200'}`}>
                  {selectedRoom === i && <div className="w-2.5 h-2.5 rounded-full bg-black"></div>}
                </div>
              </div>
              <div className="mt-8 flex justify-end items-baseline gap-1">
                <span className="text-xl font-bold text-black">{room.price.toLocaleString()}</span>
                <span className="text-[11px] text-gray-400 font-bold uppercase">원</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 스파 프로그램 선택 (통합 UI) */}
      <div className="px-6 py-16 bg-gray-50 border-y border-gray-100 text-left">
        <div className="mb-10">
          <span className="text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase mb-3 block">Wellness Program</span>
          <h2 className="text-xl font-bold text-black mb-4">CIMER 스파 테라피 추가</h2>
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            숙련된 테라피스트의 손길로 완성되는 최상의 힐링. <br />
            투숙 시 예약 가능한 전문 프로그램을 추가해 보세요.
          </p>
        </div>

        <div className="space-y-8">
          {spaTreatments.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 overflow-hidden">
               <div className="relative aspect-video">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover opacity-80" 
                    alt={item.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544161515-436cead5457a?auto=format&fit=crop&q=80&w=800&sat=-100';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 text-[9px] font-bold border border-gray-100">{item.duration}</div>
               </div>
               <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[13px] font-bold text-black">{item.name}</h3>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[13px] font-bold">{item.price.toLocaleString()}</span>
                      <span className="text-[9px] text-gray-400 font-bold">원</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleSpa(item.id)}
                    className={`w-full py-3 text-[11px] font-bold tracking-widest transition-all ${selectedSpas.includes(item.id) ? 'bg-black text-white border-black' : 'bg-white text-black border border-gray-200'}`}
                  >
                    {selectedSpas.includes(item.id) ? '선택 취소' : '프로그램 추가'}
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 추가 옵션 선택 (가로 스크롤) */}
      <div className="px-6 py-16 text-left">
        <div className="flex justify-between items-baseline mb-8 px-1">
          <h3 className="text-[11px] font-bold tracking-tight text-black uppercase">기타 옵션 선택</h3>
          <span className="text-[9px] text-gray-400 font-bold">서비스 & 편의</span>
        </div>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
          {[
            { name: '프리미엄 조식뷔페', price: '59,000', img: 'https://images.unsplash.com/photo-1550966841-3ee7adac1661?auto=format&fit=crop&q=80&w=400&sat=-100' },
            { name: '레이트 체크아웃', price: '66,000', img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400&sat=-100' }
          ].map(item => (
            <div key={item.name} className="flex-shrink-0 w-44 bg-white p-5 border border-gray-100 flex flex-col gap-4 text-left shadow-sm">
              <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover opacity-60" 
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400&sat=-100';
                  }}
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-black block mb-1">{item.name}</span>
                <span className="text-[10px] text-gray-400 font-bold">{item.price} 원</span>
              </div>
              <button 
                onClick={() => toggleOption(item.name)}
                className={`w-full py-2.5 text-[10px] font-bold transition-all ${addedOptions.includes(item.name) ? 'bg-black text-white border-black' : 'bg-white text-black border border-gray-200'}`}
              >
                {addedOptions.includes(item.name) ? '추가됨' : '추가하기'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 6. 하단 고정 예약 바 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-gray-100 z-[100] p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] text-left">
        <div className="flex justify-between items-end mb-5">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">최종 선택 내역</span>
            <div className="flex gap-2 items-center">
              <span className="text-[11px] font-bold text-black">객실 1실</span>
              {(addedOptions.length + selectedSpas.length) > 0 && (
                <>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span className="text-[11px] font-bold text-black">옵션 {addedOptions.length + selectedSpas.length}건</span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end">
             {benefitAutoApplied && <span className="text-[9px] text-black font-bold mb-1 tracking-tighter">- {discount.toLocaleString()}원 혜택 적용됨</span>}
             <div className="flex items-baseline gap-1">
               <span className="text-3xl font-bold tracking-tighter text-black">{totalPrice.toLocaleString()}</span>
               <span className="text-[11px] text-gray-400 font-bold uppercase">KRW</span>
             </div>
          </div>
        </div>
        <button 
          onClick={onNext}
          className="w-full py-5 bg-black text-white text-[13px] font-bold tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98] uppercase"
        >
          예약 확인 및 결제하기
        </button>
      </div>
    </div>
  );
};

export default PackageDetail;
