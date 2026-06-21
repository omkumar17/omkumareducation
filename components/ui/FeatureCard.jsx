"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card p-6 sm:p-7"
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo dark:bg-brand-indigoLight/10 dark:text-brand-indigoLight">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>
      )}
      <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
