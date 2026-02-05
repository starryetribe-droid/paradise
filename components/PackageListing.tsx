
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PackageListing: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white min-h-screen pb-20">
      <div className="sticky top-[64px] z-50 bg-black text-white px-6 py-4 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Search Condition</span>
            <span className="text-[11px] font-bold">04.08 - 04.09 | 성인 2명</span>
          </div>
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-[10px] font-bold border border-white/20 px-3 py-1.5 transition-all"
        >
          {isFilterOpen ? '닫기' : '변경'}
        </button>
      </div>

      {isFilterOpen && (
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-10 animate-fade-in text-left">
          <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 mb-6">
            <div className="bg-white p-4"><span className="text-[9px] text-gray-400 font-bold block mb-1">체크인</span><span className="text-[12px] font-bold">2026.04.08</span></div>
            <div className="bg-white p-4"><span className="text-[9px] text-gray-400 font-bold block mb-1">체크아웃</span><span className="text-[12px] font-bold">2026.04.09</span></div>
          </div>
          <button className="w-full py-4 bg-black text-white text-[11px] font-bold tracking-widest">검색 결과 업데이트</button>
        </div>
      )}

      <div className="px-6 mt-10 text-left">
        <div className="bg-gray-50 p-4 border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <span className="text-[10px] font-bold text-black tracking-tight">로그인 시 회원 전용 혜택이 적용됩니다.</span>
          </div>
          <button className="text-[10px] font-bold text-black border-b border-black/20">로그인</button>
        </div>
      </div>

      <div className="px-6 pt-12 pb-8 flex justify-between items-baseline">
        <h2 className="text-xl font-bold tracking-tight text-black uppercase">전체 패키지</h2>
        <span className="text-[10px] text-gray-400 font-bold">총 12개</span>
      </div>

      <div className="px-6 space-y-16">
        {[
          { id: 1, img: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800&sat=-100' },
          { id: 2, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&sat=-100' },
          { id: 3, img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800&sat=-100' }
        ].map((item) => (
          <div key={item.id} onClick={() => navigate('/package-detail')} className="group cursor-pointer text-left">
            <div className="relative aspect-[16/10] bg-gray-100 flex items-center justify-center border border-gray-100 mb-6 overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                alt="Package Visual"
              />
              <div className="absolute top-0 left-0 bg-black text-white text-[9px] px-3 py-1.5 font-bold">
                강력 추천
              </div>
            </div>

            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-bold text-black tracking-tight">크리스탈 스위트 스테이</h4>
              <span className="text-[9px] text-gray-400 font-bold border border-gray-100 px-2 py-0.5">한정 수량</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-10 font-medium">
              스와로브스키 기프트와 프리미엄 조식이 포함된 스테이 패키지. 도심 속 완벽한 휴식을 제안합니다.
            </p>

            <div className="flex items-center justify-between pt-8 border-t border-gray-100">
              <div className="flex flex-col items-start">
                <span className="text-[9px] text-gray-300 font-bold line-through mb-1">1,850,000</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-black tracking-tighter">1,650,000</span>
                  <span className="text-[10px] text-gray-400 font-bold">원</span>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/package-detail'); }}
                className="px-8 py-3 bg-black text-white text-[11px] font-bold tracking-widest hover:bg-gray-800 transition-all"
              >
                선택하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageListing;
