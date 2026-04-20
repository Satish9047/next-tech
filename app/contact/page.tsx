import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Next Tech",
  description: "Send your project details to the Next Tech team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-[6%]">
        <div className="max-w-3xl mx-auto">
          <p className="inline-block text-[0.72rem] font-semibold text-primary tracking-[0.2em] uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4">
            Tell Us About Your Project
          </h1>
          <p className="text-muted mb-8">
            Fill out the form and our team will respond as soon as possible.
          </p>

          <div className="bg-dark2 border border-primary/15 rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
