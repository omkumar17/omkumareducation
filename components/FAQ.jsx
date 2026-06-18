"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "Who can join?",
    a: "Any ICSE Class 9 or Class 10 student who wants to learn Computer Applications and Java programming in a simple, exam-oriented way can join.",
  },
  {
    q: "Are classes live?",
    a: "Yes, all classes are conducted live so you can interact, ask questions and learn in real time.",
  },
  {
    q: "Will notes be provided?",
    a: "Yes, chapter-wise notes and quick revision sheets are provided for every topic covered in class.",
  },
  {
    q: "Can I ask doubts?",
    a: "Absolutely. You can ask doubts during live classes or anytime in the WhatsApp community.",
  },
  {
    q: "Will recordings be available?",
    a: "Yes, recordings of every live class are shared so you can revise at your own pace.",
  },
  {
    q: "How do I join the batch?",
    a: "Simply join the free WhatsApp community using the button on this page, and you'll get all batch details and next steps there.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-surface-subtle dark:bg-surface-darksubtle">
      <div className="mx-auto max-w-3xl">
        <SectionHeading commentTag="faq.java" title="Frequently Asked Questions" />

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-display text-sm font-semibold text-ink sm:text-base dark:text-white">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-brand-indigo dark:text-brand-indigoLight"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6 dark:text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
