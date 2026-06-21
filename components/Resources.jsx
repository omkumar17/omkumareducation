"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Code2,
  Brackets,
  Quote,
  History,
  Zap,
  Download,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const RESOURCES = [
  // { icon: FileText, title: "Foundation Revision Notes" },
  { icon: Code2, title: "Important Programs" },
  // { icon: Brackets, title: "Arrays Notes" },
  // { icon: Quote, title: "Strings Notes" },
  { icon: History, title: "Previous Year Questions" },
  { icon: Zap, title: "Quick Revision Sheets" },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="section-pad bg-surface-subtle dark:bg-surface-darksubtle"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading commentTag="free-resources.java" title="Free Resources" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card flex flex-col p-6 sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo dark:bg-brand-indigoLight/10 dark:text-brand-indigoLight">
                <r.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {r.title}
              </h3>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-brand-indigo/30 px-4 py-2 text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-indigo/5 dark:border-white/15 dark:text-brand-indigoLight dark:hover:bg-white/5"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
