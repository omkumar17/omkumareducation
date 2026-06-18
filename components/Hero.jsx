"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FileDown,
  CheckCircle2,
  BookOpenCheck,
  Video,
  MessagesSquare,
  ClipboardCheck,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { ImageSkeleton } from "@/components/ui/Skeleton";
import Image from "next/image";

const CHECKLIST = [
  { icon: BookOpenCheck, label: "Chapter-wise Notes" },
  { icon: Video, label: "Live Classes" },
  { icon: MessagesSquare, label: "Doubt Solving" },
  { icon: ClipboardCheck, label: "Weekly Tests" },
  { icon: PlayCircle, label: "Recordings" },
];

const CODE_LINES = [
  { n: 1, text: "public class ICSEStudent {", color: "text-slate-300" },
  { n: 2, text: '  String goal = "Score 95+ in Boards";', color: "text-blue-300" },
  { n: 3, text: "  void learnJava() {", color: "text-slate-300" },
  { n: 4, text: '    System.out.println("Simple. Clear. Exam-ready.");', color: "text-emerald-300" },
  { n: 5, text: "  }", color: "text-slate-300" },
  { n: 6, text: "}", color: "text-slate-300" },
];

function handleNav(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-surface-subtle to-white pt-32 sm:pt-40 dark:from-surface-darksubtle dark:to-surface-dark"
    >
      {/* ambient animated background blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-indigo/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 sm:px-10 lg:grid-cols-2 lg:px-20 lg:pb-28">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <span className="text-brand-blue">{'//'}</span>
            {" "}om-kumar-education.init()
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
            OM KUMAR
            <br />
            <span className="text-brand-indigo dark:text-brand-indigoLight">EDUCATION</span>
          </h1>

          <p className="mt-4 font-display text-lg font-semibold text-ink sm:text-xl dark:text-slate-200">
            ICSE Class 9 &amp; 10 Computer Applications
          </p>

          <p className="mt-3 text-lg text-brand-indigo sm:text-xl dark:text-brand-indigoLight">
            Learn Java Programming in a Simple and Exam-Oriented Way.
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft dark:text-slate-400">
            Helping ICSE students understand Computer Applications through easy
            explanations, practice questions and regular revision.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => handleNav("#register")} className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Join Free WhatsApp Community
            </button>
            <button onClick={() => handleNav("#resources")} className="btn-secondary">
              <FileDown className="h-5 w-5" />
              Get Free Notes
            </button>
          </div>

          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CHECKLIST.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2 text-sm text-ink-soft dark:text-slate-400"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-indigo dark:text-brand-indigoLight" />
                {item.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: signature code-terminal + teacher photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* terminal card */}
          <div className="overflow-hidden rounded-2xl bg-[#0B1020] shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                ICSEStudent.java
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7 sm:text-sm">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={line.n}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.18 }}
                  className="flex gap-4"
                >
                  <span className="select-none text-slate-600">{line.n}</span>
                  <span className={line.color}>{line.text}</span>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="ml-9 inline-block h-4 w-2 animate-blink bg-emerald-300 align-middle"
              />
            </div>
          </div>

          {/* floating teacher photo card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-10 -left-6 w-44 rounded-2xl border border-white bg-white p-2 shadow-soft sm:-left-10 sm:w-52 dark:border-white/10 dark:bg-surface-darksubtle"
          >
            <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40">
              {!imgLoaded && <ImageSkeleton className="absolute inset-0" />}
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop"
                alt="Om Kumar, ICSE Computer Applications teacher"
                fill
                className={`object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
            <p className="mt-2 px-1 text-center font-display text-sm font-semibold text-ink dark:text-white">
              Om Kumar
            </p>
            <p className="px-1 pb-1 text-center text-xs text-ink-soft dark:text-slate-400">
              MCA, Computer Educator
            </p>
          </motion.div>

          {/* floating stat chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -right-3 -top-6 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-soft sm:-right-6 dark:border-white/10 dark:bg-surface-darksubtle"
          >
            <p className="font-display text-xl font-bold text-brand-indigo dark:text-brand-indigoLight">
              Live
            </p>
            <p className="font-mono text-[11px] text-ink-soft dark:text-slate-400">
              classes running
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
