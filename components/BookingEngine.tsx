
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingEngine: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`bg-white border border-gray-100 transition-all duration-500 shadow-sm ${isExpanded ? 'p-6' : 'p-4'}`}>
      {!isExpanded ? (
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(true)}>
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Quick Booking</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-black uppercase">02.04 - 02.05</span>
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span className="text-[11px] font-bold text-black uppercase">성인 2명</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end mr-1">
              <span className="text-[7px] font-bold text-gray-300 uppercase leading-none mb-1">Lowest</span>
              <span className="text-[13px] font-bold text-black tracking-tight leading-none">353,000~</span>
            </div>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-100 rounded-full bg-black">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-6">
              <button className="text-[11px] tracking-tight border-b-2 border-black pb-1 font-bold">객실 예약</button>
              <button className="text-[11px] tracking-tight text-gray-300 hover:text-black transition-colors pb-1 font-bold">다이닝 예약</button>
            </div>
            <button onClick={() => setIsExpanded(false)} className="p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 mb-6">
            <div className="bg-white p-5 cursor-pointer hover:bg-gray-50 transition-colors text-left">
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Check In</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">04</span>
                <span className="text-[10px] text-gray-400 font-bold">수요일</span>
              </div>
            </div>
            <div className="bg-white p-5 cursor-pointer hover:bg-gray-50 transition-colors border-l border-gray-100 text-left">
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Check Out</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">05</span>
                <span className="text-[10px] text-gray-400 font-bold">목요일</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-px bg-gray-100 border border-gray-100 mb-8">
            {[
              { label: '객실 수', value: '1' },
              { label: '성인', value: '2' },
              { label: '어린이', value: '0' }
            ].map((item) => (
              <div key={item.label} className="bg-white p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <p className="text-[9px] text-gray-400 mb-1 font-bold">{item.label}</p>
                <span className="text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/package')}
            className="w-full bg-black text-white py-5 text-[12px] font-bold hover:bg-gray-900 transition-all active:scale-[0.98] tracking-[0.2em] uppercase"
          >
            객실 검색하기
          </button>

          <p className="text-center mt-4 text-[9px] text-gray-300 font-bold tracking-widest uppercase">
            * 최저가 보장제 및 회원 전용 혜택 포함
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingEngine;
