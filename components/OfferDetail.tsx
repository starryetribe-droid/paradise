
import React, { useState } from 'react';

const OfferDetail: React.FC = () => {
  const calendarDays = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="bg-white animate-fade-in pb-48 text-left">
      {/* Promotion Header Image - Verified Luxury Art/Pool Image */}
      <div className="relative w-full aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800&sat=-100" 
          className="w-full h-full object-cover"
          alt="Spring Collection Promotion"
        />
        <div className="absolute top-8 left-8">
           <span className="bg-black text-white text-[9px] font-bold px-3 py-1.5 tracking-widest uppercase">봄 시즌 한정</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Title & Conditions */}
      <div className="px-6 py-16">
        <h1 className="text-2xl font-bold tracking-tight text-black mb-10 leading-tight">크리스탈 스위트 스테이 : <br />프리미엄 스프링 컬렉션</h1>
        
        <div className="space-y-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-y border-gray-50 py-12">
          <div className="flex justify-between">
            <span className="w-24">판매 기간</span>
            <span className="text-black text-right">2025.12.22 - 2026.03.15</span>
          </div>
          <div className="flex justify-between">
            <span className="w-24">투숙 기간</span>
            <span className="text-black text-right">2026.01.05 - 2026.03.15</span>
          </div>
          <div className="flex justify-between">
            <span className="w-24">포함 혜택</span>
            <span className="text-black text-right">조식 (2인), 씨메르 스파 이용, 스와로브스키 기프트</span>
          </div>
        </div>

        <p className="mt-12 text-[11px] text-gray-500 leading-relaxed font-medium">
          가장 빛나는 순간을 위해 준비된 크리스탈 스테이. <br />
          스와로브스키의 기프트와 씨메르 스파의 리프레시를 한 번에 경험해보세요.
        </p>
      </div>

      {/* Package Options */}
      <div className="px-6 space-y-4">
        {[
          { title: '스탠다드 플랜', price: '353,000', active: true },
          { title: '다이닝 플러스 플랜', price: '551,000', active: false }
        ].map(opt => (
          <div key={opt.title} className={`p-8 border transition-all ${opt.active ? 'border-black bg-white' : 'border-gray-100 bg-gray-50 opacity-60'}`}>
            <div className="flex justify-between items-center mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{opt.title}</span>
              {opt.active && <span className="text-[8px] bg-black text-white px-2 py-1 font-bold">추천</span>}
            </div>
            <div className="flex justify-between items-end">
               <button className="text-[9px] font-bold text-gray-400 border-b border-gray-100 pb-0.5 uppercase tracking-widest">상세 정보</button>
               <div className="text-right">
                  <span className="text-2xl font-bold text-black tracking-tighter">{opt.price}</span>
                  <span className="text-[9px] text-gray-400 font-bold ml-1 uppercase">KRW</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="mt-24 px-6 mb-20">
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase mb-12">최저가 캘린더</h3>
        <div className="grid grid-cols-7 border-t border-gray-100">
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day} className="text-center py-5 text-[9px] font-bold text-gray-300 border-b border-gray-50">{day}</div>
          ))}
          {calendarDays.map((day) => {
            const isAvailable = day >= 8 && day <= 24;
            return (
              <div key={day} className="h-20 border-b border-gray-50 p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                <span className={`text-[10px] font-bold ${isAvailable ? 'text-black' : 'text-gray-200'}`}>{day}</span>
                {isAvailable && <span className="text-[8px] text-black font-bold mt-1">35.3</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fixed Primary CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-gray-100 z-[100] p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <button className="w-full py-5 bg-black text-white text-[11px] font-bold tracking-[0.4em] uppercase shadow-xl">
          객실 잔여 현황 확인
        </button>
      </div>
    </div>
  );
};

export default OfferDetail;
