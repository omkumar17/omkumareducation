"use client";

import {
  Hash,
  GitBranch,
  Repeat,
  FunctionSquare,
  Brackets,
  Quote,
  Boxes,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const TOPICS = [
  {
    icon: Hash,
    title: "Java Fundamentals",
    description: "Data types, variables, operators and the building blocks of Java.",
  },
  {
    icon: GitBranch,
    title: "Conditional Statements",
    description: "if-else and switch-case to control program flow with confidence.",
  },
  {
    icon: Repeat,
    title: "Loops",
    description: "for, while and do-while loops explained with exam-style examples.",
  },
  {
    icon: FunctionSquare,
    title: "Methods",
    description: "Writing reusable, well-structured methods the ICSE way.",
  },
  {
    icon: Brackets,
    title: "Arrays",
    description: "Single and double dimensional arrays with common board problems.",
  },
  {
    icon: Quote,
    title: "Strings",
    description: "String handling methods and frequently asked string programs.",
  },
  {
    icon: Boxes,
    title: "Object Oriented Programming",
    description: "Classes, objects and constructors explained step by step.",
  },
  {
    icon: Trophy,
    title: "Board Important Programs",
    description: "The exact program patterns that show up most in board exams.",
  },
];

export default function Topics() {
  return (
    <section id="topics" className="section-pad bg-white dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          commentTag="what-you-will-learn.java"
          title="What You Will Learn"
          subtitle="A complete, syllabus-aligned roadmap from fundamentals to board-important programs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((t, i) => (
            <FeatureCard key={t.title} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
