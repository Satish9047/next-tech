import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark2 pt-[4rem] px-[6%] pb-[2rem] border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[2rem] lg:gap-[3rem] mb-[3rem]">
        
        <div>
          <Link href="#" className="flex items-center gap-[0.6rem] no-underline">
            <div className="flex items-center shrink-0 h-[52px]">
              <Image
                src="/logo-blue.png"
                alt="Next Tech Logo"
                width={52}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
            </div>
            <div className="text-text font-outfit">
              Next Tech<br />
              <span className="text-[0.6rem] font-normal text-muted tracking-[0.12em] uppercase">
                and Solution Pvt. Ltd.
              </span>
            </div>
          </Link>
          <p className="text-muted text-[0.85rem] leading-[1.75] mt-[1rem] max-w-[260px]">
            Building Nepal&apos;s digital tomorrow with creativity, precision, and
            cutting-edge technology. Registered in Kathmandu, Nepal.
          </p>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[0.82rem] uppercase tracking-[0.12em] text-primary mb-[1.2rem] font-rajdhani font-bold">Services</h5>
          <ul className="list-none flex flex-col gap-[0.7rem] p-0 m-0">
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Web Development</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">App Development</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Graphics Design</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">UI/UX Design</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">SEO Services</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[0.82rem] uppercase tracking-[0.12em] text-primary mb-[1.2rem] font-rajdhani font-bold">More</h5>
          <ul className="list-none flex flex-col gap-[0.7rem] p-0 m-0">
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Domain & Hosting</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">IT Training</Link></li>
            <li><Link href="#services" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">IT Counselling</Link></li>
            <li><Link href="#why" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">About Us</Link></li>
            <li><Link href="/contact" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[0.82rem] uppercase tracking-[0.12em] text-primary mb-[1.2rem] font-rajdhani font-bold">Legal</h5>
          <ul className="list-none flex flex-col gap-[0.7rem] p-0 m-0">
            <li><Link href="#" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Privacy Policy</Link></li>
            <li><Link href="#" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Terms of Service</Link></li>
            <li><Link href="#" className="text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-[2rem] border-t border-primary/5 text-[0.8rem] text-muted text-center md:text-left gap-[1rem]">
        <p className="m-0">© 2025 Next Tech and Solution Pvt. Ltd. — All rights reserved.</p>
        <div className="flex gap-[0.8rem]">
          <Link href="#" className="w-[34px] h-[34px] rounded-[8px] bg-dark3 border border-primary/10 flex items-center justify-center text-muted no-underline text-[0.85rem] transition-colors duration-300 hover:bg-primary-faint hover:border-primary hover:text-primary" title="Facebook">f</Link>
          <Link href="#" className="w-[34px] h-[34px] rounded-[8px] bg-dark3 border border-primary/10 flex items-center justify-center text-muted no-underline text-[0.85rem] transition-colors duration-300 hover:bg-primary-faint hover:border-primary hover:text-primary" title="LinkedIn">in</Link>
          <Link href="#" className="w-[34px] h-[34px] rounded-[8px] bg-dark3 border border-primary/10 flex items-center justify-center text-muted no-underline text-[0.85rem] transition-colors duration-300 hover:bg-primary-faint hover:border-primary hover:text-primary" title="Instagram">ig</Link>
          <Link href="#" className="w-[34px] h-[34px] rounded-[8px] bg-dark3 border border-primary/10 flex items-center justify-center text-muted no-underline text-[0.85rem] transition-colors duration-300 hover:bg-primary-faint hover:border-primary hover:text-primary" title="Twitter">𝕏</Link>
        </div>
      </div>
    </footer>
  );
}
