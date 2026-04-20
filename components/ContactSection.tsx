"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="px-[6%] py-[6rem] relative bg-dark">
      <div className="reveal">
        <span className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-[0.8rem]">
          Get In Touch
        </span>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] mb-[1rem]">
          Let&apos;s Talk Business
        </h2>
        <p className="text-muted leading-[1.75] max-w-[540px]">
          Have a project in mind? Fill out the form and our team will get back
          to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] mt-[3.5rem]">
        <div className="contact-info reveal">
          <h3 className="text-[1.3rem] font-bold mb-[1.5rem] font-rajdhani">Contact Information</h3>
          
          <div className="flex gap-[1rem] items-start mb-[1.5rem]">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1rem] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-[0.75rem] text-muted uppercase tracking-[0.1em] mb-[0.25rem]">Office Location</p>
              <p className="text-[0.9rem] font-medium">Kathmandu, Bagmati Province, Nepal</p>
            </div>
          </div>

          <div className="flex gap-[1rem] items-start mb-[1.5rem]">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1rem] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-[0.75rem] text-muted uppercase tracking-[0.1em] mb-[0.25rem]">Phone</p>
              <p className="text-[0.9rem] font-medium">+977-01-XXXXXXX</p>
            </div>
          </div>

          <div className="flex gap-[1rem] items-start mb-[1.5rem]">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1rem] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <p className="text-[0.75rem] text-muted uppercase tracking-[0.1em] mb-[0.25rem]">Email</p>
              <p className="text-[0.9rem] font-medium">info@nexttechsolution.com.np</p>
            </div>
          </div>

          <div className="flex gap-[1rem] items-start mb-[1.5rem]">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-primary-faint border border-primary/15 flex items-center justify-center text-[1rem] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-[0.75rem] text-muted uppercase tracking-[0.1em] mb-[0.25rem]">Office Hours</p>
              <p className="text-[0.9rem] font-medium">Sun – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
