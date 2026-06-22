"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Video, Users, Trophy, School } from "lucide-react";
import { useState } from "react";
import { ImageSkeleton } from "@/components/ui/Skeleton";
import Image from "next/image";

const CARDS = [
  { icon: GraduationCap, label: "MCA Graduate and Coding Mentor" },
  { icon: Trophy, label: "Scored 99/100 in Computer Applications in class 10 and 12" },
  { icon: School, label: "3+ years of Teaching Experience" },
  { icon: Code2, label: "8+ years of Coding Experience" },
  // { icon: Users, label: "Teacher" },
];

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="section-pad bg-white dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center max-w-7xl">
        <span className="eyebrow justify-center flex">
          <span className="text-brand-blue text-center">{"//"}</span>
          {" "}about-the-teacher.java
        </span>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
          Meet Your Teacher
        </h2>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft border-2 border-slate-800 dark:border-slate-200">
              {!imgLoaded && <ImageSkeleton className="absolute inset-0" />}
              <Image
                src="/img/largeImage3.png"
                alt="Om Kumar teaching Computer Applications"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                className={`object-fit transition-opacity duration-500  ${imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-brand-indigo px-6 py-2 text-center shadow-soft">
              <p className="font-display text-sm font-bold text-white">Om Kumar</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg dark:text-slate-400">
              I am an MCA graduate and Computer educator passionate about
              helping ICSE Class 10 students learn Java programming in a
              simple and practical way.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg dark:text-slate-400">
              My goal is to make programming easy, build strong fundamentals
              and help students score better in board examinations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card flex flex-col items-start gap-3 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-brand-indigoLight/10 dark:text-brand-indigoLight">
                    <card.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <p className="font-display text-sm font-semibold text-ink dark:text-white">
                    {card.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
