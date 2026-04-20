"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import {
  type ContactMessageInput,
  contactMessageSchema,
} from "@/schemas/contact";
import { submitContactMessage } from "@/actions/contact";

const SERVICE_OPTIONS = [
  "Web Development",
  "App Development",
  "Graphics Designing",
  "UI/UX Designing",
  "SEO Services",
  "Domain & Hosting",
  "IT Training",
  "IT Counselling",
  "Other",
];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      serviceRequired: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactMessageInput) => {
    startTransition(async () => {
      const result = await submitContactMessage(values);
      if (result?.error) {
        toast.error(result.error);
        return;
      }
      toast.success(
        "“Enquiry submitted successfully. We’ll contact you within 24 hours.”",
      );
      reset();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[1rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        <div className="flex flex-col gap-[0.4rem]">
          <label className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">
            Full Name
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Aarav Sharma"
            className="bg-dark2 border border-primary/10 text-text py-[0.85rem] px-[1rem] rounded-[10px] text-[0.88rem] font-outfit transition-colors duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,206,244,0.08)]"
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs">{errors.fullName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-[0.4rem]">
          <label className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="hello@example.com"
            className="bg-dark2 border border-primary/10 text-text py-[0.85rem] px-[1rem] rounded-[10px] text-[0.88rem] font-outfit transition-colors duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,206,244,0.08)]"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-[0.4rem] md:col-span-2">
          <label className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">
            Contact Number
          </label>
          <input
            {...register("contact")}
            type="tel"
            placeholder="+977-98XXXXXXXX"
            className="bg-dark2 border border-primary/10 text-text py-[0.85rem] px-[1rem] rounded-[10px] text-[0.88rem] font-outfit transition-colors duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,206,244,0.08)]"
          />
          {errors.contact && (
            <p className="text-red-400 text-xs">{errors.contact.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[0.4rem]">
        <label className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">
          Service Required
        </label>
        <select
          {...register("serviceRequired")}
          className="bg-dark2 border border-primary/10 text-text py-[0.85rem] px-[1rem] rounded-[10px] text-[0.88rem] font-outfit transition-colors duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,206,244,0.08)]"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service} className="bg-dark2">
              {service}
            </option>
          ))}
        </select>
        {errors.serviceRequired && (
          <p className="text-red-400 text-xs">
            {errors.serviceRequired.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-[0.4rem]">
        <label className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">
          Your Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project or requirements..."
          className="bg-dark2 border border-primary/10 text-text py-[0.85rem] px-[1rem] rounded-[10px] text-[0.88rem] font-outfit transition-colors duration-300 outline-none resize-y focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,206,244,0.08)]"
        />
        {errors.message && (
          <p className="text-red-400 text-xs">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="text-dark bg-primary py-[1rem] px-[2rem] border-none rounded-full cursor-pointer font-rajdhani font-bold text-[0.9rem] transition-all duration-300 shadow-[0_4px_24px_rgba(110,206,244,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_36px_rgba(110,206,244,0.4)] disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
