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
      style={{ background: 'linear-gradient(135deg, #faf7f0 0%, #f5f0e4 40%, #ede5ce 100%)' }}
    >
      {/* Subtle warm background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(200,134,30,0.25) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(246,198,68,0.30) 0%, transparent 70%)' }} />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full opacity-25"
            style={{
              width: `${4 + (i * 2) % 6}px`,
              height: `${4 + (i * 2) % 6}px`,
              top: `${10 + (i * 11) % 80}%`,
              left: `${5 + (i * 13) % 88}%`,
              background: `hsl(${35 + i * 5}, 75%, 58%)`,
              animation: `float ${4 + i % 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Fine grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(150,100,30,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(150,100,30,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">

          {/* Left: Product Image */}
          <div className="flex justify-center items-center order-1 lg:order-none" ref={productRef}>
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, rgba(200,134,30,0.45) 0%, transparent 70%)', transform: 'scale(1.35)' }} />

              {/* Rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-brand-400/20 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-brand-300/15 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              </div>

              {/* Product image */}
              <div className="relative z-10 animate-float">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl relative overflow-hidden flex items-center justify-center p-4 glow-gold group"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(20px)',
                    border: '1.5px solid rgba(255,255,255,0.95)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)'
                  }}>
                  
                  {/* Sugandhit Chai (Background) */}
                  <img
                    src="/herbal-peya.png"
                    alt="Sugandhit Chai"
                    className="absolute w-[60%] h-[60%] object-contain drop-shadow-xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:translate-x-2"
                    style={{ right: '5%', top: '8%', transform: 'rotate(10deg)' }}
                    loading="eager"
                  />

                  {/* Immbo (Foreground focus) */}
                  <img
                    src="https://immbo.in/wp-content/uploads/2025/10/IMMBO-100-Ayurvedic-by-Bharat-Bhaishajya-Shala.png"
                    alt="Immbo Single Pack"
                    className="absolute w-[75%] h-[75%] object-contain drop-shadow-2xl z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:translate-y-1 group-hover:-translate-x-1"
                    style={{ left: '0%', bottom: '2%', transform: 'rotate(-4deg)' }}
                    loading="eager"
                  />
                </div>

                {/* Badges */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold-gradient flex flex-col items-center justify-center shadow-2xl glow-gold-sm animate-bounce-slow">
                  <span className="text-white font-black text-lg leading-none">2</span>
                  <span className="text-white/90 font-bold text-[10px] leading-none">ITEMS</span>
                </div>

                <div className="absolute -bottom-3 -left-4 badge-premium px-4 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200,134,30,0.30)' }}>
                  <span className="text-brand-600 text-xs font-semibold tracking-wider">✦ PREMIUM HERBAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-herbal-500 animate-pulse" />
              <span className="text-herbal-700 text-xs font-semibold tracking-widest uppercase">Ayurvedic Certified</span>
            </div>

            {/* Headline */}
            <div>
              <p className="font-devanagari text-brand-500/80 text-2xl sm:text-3xl font-semibold mb-1">इम्बो और सुगंधित चाय</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-gold">Immbo</span>
                <br />
                <span className="text-slate-900">Combo</span>
              </h1>
              <p className="text-brand-500/70 text-sm tracking-widest uppercase mt-2 font-medium">Immbo + Sugandhit Chai</p>
            </div>

            <div className="divider-light" />

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Experience the ultimate Ayurvedic synergy. This combo pairs <span className="text-brand-600 font-medium">Immbo</span> (Single Pack) for comprehensive well-being with our aromatic <span className="text-brand-600 font-medium">Sugandhit Chai (25g)</span> to soothe and refresh your senses.
            </p>

            {/* Stars & Net Weight */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-spice-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-slate-500 text-sm ml-1">(4.9)</span>
              </div>
              <span className="text-ivory-400">|</span>
              <span className="text-slate-500 text-sm">Contents: <strong className="text-slate-700">Immbo Pack + 25g Chai</strong></span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-gradient-gold font-serif">₹289</span>
              <span className="text-slate-400 text-sm line-through">₹345</span>
              <span className="text-herbal-700 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(22,163,74,0.10)', border: '1px solid rgba(22,163,74,0.25)' }}>Save 16%</span>
            </div>
            <p className="text-slate-400 text-xs -mt-4">Inclusive of all taxes (GST)</p>

            {/* Quantity & Add to Cart */}
            <div id="order" className="flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full overflow-hidden border border-ivory-400/60"
                style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-11 h-11 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:bg-ivory-200 transition-all text-xl font-bold"
                >−</button>
                <span className="w-10 text-center text-slate-800 font-bold text-lg">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-11 h-11 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:bg-ivory-200 transition-all text-xl font-bold"
                >+</button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 sm:flex-none relative px-8 py-3.5 rounded-full font-bold text-base tracking-wide transition-all duration-300 overflow-hidden ${
                  added
                    ? 'bg-herbal-600 text-white scale-95'
                    : 'bg-gold-gradient text-white hover:shadow-[0_0_30px_rgba(200,134,30,0.45)] hover:scale-105'
                }`}
              >
                {added ? (
                  <span className="flex items-center gap-2">✓ Added!</span>
                ) : (
                  <>
                    <span className="relative z-10">Add to Cart — ₹{289 * qty}</span>
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
                <div key={text} className="flex items-center gap-2 text-slate-500 text-xs font-medium">
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
        <span className="text-brand-400/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-400/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
