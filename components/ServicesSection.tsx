import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="px-[6%] py-[6rem] relative bg-dark2">
      <div className="reveal">
        <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem]">
          What We Do
        </span>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] mb-[1rem]">
          Services Built for<br />the Digital Age
        </h2>
        <p className="text-muted leading-[1.75] max-w-[540px]">
          Comprehensive IT solutions tailored to help Nepali businesses compete
          and thrive in a connected world.
        </p>
      </div>
      
      <div className="reveal grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5px] border border-primary/10 rounded-[24px] overflow-hidden mt-[3.5rem] bg-primary/10">
        
        {/* Service 1 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">Web Development</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Custom websites and web applications built with modern frameworks —
            fast, responsive, and built to convert.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 2 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">App Development</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Native and cross-platform mobile apps for iOS and Android that
            deliver seamless user experiences.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 3 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="m7 15 3-3 2.5 2.5L16 11l1 1"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">Graphics Designing</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Brand identity, marketing materials, social media graphics and
            illustrations that make your brand unforgettable.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 4 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">UI/UX Designing</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Research-driven, user-centered design that turns complex products
            into intuitive, beautiful digital experiences.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 5 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">SEO Services</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Data-driven search engine optimization strategies that drive organic
            traffic, leads, and measurable growth.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 6 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M2 10h20"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">Domain & Hosting</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Reliable domain registration and hosting solutions with 99.9%
            uptime, fast speeds, and dedicated support.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 7 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">IT Training</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Hands-on training programs in web development, design, networking,
            and more — empowering Nepal&apos;s tech talent.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>

        {/* Service 8 */}
        <div className="service-card group bg-dark3 p-[2.5rem] transition-colors duration-300 relative overflow-hidden cursor-default hover:bg-[#111e30]/95">
          <div className="absolute -top-[60px] -right-[60px] w-[160px] h-[160px] bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 rounded-full group-hover:opacity-100 pointer-events-none" />
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1.5rem] mb-[1.5rem] transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <h3 className="text-[1.1rem] font-bold mb-[0.6rem] font-rajdhani">IT Counselling</h3>
          <p className="text-muted text-[0.88rem] leading-[1.7]">
            Strategic IT consultation to help businesses adopt the right
            technology stack and accelerate digital transformation.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-[0.4rem] text-primary text-[0.82rem] font-semibold no-underline mt-[1.2rem] opacity-0 -translate-x-[8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </Link>
        </div>
        
      </div>
    </section>
  );
}
