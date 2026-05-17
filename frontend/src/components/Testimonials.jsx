import React, { useState } from 'react';

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'The aroma itself is therapeutic! I started drinking Herbal Peya every morning and my seasonal sneezing has reduced dramatically. Absolutely love this natural blend.',
    avatar: 'PS',
    verified: true,
    date: 'March 2025',
  },
  {
    name: 'Rajesh Gupta',
    location: 'Mumbai',
    rating: 5,
    text: 'Being a chai lover, I was sceptical about herbal teas. But this Sugandhit Chai won me over — rich flavour, warming spices, and I feel so refreshed. Reordering now!',
    avatar: 'RG',
    verified: true,
    date: 'April 2025',
  },
  {
    name: 'Ananya Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Recommended by my Ayurvedic doctor. The Tulsi and Malabar Nut leaves combo works wonders for my chronic throat issues. Premium quality at a great price!',
    avatar: 'AP',
    verified: true,
    date: 'February 2025',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    rating: 4,
    text: 'Great product — fast shipping and quality packaging. The taste is bold and spicy, exactly what I needed during winter. Would pair nicely with some jaggery.',
    avatar: 'VS',
    verified: true,
    date: 'January 2025',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0905 0%, #120b03 100%)' }}>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e8880c 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ Customer Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Real </span>
            <span className="text-gradient-gold">Reviews</span>
          </h2>
          <p className="text-brand-200/50 max-w-xl mx-auto text-base leading-relaxed">
            Thousands of happy customers across India have made Herbal Peya their daily ritual.
          </p>
          <div className="divider-gold mt-8 max-w-xs mx-auto" />
        </div>

        {/* Featured Review */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="glass-card-warm rounded-3xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500">
            <div className="absolute top-6 right-8 text-brand-600/20 font-serif text-8xl leading-none pointer-events-none select-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[active].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-spice-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-brand-100/80 text-lg lg:text-xl leading-relaxed font-light mb-6 relative z-10">
              {reviews[active].text}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-dark-900 text-sm">
                {reviews[active].avatar}
              </div>
              <div>
                <p className="text-white font-semibold">{reviews[active].name}</p>
                <p className="text-brand-400/50 text-sm">{reviews[active].location} · {reviews[active].date}</p>
              </div>
              {reviews[active].verified && (
                <div className="ml-auto badge-premium px-3 py-1 rounded-full">
                  <span className="text-herbal-400 text-xs font-semibold">✓ Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Review thumbnails */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 ${
                active === i
                  ? 'bg-gold-gradient text-dark-900 shadow-[0_0_20px_rgba(228,162,58,0.4)] scale-105'
                  : 'glass-card text-brand-200/60 hover:glass-card-warm'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${active === i ? 'bg-dark-900/20 text-dark-900' : 'bg-brand-700/30 text-brand-300'}`}>
                {r.avatar}
              </div>
              <span className="text-sm font-medium hidden sm:block">{r.name}</span>
            </button>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center glass-card rounded-2xl py-6 px-8 max-w-sm mx-auto">
          <div className="font-serif text-5xl font-black text-gradient-gold mb-2">4.9</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-spice-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-brand-300/50 text-xs">Based on 200+ verified reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
