import React from 'react';

const Manufacturer = () => {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0f05 0%, #0d0905 100%)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Info card */}
          <div className="glass-card-warm rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full opacity-10"
              style={{ background: 'linear-gradient(135deg, #f6c644, transparent)' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-6">
                ✦ Manufacturer Details
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                <span className="text-gradient-gold">Bharat Bhaisajya</span>
                <br />Shala Pvt. Ltd.
              </h2>

              <div className="space-y-4">
                {[
                  { icon: '🏭', label: 'Licence No.', value: '22626069000072' },
                  { icon: '🧾', label: 'GST No.', value: '05AAACB6734B1Z8' },
                  { icon: '📍', label: 'Address', value: 'Village Ratanpura, Tehsil Gadarpur, Rudrapur, Udham Singh Nagar – 269152, Uttarakhand, India' },
                  { icon: '📞', label: 'Phone', value: '+91 9105490005' },
                  { icon: '✉️', label: 'Email', value: 'support@immbo.in' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-4 group">
                    <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                    <div className="flex-1 border-b border-brand-800/30 pb-3">
                      <p className="text-brand-300/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-brand-100/80 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heritage section */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 badge-premium px-4 py-2 rounded-full text-brand-400 text-xs font-semibold tracking-widest uppercase mb-4">
                ✦ 34 Years of Trust
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
                <span className="text-white">Rooted in </span>
                <span className="text-gradient-gold">Tradition</span>
              </h2>
            </div>

            <p className="text-brand-200/60 text-base leading-relaxed">
              Bharat Bhaisajya Shala Pvt. Ltd. has been at the forefront of Ayurvedic medicine for over three decades.
              Headquartered in the foothills of Uttarakhand, close to nature's finest botanicals, we manufacture under
              strict GMP-compliant quality controls.
            </p>

            <p className="text-brand-200/60 text-base leading-relaxed">
              IMMBO's Herbal Peya is developed by{' '}
              <span className="text-brand-300 font-semibold">Padma Shri Vaidya Balendu Prakash</span>, bridging classical
              Ayurvedic wisdom with modern scientific validation for everyday wellness.
            </p>

            {/* Milestone timeline */}
            <div className="space-y-4">
              {[
                { year: '1990', event: 'Founded in Uttarakhand' },
                { year: '2005', event: 'GMP Certification achieved' },
                { year: '2015', event: 'IMMBO allergy formulation launched' },
                { year: '2024', event: 'Herbal Peya introduced to market' },
              ].map(({ year, event }, i) => (
                <div key={year} className="flex items-center gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold-gradient flex-shrink-0 group-hover:scale-125 transition-transform" />
                    {i < 3 && <div className="w-px h-8 bg-gradient-to-b from-brand-500/30 to-transparent mt-1" />}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-brand-400/60 text-sm w-10">{year}</span>
                    <span className="text-brand-200/70 text-sm group-hover:text-brand-200/90 transition-colors">{event}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-brand-400/40 text-xs uppercase tracking-wider">Follow Us:</span>
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/yesimmbo', icon: 'f' },
                { name: 'Instagram', href: 'https://www.instagram.com/immbo.in', icon: '📷' },
                { name: 'YouTube', href: 'https://www.youtube.com/@BBSAyurx', icon: '▶' },
                { name: 'X', href: 'https://x.com/BBSAyurx', icon: '𝕏' },
              ].map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-brand-300/60 hover:text-brand-300 hover:glass-card-warm transition-all duration-300 text-sm font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturer;
