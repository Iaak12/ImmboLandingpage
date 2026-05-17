import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const productRef = useRef(null);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="product"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 65% 50%, #2a1a08 0%, #120b03 40%, #0d0905 100%)' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #f6c644 0%, transparent 70%)' }} />
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-brand-400/40 animate-bounce-slow" />
        <div className="absolute top-32 right-16 w-1.5 h-1.5 rounded-full bg-spice-400/30 animate-bounce-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-brand-300/50 animate-bounce-slow" style={{ animationDelay: '2s' }} />
        {/* Spice particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              background: `hsl(${30 + Math.random() * 20}, 80%, 60%)`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(228,162,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(228,162,58,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">

          {/* Left: Product Image */}
          <div className="flex justify-center items-center order-1 lg:order-none" ref={productRef}>
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 70%)', transform: 'scale(1.3)' }} />

              {/* Rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-brand-600/20 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-brand-500/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              </div>

              {/* Product image container */}
              <div className="relative z-10 animate-float">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl glass-card-warm overflow-hidden flex items-center justify-center glow-gold p-4">
                  <img
                    src="/herbal-peya.png"
                    alt="Herbal Peya - Sugandhit Chai by Immbo"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    loading="eager"
                  />
                </div>

                {/* Badge overlays */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold-gradient flex flex-col items-center justify-center shadow-2xl glow-gold-sm animate-bounce-slow">
                  <span className="text-dark-900 font-black text-lg leading-none">25</span>
                  <span className="text-dark-900 font-bold text-[10px] leading-none">CUPS</span>
                </div>

                <div className="absolute -bottom-3 -left-4 badge-premium px-4 py-2 rounded-full">
                  <span className="text-brand-300 text-xs font-semibold tracking-wider">✦ PREMIUM HERBAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-herbal-400 animate-pulse" />
              <span className="text-herbal-400 text-xs font-semibold tracking-widest uppercase">Ayurvedic Certified</span>
            </div>

            {/* Headline */}
            <div>
              <p className="font-devanagari text-brand-300/70 text-2xl sm:text-3xl font-semibold mb-1">सुगंधित चाय</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-gold">Herbal</span>
                <br />
                <span className="text-white">Peya</span>
              </h1>
              <p className="text-brand-400/60 text-sm tracking-widest uppercase mt-2 font-medium">Formally known as Sugandhit Chai</p>
            </div>

            <div className="divider-gold" />

            {/* Description */}
            <p className="text-brand-200/70 text-base sm:text-lg leading-relaxed font-light">
              An aromatic tea blend infused with{' '}
              <span className="text-brand-300 font-medium">fragrant spices</span> — a time-honoured
              Ayurvedic recipe crafted to soothe, refresh and fortify your senses with every sip.
            </p>

            {/* Stars & Net Weight */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-spice-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-brand-300/60 text-sm ml-1">(4.9)</span>
              </div>
              <span className="text-brand-600">|</span>
              <span className="text-brand-300/60 text-sm">Net Weight: <strong className="text-brand-300">25g</strong> (25 Servings)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-gradient-gold font-serif">₹125</span>
              <span className="text-brand-400/50 text-sm line-through">₹180</span>
              <span className="badge-premium text-herbal-400 text-xs font-bold px-3 py-1 rounded-full">Save 31%</span>
            </div>
            <p className="text-brand-400/40 text-xs -mt-4">Inclusive of all taxes (GST)</p>

            {/* Quantity & Add to Cart */}
            <div id="order" className="flex flex-wrap items-center gap-4">
              <div className="flex items-center glass-card-warm rounded-full overflow-hidden border border-brand-600/20">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-11 h-11 flex items-center justify-center text-brand-300 hover:text-white hover:bg-brand-700/30 transition-all text-xl font-bold"
                >−</button>
                <span className="w-10 text-center text-white font-bold text-lg">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-11 h-11 flex items-center justify-center text-brand-300 hover:text-white hover:bg-brand-700/30 transition-all text-xl font-bold"
                >+</button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 sm:flex-none relative px-8 py-3.5 rounded-full font-bold text-base tracking-wide transition-all duration-300 overflow-hidden ${
                  added
                    ? 'bg-herbal-600 text-white scale-95'
                    : 'bg-gold-gradient text-dark-900 hover:shadow-[0_0_30px_rgba(228,162,58,0.5)] hover:scale-105'
                }`}
              >
                {added ? (
                  <span className="flex items-center gap-2">✓ Added!</span>
                ) : (
                  <>
                    <span className="relative z-10">Add to Cart — ₹{125 * qty}</span>
                    <div className="absolute inset-0 shimmer-bg" />
                  </>
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: '🌿', text: 'Pure Herbal' },
                { icon: '🔬', text: 'Clinically Tested' },
                { icon: '✅', text: 'No Side Effects' },
                { icon: '🚚', text: 'Pan India Delivery' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-brand-300/60 text-xs font-medium">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-brand-400/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-400/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
