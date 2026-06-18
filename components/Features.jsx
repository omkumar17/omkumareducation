"use client";

import {
  Lightbulb,
  Video,
  MessagesSquare,
  ClipboardCheck,
  BookOpenCheck,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Simple Explanations",
    description: "Complex Java concepts broken into easy, relatable steps.",
  },
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Real-time teaching with space to ask and discuss freely.",
  },
  {
    icon: MessagesSquare,
    title: "Doubt Solving Support",
    description: "No question goes unanswered, in class or on WhatsApp.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Tests",
    description: "Regular practice to track progress and fix weak spots early.",
  },
  {
    icon: BookOpenCheck,
    title: "Chapter-wise Notes",
    description: "Organised, exam-ready notes for every topic in the syllabus.",
  },
  {
    icon: Target,
    title: "Exam-Oriented Preparation",
    description: "Focused on board exam patterns to help you score higher.",
  },
];

export default function Features() {
  return (
    <section
      id="why-us"
      className="section-pad bg-surface-subtle dark:bg-surface-darksubtle"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          commentTag="why-students-choose-us.java"
          title="Why Students Choose Us"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
