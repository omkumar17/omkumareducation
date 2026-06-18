"use client";

import { motion } from "framer-motion";

/**
 * Every section opens with a code-comment styled eyebrow (e.g. "// why-students-choose-us.java")
 * tying the visual language back to the subject: Java / Computer Applications.
 */
export default function SectionHeading({
  commentTag,
  title,
  subtitle,
  align = "center",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12 sm:mb-16`}
    >
      <span className="eyebrow">
        <span className="text-brand-blue">{"//"}</span>
        {" "}
        {commentTag}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base sm:text-lg text-ink-soft dark:text-slate-400">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
