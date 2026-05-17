import React, { useState } from 'react';

const ingredients = [
  { name: 'Mace', hindi: 'जावित्री', emoji: '🌺', desc: 'Anti-inflammatory, aids digestion, warming spice from nutmeg family.', color: '#e8880c' },
  { name: 'Dry Ginger', hindi: 'सोंठ', emoji: '🫚', desc: 'Powerful digestive stimulant, reduces inflammation and nausea.', color: '#d4851c' },
  { name: 'Indian Madder', hindi: 'मंजिष्ठा', emoji: '🔴', desc: 'Rubia cordifolia – blood purifier with potent anti-allergic properties.', color: '#b86514' },
  { name: 'Black Pepper', hindi: 'काली मिर्च', emoji: '🌑', desc: 'Enhances bioavailability of herbs, anti-microbial & antioxidant.', color: '#2d2d2d' },
  { name: 'Black Cardamom', hindi: 'बड़ी इलायची', emoji: '🫛', desc: 'Detoxifying, anti-inflammatory, supports respiratory health.', color: '#4a5568' },
  { name: 'Cinnamon', hindi: 'दालचीनी', emoji: '🪵', desc: 'Blood sugar regulation, antimicrobial and warming properties.', color: '#8B4513' },
  { name: 'Betel Leaves', hindi: 'पान', emoji: '🌿', desc: 'Antibacterial, antifungal, and aids in oral and digestive health.', color: '#22c55e' },
  { name: 'Malabar Nut Leaves', hindi: 'वासा', emoji: '🍃', desc: 'Adhatoda vasica – classical herb for bronchitis and respiratory ailments.', color: '#15803d' },
  { name: 'Basil Leaves', hindi: 'तुलसी', emoji: '🌱', desc: 'Sacred Tulsi – immuno-modulator, adaptogen, anti-stress herb.', color: '#16a34a' },
];

const Ingredients = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="ingredients" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0905 0%, #1a0f05 100%)' }}>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(228,162,58,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ The Formula
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">9 Sacred </span>
            <span className="text-gradient-gold">Botanicals</span>
          </h2>
          <p className="text-brand-200/50 max-w-xl mx-auto text-base leading-relaxed">
            Each ingredient handpicked from the rich biodiversity of India for its unique therapeutic virtue.
          </p>
          <div className="divider-gold mt-8 max-w-xs mx-auto" />
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              onClick={() => setActive(active === i ? null : i)}
              className="glass-card rounded-2xl p-5 cursor-pointer group transition-all duration-400 hover:border-brand-600/30"
              style={{
                borderColor: active === i ? `${ing.color}40` : undefined,
                background: active === i ? `${ing.color}08` : undefined,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${ing.color}20`, border: `1px solid ${ing.color}30` }}
                >
                  {ing.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                      {ing.name}
                    </h3>
                    <span className={`text-brand-400/40 text-lg transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}>⌄</span>
                  </div>
                  <p className="font-devanagari text-brand-400/50 text-sm">{ing.hindi}</p>
                </div>
              </div>

              {/* Expanded desc */}
              <div className={`overflow-hidden transition-all duration-400 ${active === i ? 'max-h-24 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${ing.color}40, transparent)` }} />
                <p className="text-brand-200/60 text-sm leading-relaxed">{ing.desc}</p>
              </div>

              {/* Small indicator bar */}
              <div
                className="mt-3 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${ing.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center glass-card-warm rounded-2xl py-5 px-6 max-w-2xl mx-auto">
          <p className="text-brand-300/60 text-sm leading-relaxed">
            <span className="text-brand-300 font-semibold">*Herbal Peya</span>, formally known as{' '}
            <span className="font-devanagari text-brand-300">सुगंधित चाय</span> (Sugandhit Chai) — an authentic
            Ayurvedic formulation by Bharat Bhaisajya Shala Pvt. Ltd.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
