import { z } from "zod";

export const contactMessageSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),
  email: z.string().trim().email("Please enter a valid email"),
  contact: z
    .string()
    .trim()
    .min(7, "Contact number must be at least 7 characters")
    .max(15, "Contact number cannot exceed 15 characters")
    .regex(/^[+0-9()\-\s]+$/, "Please enter a valid contact number"),
  serviceRequired: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
