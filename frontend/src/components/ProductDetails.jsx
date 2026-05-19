import React from 'react';

const details = [
  { label: 'Product Name', value: 'Immbo & Sugandhit Chai Combo', icon: '🍵' },
  { label: 'Main Focus', value: 'Immbo (Single Pack)', icon: '✨' },
  { label: 'Contents', value: 'Immbo Pack + Chai 25g', icon: '⚖️' },
  { label: 'Included', value: 'Sugandhit Chai (25 Cups)', icon: '☕' },
  { label: 'Combo Price', value: '₹289/- (Incl. all taxes)', icon: '💰' },
  { label: 'Shelf Life', value: '24 months from MFG', icon: '📅' },
];

const ProductDetails = () => {
  return (
    /* ── LIGHT section ── */
    <section id="details" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf7f0 0%, #fdfcf8 100%)' }}>

      {/* Warm accent orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,134,30,0.45) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Details card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              style={{ boxShadow: '0 16px 56px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.05)' }}>

              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-15"
                style={{ background: 'radial-gradient(circle, rgba(246,198,68,0.6) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-600 text-xs font-semibold tracking-widest uppercase mb-6">
                  ✦ Product Details
                </div>

                <div className="space-y-4">
                  {details.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all"
                        style={{ background: 'rgba(200,134,30,0.08)', border: '1px solid rgba(200,134,30,0.15)' }}>
                        {icon}
                      </div>
                      <div className="flex-1 flex items-center justify-between py-3 border-b border-ivory-400/60 last:border-0">
                        <span className="text-slate-500 text-sm">{label}</span>
                        <span className="text-slate-800 font-semibold text-sm text-right">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price highlight */}
                <div className="mt-8 rounded-2xl overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg, rgba(200,134,30,0.10) 0%, rgba(246,198,68,0.07) 100%)', border: '1px solid rgba(200,134,30,0.22)' }}>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Total Price</p>
                      <p className="font-serif text-3xl font-black text-gradient-gold">₹289</p>
                      <p className="text-slate-400 text-xs mt-1">Inclusive of all taxes</p>
                    </div>
                    <div className="text-right">
                      <div className="badge-premium rounded-xl px-3 py-2">
                        <p className="text-herbal-700 text-xs font-semibold">FREE</p>
                        <p className="text-herbal-700 font-bold text-sm">Shipping*</p>
                        <p className="text-slate-400 text-[10px]">On orders ₹2000+</p>
                      </div>
                    </div>
                  </div>
                  <div className="shimmer-bg absolute inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-600 text-xs font-semibold tracking-widest uppercase mb-4">
                ✦ What's Inside
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                <span className="text-slate-900">Ultimate</span>{' '}
                <span className="text-gradient-gold">Synergy</span>
                <br />
                <span className="text-slate-800 text-3xl font-semibold">For Your Wellness</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our premium combo pairs the powerful health benefits of <strong className="text-brand-600">Immbo</strong> with our classic aromatic tea blend. The tea is infused with fragrant spices — <strong className="text-brand-600">Mace, Dry Ginger, Indian Madder</strong>, <strong className="text-brand-600">Black Pepper, Black Cardamom, Cinnamon, Betel Leaves, Malabar Nut Leaves</strong>, and <strong className="text-brand-600">Basil Leaves</strong>.
              </p>
            </div>

            {/* How to Brew */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-white text-sm font-bold">☕</span>
                How to Brew
              </h3>
              {[
                { step: '01', text: 'Add 1 teaspoon (~1g) of Herbal Peya to a cup.' },
                { step: '02', text: 'Pour 200ml of freshly boiled water.' },
                { step: '03', text: 'Steep for 3-5 minutes and strain.' },
                { step: '04', text: 'Enjoy plain or with a dash of honey.' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4 group">
                  <span className="text-brand-400/60 font-mono text-xs mt-1 flex-shrink-0 group-hover:text-brand-500 transition-colors">{step}</span>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">{text}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'FSSAI Approved', bg: 'rgba(22,163,74,0.09)', border: 'rgba(22,163,74,0.28)', color: '#15803d' },
                { label: 'Ayurvedic Certified', bg: 'rgba(200,134,30,0.09)', border: 'rgba(200,134,30,0.28)', color: '#a66514' },
                { label: 'Lab Tested', bg: 'rgba(79,70,229,0.09)', border: 'rgba(79,70,229,0.25)', color: '#4338ca' },
                { label: 'GMP Certified', bg: 'rgba(217,119,6,0.09)', border: 'rgba(217,119,6,0.25)', color: '#b45309' },
              ].map(({ label, bg, border, color }) => (
                <div key={label}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                  style={{ background: bg, border: `1px solid ${border}`, color }}>
                  ✓ {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
