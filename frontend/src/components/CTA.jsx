import React, { useState } from 'react';

const CTA = () => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleOrder = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    /* ── DARK section — grand finale CTA ── */
    <section className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f1623 0%, #18223a 50%, #0f1623 100%)' }}>

      {/* Big glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full blur-3xl opacity-12"
          style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 60%)' }} />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(200,134,30,0.6) 1px, transparent 1px), linear-gradient(-45deg, rgba(200,134,30,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 badge-premium-dark px-4 py-2 rounded-full text-brand-300 text-xs font-semibold tracking-widest uppercase mb-6">
          ✦ Limited Time Offer
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Start Your</span>
          <br />
          <span className="text-gradient-gold">Wellness Journey</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl font-semibold">Today</span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Experience the ancient wisdom of Ayurveda in every cup. Order now and
          feel the difference with your first sip.
        </p>

        {/* Pricing summary */}
        <div className="glass-card-warm-dark rounded-3xl p-8 max-w-md mx-auto mb-8 relative overflow-hidden">
          <div className="shimmer-bg absolute inset-0" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Combo Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-black text-gradient-gold">₹289</span>
                  <span className="text-slate-600 text-sm line-through">₹345</span>
                </div>
                <p className="text-slate-500 text-xs">Immbo + 25g Chai Included</p>
              </div>
              <div className="badge-premium-dark rounded-2xl px-4 py-3 text-center">
                <p className="text-herbal-400 font-black text-2xl leading-none">16%</p>
                <p className="text-herbal-400/70 text-[10px] uppercase tracking-wider">OFF</p>
              </div>
            </div>

            {/* Qty + Total */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center glass-card-dark rounded-full overflow-hidden border border-slate-600/40">
                <button onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 text-slate-300 hover:text-white hover:bg-slate-700/40 transition-all font-bold text-lg">−</button>
                <span className="w-10 text-center text-white font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 text-slate-300 hover:text-white hover:bg-slate-700/40 transition-all font-bold text-lg">+</button>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-xs">Total</p>
                <p className="font-serif text-2xl font-bold text-white">₹{289 * qty}</p>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className={`w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-300 relative overflow-hidden ${
                added
                  ? 'bg-herbal-600 text-white scale-98'
                  : 'bg-gold-gradient text-white hover:shadow-[0_0_40px_rgba(200,134,30,0.60)] hover:scale-105 active:scale-95'
              }`}
            >
              {added ? '✓ Order Confirmed! We\'ll be in touch.' : `Order Now — ₹${289 * qty}`}
            </button>

            <p className="text-slate-600 text-xs mt-3">Secure checkout · Free returns · 100% Ayurvedic</p>
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
            <div key={text} className="flex items-center gap-2 text-slate-500 text-sm">
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
