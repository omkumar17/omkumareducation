"use client";

import { motion } from "framer-motion";
import {
  Video,
  MessagesSquare,
  ClipboardCheck,
  FileText,
  PlayCircle,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";

const ITEMS = [
  { icon: Video, label: "Live Classes" },
  { icon: MessagesSquare, label: "Doubt Solving" },
  { icon: ClipboardCheck, label: "Weekly Tests" },
  { icon: FileText, label: "PDF Notes" },
  { icon: PlayCircle, label: "Recordings" },
  { icon: Users, label: "Small Batch Size" },
  { icon: Clock, label: "Timing Flexible" },
];

function handleNav(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Batch() {
  return (
    <section id="batch" className="section-pad bg-white dark:bg-surface-dark">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-indigo to-brand-blue p-8 text-center shadow-glow sm:p-14"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-mono text-xs font-medium text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Admissions Open
          </span>

          <h2 className="relative mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            ICSE Computer Applications Crash Course
          </h2>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            {ITEMS.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </span>
            ))}
          </div>

          <button
            onClick={() => handleNav("#register")}
            className="relative mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-indigo shadow-soft transition-transform hover:scale-[1.03] sm:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}
