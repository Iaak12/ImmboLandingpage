import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-ivory-300/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center glow-gold-sm">
              <span className="text-white font-serif font-bold text-sm">I</span>
            </div>
            <div>
              <span className="text-gradient-gold font-serif font-bold text-xl tracking-wide">IMMBO</span>
              <p className={`text-[9px] tracking-widest uppercase hidden sm:block transition-colors duration-500 ${isScrolled ? 'text-brand-500/70' : 'text-brand-600/60'}`}>Ayurvedic Excellence</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Benefits', 'Ingredients', 'Reviews'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 text-sm font-medium tracking-wide relative group ${isScrolled ? 'text-slate-700 hover:text-brand-600' : 'text-slate-800 hover:text-brand-600'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#order"
              className="relative px-6 py-2.5 rounded-full bg-gold-gradient text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,134,30,0.45)] hover:scale-105 active:scale-95"
            >
              Order Now — ₹125
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg ${isScrolled ? 'bg-ivory-200' : 'glass-card'}`}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-slate-800'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-slate-800'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-slate-800'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 mt-2 space-y-3 border border-ivory-300 shadow-silk-lg">
            {['Product', 'Benefits', 'Ingredients', 'Reviews'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-700 hover:text-brand-600 py-2 px-3 rounded-lg hover:bg-ivory-200 transition-all duration-200 font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 px-6 rounded-full bg-gold-gradient text-white font-bold text-sm mt-2"
            >
              Order Now — ₹125
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
