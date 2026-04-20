export default function ProcessSection() {
  return (
    <section id="process" className="px-[6%] py-[6rem] relative bg-dark2">
      <div className="reveal text-center mb-0">
        <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem]">
          How We Work
        </span>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] mb-[1rem]">
          Our 4-Step Process
        </h2>
        <p className="text-muted leading-[1.75] max-w-[540px] m-auto mb-[2rem]">
          A streamlined, transparent workflow designed to bring your vision to
          life efficiently and reliably.
        </p>
      </div>

      <div className="process-steps reveal grid grid-cols-2 md:grid-cols-4 gap-0 mt-[3.5rem] relative before:hidden md:before:block before:absolute before:top-[28px] before:left-[12.5%] before:right-[12.5%] before:h-[1px] before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-primary-glow before:to-transparent">
        
        <div className="process-step group px-[1.5rem] text-center relative mb-8 md:mb-0">
          <div className="w-[56px] h-[56px] rounded-full bg-dark3 border border-primary/20 flex items-center justify-center mx-auto mb-[1.5rem] font-rajdhani text-[1.1rem] font-extrabold text-primary relative z-10 transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:shadow-[0_0_24px_var(--color-primary-glow)]">
            01
          </div>
          <h4 className="text-[0.95rem] font-bold mb-[0.5rem]">Discovery</h4>
          <p className="text-muted text-[0.82rem] leading-[1.65]">
            We listen carefully to understand your goals, audience, and business
            requirements.
          </p>
        </div>

        <div className="process-step group px-[1.5rem] text-center relative mb-8 md:mb-0">
          <div className="w-[56px] h-[56px] rounded-full bg-dark3 border border-primary/20 flex items-center justify-center mx-auto mb-[1.5rem] font-rajdhani text-[1.1rem] font-extrabold text-primary relative z-10 transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:shadow-[0_0_24px_var(--color-primary-glow)]">
            02
          </div>
          <h4 className="text-[0.95rem] font-bold mb-[0.5rem]">Strategy & Design</h4>
          <p className="text-muted text-[0.82rem] leading-[1.65]">
            We craft a detailed roadmap and visually stunning designs aligned
            with your brand.
          </p>
        </div>

        <div className="process-step group px-[1.5rem] text-center relative mb-8 md:mb-0">
          <div className="w-[56px] h-[56px] rounded-full bg-dark3 border border-primary/20 flex items-center justify-center mx-auto mb-[1.5rem] font-rajdhani text-[1.1rem] font-extrabold text-primary relative z-10 transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:shadow-[0_0_24px_var(--color-primary-glow)]">
            03
          </div>
          <h4 className="text-[0.95rem] font-bold mb-[0.5rem]">Development</h4>
          <p className="text-muted text-[0.82rem] leading-[1.65]">
            Our engineers build robust, scalable solutions with clean code and
            regular updates.
          </p>
        </div>

        <div className="process-step group px-[1.5rem] text-center relative mb-0">
          <div className="w-[56px] h-[56px] rounded-full bg-dark3 border border-primary/20 flex items-center justify-center mx-auto mb-[1.5rem] font-rajdhani text-[1.1rem] font-extrabold text-primary relative z-10 transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:shadow-[0_0_24px_var(--color-primary-glow)]">
            04
          </div>
          <h4 className="text-[0.95rem] font-bold mb-[0.5rem]">Launch & Support</h4>
          <p className="text-muted text-[0.82rem] leading-[1.65]">
            We deploy, test, and stay with you post-launch with ongoing
            optimization and care.
          </p>
        </div>

      </div>
    </section>
  );
}
