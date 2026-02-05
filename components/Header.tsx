
import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
  title: string;
  showCart?: boolean;
  showShare?: boolean;
  cartCount?: number;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  isMenuOpen, 
  title, 
  showCart, 
  showShare, 
  cartCount,
  onLoginClick,
  isLoggedIn
}) => {
  return (
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 w-[375px] z-[110] flex justify-between items-center px-6 py-5 transition-all duration-300 ${isMenuOpen ? 'bg-white text-black' : 'bg-white text-black border-b border-gray-100'}`}>
      <div className="flex items-center gap-4">
        <button className="p-1" onClick={onMenuClick}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <path d="M0 1H24M0 9H18M0 17H24" stroke="black" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      <div 
        className="text-[11px] tracking-[0.3em] font-bold cursor-pointer text-center flex-1 uppercase"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {title}
      </div>

      <div className="flex items-center gap-3 min-w-[24px] justify-end">
        {onLoginClick && (
          <button onClick={onLoginClick} className="p-1">
             <div className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all ${isLoggedIn ? 'bg-black border-black' : ''}`}>
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isLoggedIn ? "white" : "black"} strokeWidth="2">
                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
               </svg>
             </div>
          </button>
        )}
        {showShare && (
          <button className="p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>
            </svg>
          </button>
        )}
        {showCart && (
          <button className="p-1 relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount ? (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            ) : null}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
