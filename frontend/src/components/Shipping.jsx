import React from 'react';

const Shipping = () => {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #120b03 0%, #1a0f05 100%)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
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
                  ? 'bg-gold-gradient relative overflow-hidden shadow-[0_0_30px_rgba(228,162,58,0.25)]'
                  : 'glass-card hover:glass-card-warm'
              }`}
            >
              {highlight && <div className="shimmer-bg absolute inset-0" />}
              <div className={`relative z-10 text-4xl mb-4`}>{icon}</div>
              <h3 className={`relative z-10 font-serif text-lg font-bold mb-2 ${highlight ? 'text-dark-900' : 'text-white'}`}>
                {title}
              </h3>
              <p className={`relative z-10 text-sm leading-relaxed ${highlight ? 'text-dark-700' : 'text-brand-200/50'}`}>
                {desc}
              </p>
              {highlight && (
                <div className="relative z-10 mt-4 inline-block bg-dark-900/20 text-dark-900 font-bold text-xs px-4 py-2 rounded-full">
                  On orders above ₹2,000
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DTDC tracking */}
        <div className="mt-10 glass-card-warm rounded-2xl py-5 px-6 max-w-xl mx-auto text-center">
          <p className="text-brand-300/60 text-sm mb-3">Track your order via DTDC</p>
          <a
            href="https://www.dtdc.com/track-your-shipment/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-600/30 text-brand-300 text-sm font-semibold hover:bg-brand-800/20 hover:border-brand-500/50 transition-all duration-300"
          >
            <span>🚚</span> Track Shipment
            <span className="text-brand-600">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
