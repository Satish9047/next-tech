import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center pt-[7rem] pb-[4rem] px-[6%] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full animate-pulse-slow pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(110, 206, 244, 0.15) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full animate-pulse-slower pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(44, 143, 181, 0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110, 206, 244, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 206, 244, 0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[680px]">
        <div className="inline-flex items-center gap-[0.5rem] bg-primary-faint border border-primary/20 py-[0.4rem] px-[1rem] rounded-full text-[0.78rem] text-primary tracking-[0.08em] uppercase mb-[1.8rem] font-medium animate-fade-up">
          <span className="w-[6px] h-[6px] bg-primary rounded-full animate-blink flex-shrink-0" />
          Based in Nepal · Serving Globally
        </div>
        
        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] mb-[1.5rem] animate-fade-up [animation-delay:0.1s] font-rajdhani">
          <span className="block">Powering Nepal&apos;s</span>
          <span className="block">
            <span className="text-primary relative inline-block after:content-[''] after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-transparent after:rounded-[2px]">
              Digital Future
            </span>
          </span>
          <span className="block">One Solution</span>
          <span className="block">at a Time.</span>
        </h1>
        
        <p className="text-muted text-[1.05rem] leading-[1.75] mb-[2.5rem] max-w-[520px] animate-fade-up [animation-delay:0.2s]">
          From cutting-edge web apps to strategic IT training — Next Tech and
          Solution delivers end-to-end digital excellence for businesses ready
          to lead.
        </p>

        <div className="flex gap-[1rem] flex-wrap animate-fade-up [animation-delay:0.3s]">
          <Link
            href="#services"
            className="bg-primary text-dark py-[0.9rem] px-[2rem] rounded-full font-rajdhani font-bold text-[0.9rem] no-underline transition-all duration-300 shadow-[0_4px_30px_rgba(110,206,244,0.3)] hover:-translate-y-[2px] hover:shadow-[0_8px_40px_rgba(110,206,244,0.45)]"
          >
            Explore Services
          </Link>
          <Link
            href="#contact"
            className="border border-primary/30 text-primary py-[0.9rem] px-[2rem] rounded-full font-rajdhani font-semibold text-[0.9rem] no-underline transition-all duration-300 backdrop-blur-md hover:bg-primary-faint hover:border-primary"
          >
            Talk to Us →
          </Link>
        </div>
      </div>

      <div className="hidden md:flex absolute right-[6%] bottom-[6%] flex-col gap-[1rem] z-10 animate-fade-up [animation-delay:0.4s]">
        <div className="bg-[#0d1724]/80 backdrop-blur-md border border-primary/10 rounded-2xl py-[1rem] px-[1.4rem] text-right transition-colors duration-300 hover:border-primary">
          <div className="font-rajdhani text-[1.8rem] font-extrabold text-primary">200+</div>
          <div className="text-[0.72rem] text-muted uppercase tracking-[0.1em]">Projects Delivered</div>
        </div>
        <div className="bg-[#0d1724]/80 backdrop-blur-md border border-primary/10 rounded-2xl py-[1rem] px-[1.4rem] text-right transition-colors duration-300 hover:border-primary">
          <div className="font-rajdhani text-[1.8rem] font-extrabold text-primary">98%</div>
          <div className="text-[0.72rem] text-muted uppercase tracking-[0.1em]">Client Satisfaction</div>
        </div>
        <div className="bg-[#0d1724]/80 backdrop-blur-md border border-primary/10 rounded-2xl py-[1rem] px-[1.4rem] text-right transition-colors duration-300 hover:border-primary">
          <div className="font-rajdhani text-[1.8rem] font-extrabold text-primary">6+</div>
          <div className="text-[0.72rem] text-muted uppercase tracking-[0.1em]">Years of Excellence</div>
        </div>
      </div>
    </section>
  );
}
