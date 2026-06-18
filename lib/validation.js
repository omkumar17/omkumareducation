import { z } from "zod";

// Indian mobile number: optional +91 / 91 prefix, then a 10 digit number
// starting with 6-9.
const whatsappRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

export const registrationSchema = z.object({
  studentName: z
    .string()
    .trim()
    .min(2, "Please enter the student's full name")
    .max(80, "Name is too long"),

  // Matches spec: `className`
  className: z
    .string()
    .trim()
    .min(1, "Please select a class"),

  // These are part of the payload spec.
  schoolName: z
    .string()
    .trim()
    .min(2, "Please enter the school name")
    .max(120, "School name is too long"),

  city: z
    .string()
    .trim()
    .min(2, "Please enter your city")
    .max(80, "City name is too long"),

  studentWhatsapp: z
    .string()
    .trim()
    .regex(whatsappRegex, "Enter a valid 10-digit WhatsApp number"),

  parentWhatsapp: z
    .string()
    .trim()
    .regex(whatsappRegex, "Enter a valid 10-digit WhatsApp number"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
});

