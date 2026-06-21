"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import TopicGrid from "./TopicGrid";

function handleNav(href) {
  document.querySelector(href)?.scrollIntoView({
    behavior: "smooth",
  });
}

export default function BatchCard({
  badge,
  title,
  subtitle,
  items,
  topics,
  buttonText,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-indigo to-brand-blue p-8 text-center shadow-glow sm:p-14"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

      <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-mono text-xl font-large text-white">
        <span className="h-4 w-4 animate-pulse rounded-full bg-emerald-300" />
        {badge}
      </span>

      <h2 className="mt-5 font-display text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-white/80">{subtitle}</p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
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
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-indigo shadow-soft transition hover:scale-105"
      >
        <Rocket className="h-5 w-5" />
        {buttonText}
      </button>

      <TopicGrid topics={topics} />
    </motion.div>
  );
}