
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-8 pt-20 pb-24 border-t border-gray-900">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 font-bold">
          <button className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase py-5 border-b border-white/5">
            Customer Service
            <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase py-5 border-b border-white/5">
            Terms of Use
            <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase py-5 border-b border-white/5 text-gray-400">
            Privacy Policy
            <svg className="w-3 h-3 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex gap-6 opacity-40">
          {['IG', 'FB', 'YT'].map(sns => (
            <div key={sns} className="text-[10px] font-bold tracking-widest border border-white/20 px-3 py-1 uppercase">
              {sns}
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-8 opacity-30">
          <div className="text-[9px] uppercase tracking-[0.3em] font-bold leading-relaxed">
            <p>Paradise Segasammy Co., Ltd.</p>
            <p className="mt-1">186, Yeongjonghaeannam-ro 321beon-gil, Jung-gu, Incheon</p>
          </div>
          
          <div className="text-[8px] uppercase tracking-[0.4em] font-bold leading-relaxed">
            <p>© 2025 PARADISE SEGASAMMY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
