import React, { useEffect, useRef } from 'react';

const benefits = [
  {
    icon: '⚡',
    title: 'Rapid Relief',
    desc: 'Feel the difference within minutes of your first cup.',
  },
  {
    icon: '🛡️',
    title: 'Immunity Boost',
    desc: 'Fortifies your natural defence against allergens & infections.',
  },
  {
    icon: '🌬️',
    title: 'Clear Breathing',
    desc: 'Reduces nasal congestion & respiratory irritation naturally.',
  },
  {
    icon: '⚖️',
    title: 'Dosha Balance',
    desc: 'Balances Kapha & Pitta doshas linked to allergies & inflammation.',
  },
  {
    icon: '🧬',
    title: 'Molecular Action',
    desc: 'Modulates immune signalling pathways at a cellular level.',
  },
  {
    icon: '😴',
    title: 'Non-Sedative',
    desc: 'Steroid-free, non-drowsy formula safe for daily long-term use.',
  },
];

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.card-reveal').forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, #0d0905 0%, #120b03 50%, #0d0905 100%)' }}>

      {/* Decorative orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ Why Herbal Peya
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Nature's </span>
            <span className="text-gradient-gold">Finest Blend</span>
          </h2>
          <p className="text-brand-200/50 max-w-xl mx-auto text-base leading-relaxed">
            Twelve centuries of Ayurvedic wisdom, bottled in one aromatic cup.
          </p>
          <div className="divider-gold mt-8 max-w-xs mx-auto" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="card-reveal glass-card rounded-2xl p-6 lg:p-8 group hover:glass-card-warm transition-all duration-500 hover:border-brand-600/30 hover:-translate-y-1 cursor-default"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-brand-200/50 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 w-8 h-0.5 bg-gold-gradient rounded-full group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '34+', label: 'Years of Excellence' },
            { num: '9', label: 'Power Ingredients' },
            { num: '25', label: 'Servings per Pack' },
            { num: '100%', label: 'Ayurvedic & Natural' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center glass-card rounded-2xl py-6 px-4 hover:glass-card-warm transition-all duration-300">
              <div className="font-serif text-3xl sm:text-4xl font-black text-gradient-gold mb-1">{num}</div>
              <div className="text-brand-300/50 text-xs uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
