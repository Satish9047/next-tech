import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="bg-dark2 text-center py-[6rem] px-[6%]">
      <div className="max-w-[680px] m-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(110,206,244,0.12),transparent_70%)] pointer-events-none" />
        <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem] relative">
          Ready to Start?
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-[1rem] relative">
          Let&apos;s Build Something<br />
          <span className="text-primary">Extraordinary</span> Together
        </h2>
        <p className="text-muted mb-[2.5rem] relative">
          Whether you&apos;re launching a startup or scaling an enterprise — we have
          the team, tools, and talent to make it happen.
        </p>
        <div className="flex gap-[1rem] justify-center flex-wrap relative">
          <Link
            href="#contact"
             className="bg-primary text-dark py-[0.9rem] px-[2rem] rounded-full font-rajdhani font-bold text-[0.9rem] no-underline transition-all duration-300 shadow-[0_4px_30px_rgba(110,206,244,0.3)] hover:-translate-y-[2px] hover:shadow-[0_8px_40px_rgba(110,206,244,0.45)]"
          >
            Start a Project
          </Link>
          <a
            href="tel:+977-01-XXXXXXX"
            className="border border-primary/30 text-primary py-[0.9rem] px-[2rem] rounded-full font-rajdhani font-semibold text-[0.9rem] no-underline transition-all duration-300 backdrop-blur-md hover:bg-primary-faint hover:border-primary"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
