import React from 'react';

const Shipping = () => {
  return (
    /* ── DARK section ── */
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #18223a 0%, #0f1623 100%)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 badge-premium-dark px-4 py-2 rounded-full text-brand-300 text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ Delivery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">
            <span className="text-white">Shipping </span>
            <span className="text-gradient-gold">Policy</span>
          </h2>
          <div className="divider-gold mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: '🇮🇳',
              title: 'Pan India Delivery',
              desc: 'We deliver to every corner of India — metros, tier-2 cities, and remote areas alike.',
              highlight: false,
            },
            {
              icon: '🎁',
              title: 'Free Shipping',
              desc: 'Enjoy free shipping on all orders above ₹2,000. Stock up and save!',
              highlight: true,
            },
            {
              icon: '📦',
              title: 'Secure Packaging',
              desc: 'Every order is carefully packed to preserve freshness and prevent damage in transit.',
              highlight: false,
            },
          ].map(({ icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? 'bg-gold-gradient relative overflow-hidden shadow-[0_0_40px_rgba(200,134,30,0.30)]'
                  : 'glass-card-dark hover:glass-card-warm-dark'
              }`}
            >
              {highlight && <div className="shimmer-bg absolute inset-0" />}
              <div className={`relative z-10 text-4xl mb-4`}>{icon}</div>
              <h3 className={`relative z-10 font-serif text-lg font-bold mb-2 ${highlight ? 'text-white' : 'text-white'}`}>
                {title}
              </h3>
              <p className={`relative z-10 text-sm leading-relaxed ${highlight ? 'text-white/85' : 'text-slate-400'}`}>
                {desc}
              </p>
              {highlight && (
                <div className="relative z-10 mt-4 inline-block bg-white/20 text-white font-bold text-xs px-4 py-2 rounded-full backdrop-blur-sm">
                  On orders above ₹2,000
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DTDC tracking */}
        <div className="mt-10 glass-card-warm-dark rounded-2xl py-5 px-6 max-w-xl mx-auto text-center">
          <p className="text-slate-400 text-sm mb-3">Track your order via DTDC</p>
          <a
            href="https://www.dtdc.com/track-your-shipment/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-500/30 text-brand-300 text-sm font-semibold hover:bg-brand-700/20 hover:border-brand-400/50 transition-all duration-300"
          >
            <span>🚚</span> Track Shipment
            <span className="text-brand-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
