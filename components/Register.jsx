"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Loader2,
  MessageCircle,
  User,
  School,
  MapPin,
  Phone,
  Mail,
  Pencil,
  UserPlus,
} from "lucide-react";
import { registrationSchema } from "@/lib/validation";
import SectionHeading from "@/components/ui/SectionHeading";

const WHATSAPP_GROUP_LINK =
  process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
  "https://chat.whatsapp.com/your-invite-link";

const FIELDS = [
  {
    name: "studentName",
    label: "Student Name",
    placeholder: "e.g. Aarav Sharma",
    icon: User,
    type: "text",
  },
  {
    name: "schoolName",
    label: "School Name",
    placeholder: "e.g. St. Xavier's School",
    icon: School,
    type: "text",
  },
  {
    name: "city",
    label: "City",
    placeholder: "e.g. Jamshedpur",
    icon: MapPin,
    type: "text",
  },
  {
    name: "studentWhatsapp",
    label: "Student WhatsApp Number",
    placeholder: "10-digit number",
    icon: Phone,
    type: "tel",
  },
  {
    name: "parentWhatsapp",
    label: "Parent WhatsApp Number (optional)",
    placeholder: "10-digit number",
    icon: Phone,
    type: "tel",
  },
  {
    name: "email",
    label: "Email (optional)",
    placeholder: "e.g. student@example.com",
    icon: Mail,
    type: "email",
  },
];

export default function Register() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      studentName: "",
      batch: "",
      className: "10",
      schoolName: "",
      city: "",
      studentWhatsapp: "",
      parentWhatsapp: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        toast.error(result.message || "Something went wrong.");
        setSubmitting(false);
        return;
      }

      toast.success("Registration Successful");
      setSubmitting(false);
      reset();


    } catch (err) {
      toast.error("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="section-pad bg-white dark:bg-surface-dark"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          commentTag="join-our-program.submit()"
          title="Join Our Programs"
          subtitle="Register for our ICSE Computer Applications programs and stay updated with classes, notes and announcements."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
        >
          {/* Student Name */}
          <div className="sm:col-span-2">
            <FormField
              field={FIELDS[0]}
              register={register}
              error={errors.studentName}
            />
          </div>

          {/* Batch */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
              Batch
            </label>

            <select
              {...register("batch")}
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand-indigo dark:border-white/10 dark:bg-surface-darksubtle dark:text-white"
            >
              <option value="" disabled>
                Select batch
              </option>
              <option value="free">
                Foundation Program (Free)
              </option>
              <option value="paid">
                Computer Applications Mastery (Paid)
              </option>
            </select>

            {errors.batch && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.batch.message}
              </p>
            )}
          </div>

          {/* Class */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
              Class
            </label>

            <select
              {...register("className")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand-indigo dark:border-white/10 dark:bg-surface-darksubtle dark:text-white"
            >
              <option value="10">Class 10</option>
            </select>

            {errors.className && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.className.message}
              </p>
            )}
          </div>

          {/* Remaining fields */}
          {FIELDS.slice(1).map((field) => (
            <FormField
              key={field.name}
              field={field}
              register={register}
              error={errors[field.name]}
            />
          ))}

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5" />
                  Reserve your spot
                </>
              )}
            </button>

            <p className="mt-3 text-center text-xs text-ink-soft dark:text-slate-500">
              We respect your privacy. Your details are only used to add you to
              our programs.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({ field, register, error }) {
  const Icon = field.icon;

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
        {field.label}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />

        <input
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.name)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-ink outline-none transition-colors focus:border-brand-indigo dark:border-white/10 dark:bg-surface-darksubtle dark:text-white"
        />
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
}