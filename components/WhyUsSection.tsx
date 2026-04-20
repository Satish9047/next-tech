export default function WhyUsSection() {
  return (
    <section id="why" className="px-[6%] py-[6rem] relative bg-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[4rem] items-center mt-[3rem]">
        <div className="relative hidden lg:block">
          <div className="w-full max-w-[420px] aspect-square rounded-full border border-primary/10 flex items-center justify-center relative m-auto">
            <div className="absolute inset-[12px] rounded-full border border-dashed border-primary/20 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-[30px] rounded-full bg-[radial-gradient(circle,rgba(110,206,244,0.1),transparent_70%)] pointer-events-none" />

            <div className="absolute w-[44px] h-[44px] bg-dark3 border border-primary/25 rounded-[12px] flex items-center justify-center text-[1.2rem] top-[8%] left-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-dark3 border border-primary/25 rounded-[12px] flex items-center justify-center text-[1.2rem] right-[6%] top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="m7 15 3-3 2.5 2.5L16 11l1 1"/></svg>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-dark3 border border-primary/25 rounded-[12px] flex items-center justify-center text-[1.2rem] bottom-[8%] left-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-dark3 border border-primary/25 rounded-[12px] flex items-center justify-center text-[1.2rem] left-[6%] top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>

            <div className="z-10 text-center">
              <div className="font-rajdhani text-[4rem] font-extrabold text-primary">6+</div>
              <p className="text-muted text-[0.85rem]">Years of<br />Expertise</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem]">
            Why Choose Us
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] mb-[1rem]">
            Your Trusted<br />Tech Partner in Nepal
          </h2>
          <p className="text-muted leading-[1.75] max-w-[540px] mb-[2rem]">
            We combine global best practices with local understanding to deliver
            solutions that work for Nepali businesses.
          </p>

          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex gap-[1.2rem] items-start p-[1.5rem] rounded-[16px] border border-primary/5 bg-dark2 transition-colors duration-300 hover:border-primary/25 reveal">
              <div className="text-[1.5rem] shrink-0 mt-[0.1rem] text-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <h4 className="text-[0.95rem] font-bold mb-[0.3rem]">Fast Delivery, Zero Compromise</h4>
                <p className="text-muted text-[0.85rem] leading-[1.65]">
                  We move quickly without cutting corners. Agile processes
                  ensure on-time delivery with full quality assurance.
                </p>
              </div>
            </div>

            <div className="flex gap-[1.2rem] items-start p-[1.5rem] rounded-[16px] border border-primary/5 bg-dark2 transition-colors duration-300 hover:border-primary/25 reveal">
              <div className="text-[1.5rem] shrink-0 mt-[0.1rem] text-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="text-[0.95rem] font-bold mb-[0.3rem]">Reliable & Secure</h4>
                <p className="text-muted text-[0.85rem] leading-[1.65]">
                  Security-first development practices and reliable
                  infrastructure mean your digital assets are always protected.
                </p>
              </div>
            </div>

            <div className="flex gap-[1.2rem] items-start p-[1.5rem] rounded-[16px] border border-primary/5 bg-dark2 transition-colors duration-300 hover:border-primary/25 reveal">
              <div className="text-[1.5rem] shrink-0 mt-[0.1rem] text-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4 className="text-[0.95rem] font-bold mb-[0.3rem]">End-to-End Support</h4>
                <p className="text-muted text-[0.85rem] leading-[1.65]">
                  We don&apos;t just build and leave. Our team provides ongoing
                  support, maintenance, and growth consulting.
                </p>
              </div>
            </div>

            <div className="flex gap-[1.2rem] items-start p-[1.5rem] rounded-[16px] border border-primary/5 bg-dark2 transition-colors duration-300 hover:border-primary/25 reveal">
              <div className="text-[1.5rem] shrink-0 mt-[0.1rem] text-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <div>
                <h4 className="text-[0.95rem] font-bold mb-[0.3rem]">Proven Track Record</h4>
                <p className="text-muted text-[0.85rem] leading-[1.65]">
                  200+ projects delivered across Nepal with industry-leading
                  client satisfaction and repeat partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
