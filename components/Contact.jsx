"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const CHANNELS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/omkumareducation",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@omkumareducation",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918580250157?text=Hello%20Sir,%20I%20am%20interested%20in%20your%20ICSE%20Computer%20Applications%20program.",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:omkumar.education@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white dark:bg-surface-dark">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          commentTag="contact.connect()"
          title="Let's Stay Connected"
          subtitle="Reach out on any platform — replies are quick and friendly."
        />

        <div className="flex flex-wrap items-center justify-center gap-5">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="card flex h-24 w-24 flex-col items-center justify-center gap-2 text-ink transition-shadow hover:shadow-soft sm:h-28 sm:w-28 dark:text-white"
            >
              <c.icon className="h-6 w-6 text-brand-indigo dark:text-brand-indigoLight" strokeWidth={1.8} />
              <span className="text-xs font-medium">{c.label}</span>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 font-mono text-sm text-ink-soft dark:text-slate-400">
          omkumar.education@gmail.com
        </p>
      </div>
    </section>
  );
}
