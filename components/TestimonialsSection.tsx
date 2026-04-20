export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-[6%] py-[6rem] relative bg-dark">
      <div className="reveal text-center">
        <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem]">
          Client Stories
        </span>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] mb-[1rem]">
          Trusted by Businesses<br />Across Nepal
        </h2>
      </div>

      <div className="testi-grid reveal grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] mt-[3.5rem]">
        
        <div className="testi-card bg-dark2 border border-primary/10 rounded-[20px] p-[2rem] transition-all duration-300 hover:border-primary/25 hover:-translate-y-[4px]">
          <div className="text-primary text-[0.85rem] mb-[1rem] tracking-[2px]">★★★★★</div>
          <p className="text-muted text-[0.88rem] leading-[1.75] mb-[1.5rem]">
            &quot;Next Tech transformed our outdated website into a modern, fast
            platform. The team was professional, communicative, and delivered
            ahead of schedule. Highly recommended!&quot;
          </p>
          <div className="flex items-center gap-[0.9rem]">
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-primary to-[#2c8fb5] flex items-center justify-center font-rajdhani font-extrabold text-[0.85rem] text-dark">
              RK
            </div>
            <div>
              <div className="text-[0.88rem] font-semibold">Rajesh KC</div>
              <div className="text-[0.75rem] text-muted">CEO, Himalayan Traders</div>
            </div>
          </div>
        </div>

        <div className="testi-card bg-dark2 border border-primary/10 rounded-[20px] p-[2rem] transition-all duration-300 hover:border-primary/25 hover:-translate-y-[4px]">
          <div className="text-primary text-[0.85rem] mb-[1rem] tracking-[2px]">★★★★★</div>
          <p className="text-muted text-[0.88rem] leading-[1.75] mb-[1.5rem]">
            &quot;Their UI/UX team completely redesigned our app interface. User
            engagement doubled in the first month. These folks really know their
            craft and are a pleasure to work with.&quot;
          </p>
          <div className="flex items-center gap-[0.9rem]">
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-primary to-[#2c8fb5] flex items-center justify-center font-rajdhani font-extrabold text-[0.85rem] text-dark">
              SP
            </div>
            <div>
              <div className="text-[0.88rem] font-semibold">Sita Poudel</div>
              <div className="text-[0.75rem] text-muted">Founder, TechKatha</div>
            </div>
          </div>
        </div>

        <div className="testi-card bg-dark2 border border-primary/10 rounded-[20px] p-[2rem] transition-all duration-300 hover:border-primary/25 hover:-translate-y-[4px]">
          <div className="text-primary text-[0.85rem] mb-[1rem] tracking-[2px]">★★★★★</div>
          <p className="text-muted text-[0.88rem] leading-[1.75] mb-[1.5rem]">
            &quot;We enrolled our entire team in their IT training program. The
            quality of training and the patience of the instructors is
            unmatched. Our team&apos;s productivity has significantly improved.&quot;
          </p>
          <div className="flex items-center gap-[0.9rem]">
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-primary to-[#2c8fb5] flex items-center justify-center font-rajdhani font-extrabold text-[0.85rem] text-dark">
              AM
            </div>
            <div>
              <div className="text-[0.88rem] font-semibold">Anup Maharjan</div>
              <div className="text-[0.75rem] text-muted">HR Manager, NepAlpha Inc.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
