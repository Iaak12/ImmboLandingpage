import React, { useState } from 'react';

const CTA = () => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleOrder = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0905 0%, #1a0e04 50%, #0d0905 100%)' }}>

      {/* Big glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 60%)' }} />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(228,162,58,0.5) 1px, transparent 1px), linear-gradient(-45deg, rgba(228,162,58,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-6">
          ✦ Limited Time Offer
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Start Your</span>
          <br />
          <span className="text-gradient-gold">Wellness Journey</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl font-semibold">Today</span>
        </h2>

        <p className="text-brand-200/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Experience the ancient wisdom of Ayurveda in every cup. Order now and
          feel the difference with your first sip.
        </p>

        {/* Pricing summary */}
        <div className="glass-card-warm rounded-3xl p-8 max-w-md mx-auto mb-8 relative overflow-hidden">
          <div className="shimmer-bg absolute inset-0" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="text-brand-300/50 text-xs uppercase tracking-wider mb-1">Price per Pack</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-black text-gradient-gold">₹125</span>
                  <span className="text-brand-500/50 text-sm line-through">₹180</span>
                </div>
                <p className="text-brand-400/40 text-xs">25 Servings Included</p>
              </div>
              <div className="badge-premium rounded-2xl px-4 py-3 text-center">
                <p className="text-herbal-400 font-black text-2xl leading-none">31%</p>
                <p className="text-herbal-400/60 text-[10px] uppercase tracking-wider">OFF</p>
              </div>
            </div>

            {/* Qty + Total */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center glass-card rounded-full overflow-hidden border border-brand-700/30">
                <button onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 text-brand-300 hover:text-white hover:bg-brand-700/30 transition-all font-bold text-lg">−</button>
                <span className="w-10 text-center text-white font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 text-brand-300 hover:text-white hover:bg-brand-700/30 transition-all font-bold text-lg">+</button>
              </div>
              <div className="text-right">
                <p className="text-brand-300/50 text-xs">Total</p>
                <p className="font-serif text-2xl font-bold text-white">₹{125 * qty}</p>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className={`w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-300 relative overflow-hidden ${
                added
                  ? 'bg-herbal-600 text-white scale-98'
                  : 'bg-gold-gradient text-dark-900 hover:shadow-[0_0_40px_rgba(228,162,58,0.6)] hover:scale-105 active:scale-95'
              }`}
            >
              {added ? '✓ Order Confirmed! We\'ll be in touch.' : `Order Now — ₹${125 * qty}`}
            </button>

            <p className="text-brand-400/30 text-xs mt-3">Secure checkout · Free returns · 100% Ayurvedic</p>
          </div>
        </div>

        {/* Reassurance row */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            { icon: '🔒', text: 'Secure Payment' },
            { icon: '↩️', text: 'Easy Returns' },
            { icon: '🌿', text: '100% Natural' },
            { icon: '📞', text: '24/7 Support' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-brand-300/40 text-sm">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
