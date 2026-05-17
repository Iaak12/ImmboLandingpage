import React from 'react';

const details = [
  { label: 'Product Name', value: 'Herbal Peya (25 Cups)', icon: '🍵' },
  { label: 'Also Known As', value: 'Sugandhit Chai', icon: '📛' },
  { label: 'Net Weight', value: '25 g', icon: '⚖️' },
  { label: 'Servings', value: '25 cups per pack', icon: '☕' },
  { label: 'MRP', value: '₹125/- (Incl. all taxes)', icon: '💰' },
  { label: 'Shelf Life', value: '24 months from MFG', icon: '📅' },
];

const ProductDetails = () => {
  return (
    <section id="details" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0f05 0%, #0d0905 100%)' }}>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual card */}
          <div className="relative">
            <div className="glass-card-warm rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-10"
                style={{ background: 'radial-gradient(circle, #f6c644 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-6">
                  ✦ Product Details
                </div>

                <div className="space-y-4">
                  {details.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-brand-700/20 transition-all">
                        {icon}
                      </div>
                      <div className="flex-1 flex items-center justify-between py-3 border-b border-brand-800/30 last:border-0">
                        <span className="text-brand-300/50 text-sm">{label}</span>
                        <span className="text-white font-semibold text-sm text-right">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price highlight */}
                <div className="mt-8 rounded-2xl overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg, rgba(246,198,68,0.1) 0%, rgba(184,101,20,0.08) 100%)', border: '1px solid rgba(246,198,68,0.2)' }}>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-brand-300/60 text-xs uppercase tracking-wider mb-1">Total Price</p>
                      <p className="font-serif text-3xl font-black text-gradient-gold">₹125</p>
                      <p className="text-brand-400/40 text-xs mt-1">Inclusive of all taxes</p>
                    </div>
                    <div className="text-right">
                      <div className="badge-premium rounded-xl px-3 py-2">
                        <p className="text-herbal-400 text-xs font-semibold">FREE</p>
                        <p className="text-herbal-400 font-bold text-sm">Shipping*</p>
                        <p className="text-brand-400/40 text-[10px]">On orders ₹2000+</p>
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
              <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
                ✦ What's Inside
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Premium</span>{' '}
                <span className="text-gradient-gold">Blend</span>
                <br />
                <span className="text-white text-3xl font-semibold">Crafted With Care</span>
              </h2>
              <p className="text-brand-200/60 text-base leading-relaxed mb-6">
                An aromatic tea blend infused with fragrant spices — <strong className="text-brand-300">Mace, Dry Ginger, Indian Madder</strong> (Rubia cordifolia), <strong className="text-brand-300">Black Pepper, Black Cardamom, Cinnamon, Betel Leaves, Malabar Nut Leaves</strong> (Adhatoda vasica), and <strong className="text-brand-300">Basil Leaves</strong> (Tulsi).
              </p>
            </div>

            {/* How to Brew */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 text-sm font-bold">☕</span>
                How to Brew
              </h3>
              {[
                { step: '01', text: 'Add 1 teaspoon (~1g) of Herbal Peya to a cup.' },
                { step: '02', text: 'Pour 200ml of freshly boiled water.' },
                { step: '03', text: 'Steep for 3-5 minutes and strain.' },
                { step: '04', text: 'Enjoy plain or with a dash of honey.' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4 group">
                  <span className="text-brand-600/40 font-mono text-xs mt-1 flex-shrink-0 group-hover:text-brand-400/60 transition-colors">{step}</span>
                  <p className="text-brand-200/60 text-sm leading-relaxed group-hover:text-brand-200/80 transition-colors">{text}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'FSSAI Approved', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', color: '#4ade80' },
                { label: 'Ayurvedic Certified', bg: 'rgba(228,136,12,0.1)', border: 'rgba(228,136,12,0.3)', color: '#e8880c' },
                { label: 'Lab Tested', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.3)', color: '#818cf8' },
                { label: 'GMP Certified', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', color: '#fbbf24' },
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
