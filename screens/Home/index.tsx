import React from 'react';
import Hero from '../../components/Hero';
import BookingEngine from '../../components/BookingEngine';
import SpecialOffers from '../../components/SpecialOffers';
import EventsSection from '../../components/EventsSection';
import SpecialPlace from '../../components/SpecialPlace';

interface HomeProps {
  isLoggedIn: boolean;
  navigateTo: (viewId: string) => void;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn, navigateTo }) => {
  return (
    <>
      <div id="home">
        {/* 원클릭 진입 시 패키지 상세로 바로 연결 */}
        <Hero onAction={() => navigateTo('/package-detail')} />
      </div>
      <div id="reservation" className="px-5 -mt-24 relative z-30 mb-16">
        <BookingEngine />
      </div>
      
      <div className="px-5 mb-16">
        <div className="bg-black p-8 text-white">
          <div className="relative z-10 text-left">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">Personalized Offer</span>
            <h3 className="text-xl mt-3 leading-tight font-bold whitespace-pre-line">
              {isLoggedIn ? '오윤기님을 위한\n특별한 멤버십 혜택' : '멤버십 가입하고\n최대 15% 추가 할인받기'}
            </h3>
            <button className="mt-6 text-[10px] font-bold tracking-widest border-b border-white pb-1 uppercase">
              {isLoggedIn ? '나의 혜택 보기' : '멤버십 가입하기'}
            </button>
          </div>
        </div>
      </div>

      <div id="offers">
        <SpecialOffers isPersonalized={isLoggedIn} />
      </div>
      <div className="w-full h-px bg-gray-100 my-16 mx-auto px-5"></div>
      <div id="dining">
        <EventsSection />
      </div>
      <div className="w-full h-px bg-gray-100 my-16 mx-auto px-5"></div>
      <div id="wellness">
        <SpecialPlace />
      </div>
    </>
  );
};

export default Home;
