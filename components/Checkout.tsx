
import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [purchaseListOpen, setPurchaseListOpen] = useState(false);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [showVoucherInput, setShowVoucherInput] = useState(false);
  const [couponApplied, setCouponApplied] = useState(true);
  const [usedPoints, setUsedPoints] = useState(0);

  const myTotalPoints = 12500;
  const basePrice = 353000;
  const membershipDiscount = 35300;
  const couponDiscount = couponApplied ? 15000 : 0;
  const voucherValue = voucherApplied ? 100000 : 0;
  
  const maxUsablePoints = Math.min(myTotalPoints, basePrice - membershipDiscount - couponDiscount - voucherValue);
  const finalUsedPoints = Math.min(usedPoints, maxUsablePoints);
  const totalAmount = basePrice - membershipDiscount - couponDiscount - voucherValue - finalUsedPoints;

  const inputClass = "w-full py-4 px-4 bg-white border border-gray-100 text-[12px] font-bold transition-all duration-300 focus:border-black placeholder-gray-200";
  const labelClass = "text-[10px] font-bold tracking-widest text-gray-400 mb-2 block";

  if (isCompleted) {
    return (
      <div className="animate-fade-in bg-white min-h-screen flex flex-col items-center justify-center px-10 text-center">
        <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mb-10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-black mb-4">예약이 확정되었습니다</h2>
        <p className="text-[12px] text-gray-400 leading-relaxed font-medium mb-16">
          이용해 주셔서 감사합니다. <br />
          마이페이지에서 예약 상세 내역을 확인하실 수 있습니다.
        </p>
        <button className="w-full py-5 bg-black text-white text-[12px] font-bold tracking-widest" onClick={() => window.location.reload()}>
          홈으로 이동하기
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white animate-fade-in pb-56">
      <div className="sticky top-[64px] z-[90] bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest">PAYMENT FLOW</span>
            <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold tracking-tight">최종 확인 및 결제</span>
          </div>
          <span className="text-[9px] font-bold text-gray-300">3단계 / 전체 3단계</span>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-1 bg-black"></div>
          <div className="flex-1 h-1 bg-black"></div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>
      </div>

      <div className="sticky top-[102px] z-40 bg-gray-50 border-b border-gray-100 shadow-sm">
        <button 
          onClick={() => setPurchaseListOpen(!purchaseListOpen)}
          className="w-full px-6 py-6 flex justify-between items-center"
        >
          <div className="flex flex-col items-start text-left">
            <span className="text-[9px] font-bold text-gray-400 mb-1">예약 요약 정보</span>
            <span className="text-[12px] font-bold text-black tracking-tight">크리스탈 스위트 스테이 패키지 (1실)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">{totalAmount.toLocaleString()}원</span>
            <svg className={`w-3 h-3 text-gray-300 transition-transform ${purchaseListOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        {purchaseListOpen && (
          <div className="px-6 pb-8 animate-slide-up bg-white text-left">
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-5">
              <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                <span>기본 객실 요금</span>
                <span className="text-black">{basePrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                <span>멤버십 15% 전용 할인</span>
                <span className="text-black">- {membershipDiscount.toLocaleString()}원</span>
              </div>
              {voucherApplied && (
                <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                  <span>플래티넘 숙박권 적용</span>
                  <span className="text-black">- {voucherValue.toLocaleString()}원</span>
                </div>
              )}
              {couponApplied && (
                <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                  <span>최적가 보장 쿠폰</span>
                  <span className="text-black">- {couponDiscount.toLocaleString()}원</span>
                </div>
              )}
              {finalUsedPoints > 0 && (
                <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                  <span>파라다이스 포인트 사용</span>
                  <span className="text-black">- {finalUsedPoints.toLocaleString()}원</span>
                </div>
              )}
              <div className="flex justify-between text-[12px] font-bold text-black uppercase pt-5 border-t border-gray-100">
                <span>최종 결제 예정 금액</span>
                <span className="text-xl tracking-tighter">{totalAmount.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-16 text-left">
        <h2 className="text-[11px] font-bold tracking-widest uppercase mb-12">혜택 및 할인 적용</h2>
        
        <div className="space-y-16">
          <div>
            <div className="flex justify-between items-baseline mb-6">
              <label className={labelClass}>통합 숙박권</label>
              <button 
                onClick={() => setShowVoucherInput(!showVoucherInput)}
                className="text-[10px] font-bold text-black border-b border-black/10 pb-0.5"
              >
                지류 숙박권 등록
              </button>
            </div>
            
            {showVoucherInput && (
              <div className="mb-6 animate-slide-up">
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="숙박권 번호 입력" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </button>
                </div>
              </div>
            )}

            <div className={`p-5 border transition-all ${voucherApplied ? 'border-black bg-black text-white' : 'border-gray-100 bg-gray-50'}`}>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold">플래티넘 멤버십 전용 숙박권</span>
                  <span className={`text-[9px] mt-1 ${voucherApplied ? 'text-gray-400' : 'text-gray-300'}`}>만료일 2026.12.31 | 온라인 전용</span>
                </div>
                <button 
                  onClick={() => setVoucherApplied(!voucherApplied)}
                  className={`text-[10px] font-bold px-4 py-2 border transition-all ${voucherApplied ? 'bg-white text-black border-white' : 'bg-black text-white border-black'}`}
                >
                  {voucherApplied ? '적용됨' : '적용하기'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <label className={labelClass}>파라다이스 포인트</label>
            
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              <div className="bg-gray-50 p-6 flex flex-col items-center">
                <p className="text-[9px] font-bold text-gray-400 mb-2">나의 보유 포인트</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-xl font-bold text-black">{myTotalPoints.toLocaleString()}</p>
                  <p className="text-[10px] font-bold text-gray-400">P</p>
                </div>
              </div>
              <div className="bg-black p-6 flex flex-col items-center shadow-2xl relative overflow-hidden">
                <p className="text-[9px] font-bold text-gray-500 mb-2">사용 가능 포인트</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-xl font-bold text-white">{maxUsablePoints.toLocaleString()}</p>
                  <p className="text-[10px] font-bold text-gray-500">P</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input 
                  type="number" 
                  className={`${inputClass} pr-12`} 
                  placeholder="0" 
                  value={usedPoints || ''}
                  onChange={(e) => setUsedPoints(Number(e.target.value))}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-300">P</span>
              </div>
              <button 
                onClick={() => setUsedPoints(maxUsablePoints)}
                className="px-6 bg-black text-white text-[10px] font-bold transition-all active:bg-gray-800"
              >
                전체 사용
              </button>
            </div>
            {usedPoints > maxUsablePoints && (
              <p className="text-[9px] text-red-500 font-bold tracking-tight animate-pulse">* 사용 가능한 포인트를 초과했습니다.</p>
            )}
            <p className="text-[9px] text-gray-300 font-medium tracking-tight">
              * 1,000 P 단위로 사용 가능합니다.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <label className={labelClass}>보유 쿠폰 선택</label>
            <div className={`p-5 border flex justify-between items-center transition-all ${couponApplied ? 'border-black bg-black text-white shadow-xl' : 'border-gray-100 bg-gray-50'}`}>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold">멤버십 전용 시즌 한정 할인권</span>
                <span className={`text-[9px] mt-1 ${couponApplied ? 'text-gray-400' : 'text-gray-300'}`}>* 현재 가장 높은 할인 혜택입니다</span>
              </div>
              <button 
                onClick={() => setCouponApplied(!couponApplied)}
                className={`text-[10px] font-bold px-4 py-2 border transition-all ${couponApplied ? 'bg-white text-black border-white' : 'bg-black text-white border-black'}`}
              >
                {couponApplied ? '적용됨' : '선택하기'}
              </button>
            </div>
            <button className="text-[10px] font-bold text-gray-300 underline text-left mt-2">다른 쿠폰 2건 보기</button>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-gray-50 border-y border-gray-100 text-left">
        <h2 className="text-[11px] font-bold tracking-widest mb-12 text-black uppercase">예약자 정보 입력</h2>
        <div className="space-y-12">
          <div>
            <label className={labelClass}>성함 <span className="text-black">*</span></label>
            <input type="text" className={inputClass} defaultValue="오윤기" />
          </div>
          <div>
            <label className={labelClass}>이메일 주소 <span className="text-black">*</span></label>
            <input type="email" className={inputClass} defaultValue="gkdlldn233@gmail.com" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-gray-100 z-[100] p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] text-left">
        <div className="flex justify-between items-baseline mb-5">
          <span className="text-[10px] font-bold text-gray-400">최종 결제 금액</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tighter">{totalAmount.toLocaleString()}</span>
            <span className="text-[11px] text-gray-400 font-bold uppercase">원</span>
          </div>
        </div>
        <button 
          onClick={() => setIsCompleted(true)}
          className="w-full py-5 bg-black text-white text-[13px] font-bold tracking-widest active:scale-[0.98] transition-all"
        >
          결제 및 예약 확정
        </button>
      </div>
    </div>
  );
};

export default Checkout;
