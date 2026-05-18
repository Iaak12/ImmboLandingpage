import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/60"
      style={{ background: '#080e1a' }}>

      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(200,134,30,0.6) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center glow-gold-sm">
                <span className="text-white font-serif font-black text-base">I</span>
              </div>
              <div>
                <span className="text-gradient-gold font-serif font-bold text-2xl tracking-wide">IMMBO</span>
                <p className="text-slate-500 text-[10px] tracking-widest uppercase">Ayurvedic Excellence</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Herbal Peya (Sugandhit Chai) — a premium Ayurvedic tea blend from the house of Bharat Bhaisajya Shala,
              crafted for daily wellness and aromatic indulgence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/yesimmbo', icon: 'f' },
                { name: 'Instagram', href: 'https://www.instagram.com/immbo.in', icon: '📷' },
                { name: 'YouTube', href: 'https://www.youtube.com/@BBSAyurx', icon: '▶' },
                { name: 'X / Twitter', href: 'https://x.com/BBSAyurx', icon: '𝕏' },
              ].map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-full glass-card-dark flex items-center justify-center text-slate-400 hover:text-brand-300 hover:glass-card-warm-dark transition-all duration-300 text-sm font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: 'https://immbo.in/' },
                { label: 'Shop', href: 'https://immbo.in/shop/' },
                { label: 'Studies', href: 'https://immbo.in/studies/' },
                { label: 'Diagnose Yourself', href: 'https://immbo.in/diagnose-yourself/' },
                { label: 'Feedback', href: 'https://immbo.in/feedback/' },
                { label: 'Contact Us', href: 'https://immbo.in/contact-us/' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 hover:text-brand-300 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 text-brand-500">→</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-600 text-xs mb-1">Address</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  38 Ratanpura, Nawabganj Road,<br />
                  Gadarpur, Udham Singh Nagar,<br />
                  Uttarakhand – 263152
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-xs mb-1">Phone</p>
                <a href="tel:+919105490005" className="text-slate-400 hover:text-brand-300 text-sm transition-colors">+91 9105490005</a>
              </div>
              <div>
                <p className="text-slate-600 text-xs mb-1">Email</p>
                <a href="mailto:support@immbo.in" className="text-slate-400 hover:text-brand-300 text-sm transition-colors">support@immbo.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {year}{' '}
            <a href="https://bbsayurx.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-300 transition-colors">
              Bharat Bhaishajya Shala
            </a>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Terms & Conditions', href: 'https://immbo.in/terms-and-conditions' },
              { label: 'Privacy Policy', href: 'https://immbo.in/privacy-policy' },
              { label: 'Refund Policy', href: 'https://immbo.in/return-and-refund-policy' },
              { label: 'Shipping Policy', href: 'https://immbo.in/shipping-policy' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
