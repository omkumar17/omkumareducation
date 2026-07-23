"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  FileText,
  MessageCircle,
  Presentation,
  Video,
  Award,
  ArrowRight,
  ArrowDown,
  Notebook,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { icon: Notebook, label: "Register" },
  { icon: Presentation, label: "3 days/week Workshop" },
  // { icon: MessageCircle, label: "WhatsApp Community" },
  { icon: Video, label: "Live Classes" },
  { icon: FileText, label: "Notes" },
  { icon: Award, label: "Board Preparation" },
];

export default function Journey() {
  return (
    <section className="section-pad bg-surface-subtle dark:bg-surface-darksubtle">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          commentTag="student-journey.run()"
          title="Your Journey With Us"
          subtitle="A clear, step-by-step path from discovering us to walking into your board exam confident."
        />

        {/* Desktop / tablet: horizontal flow */}
        <div className="hidden items-center justify-between md:flex">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card flex w-32 flex-col items-center gap-2 px-3 py-5 text-center lg:w-36"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-indigo/10 text-brand-indigo dark:bg-brand-indigoLight/10 dark:text-brand-indigoLight">
                  <step.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="font-mono text-xs font-medium text-ink dark:text-white">
                  {step.label}
                </p>
              </motion.div>
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                >
                  <ArrowRight className="mx-1 h-5 w-5 flex-shrink-0 text-brand-indigo/50 dark:text-brand-indigoLight/50 lg:mx-2" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex flex-col items-center gap-2 md:hidden">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card flex w-56 items-center gap-3 px-4 py-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-indigo/10 text-brand-indigo dark:bg-brand-indigoLight/10 dark:text-brand-indigoLight">
                  <step.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="font-mono text-sm font-medium text-ink dark:text-white">
                  {step.label}
                </p>
              </motion.div>
              {i < STEPS.length - 1 && (
                <ArrowDown className="my-1 h-5 w-5 text-brand-indigo/50 dark:text-brand-indigoLight/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
