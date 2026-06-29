"use client";

import BatchCard from "./BatchCard";

import {
  Video,
  MessagesSquare,
  ClipboardCheck,
  FileText,
  PlayCircle,
  Users,
  Clock,

  Hash,
  GitBranch,
  Repeat,
  Trophy,
  Brackets,
  Quote,
  Boxes,
  FunctionSquare,
  IndianRupee,
} from "lucide-react";

export default function Batch() {
  const FOUNDATION_ITEMS = [
    { icon: Video, label: "Live Classes" },
    { icon: MessagesSquare, label: "Doubt Solving" },
    { icon: ClipboardCheck, label: "Foundation Test" },
    { icon: FileText, label: "Foundation Notes" },
    { icon: PlayCircle, label: "Limited Recordings" },
    { icon: Users, label: "Small Batch Size" },
    { icon: Clock, label: "7-Day Workshop" },
    // { icon: IndianRupee, label: "Actual Price" },
    // { icon: IndianRupee, label: "Current Price" },
  ];

  const FOUNDATION_TOPICS = [
    {
      // icon: Hash,
      title: "Java Basics",
      description:
        "Variables, data types, operators and input-output.",
    },
    {
      // icon: GitBranch,
      title: "Conditions",
      description:
        "if, if-else and switch-case.",
    },
    {
      // icon: Repeat,
      title: "Loops",
      description:
        "for, while and do-while loops.",
    },
    {
      // icon: Trophy,
      title: "Test & Doubts",
      description:
        "Foundation test and doubt-solving session.",
    },
  ];

  const REGULAR_ITEMS = [
    { icon: Video, label: "3 Live Classes every Week" },
    { icon: MessagesSquare, label: "Doubt Support" },
    { icon: ClipboardCheck, label: "Weekly Tests" },
    { icon: FileText, label: "PDF Notes" },
    { icon: PlayCircle, label: "Class Recordings" },
    { icon: Users, label: "Limited Batch Size" },
  ];

  const REGULAR_TOPICS = [
    {
      // icon: Hash,
      title: "Wrapper Class",
      description:
        "Wrapper methods and type conversion.",
    },
    {
      // icon: Brackets,
      title: "Arrays",
      description:
        "1D & 2D arrays with board programs.",
    },
    {
      // icon: Quote,
      title: "Strings",
      description:
        "String methods and important questions.",
    },
    {
      // icon: Boxes,
      title: "Object-Oriented Programming",
      description:
        "Classes, objects and constructors.",
    },
    {
      // icon: FunctionSquare,
      title: "Methods",
      description:
        "User-defined functions and overloading.",
    },
    {
      // icon: Trophy,
      title: "Board Important Programs",
      description:
        "Exam-oriented questions and revision.",
    },
  ];

  return (
    <section
      id="batch"
      className="section-pad bg-white dark:bg-surface-dark"
    >
      <div className="mx-auto max-w-7xl space-y-16">

        <BatchCard
          badge="Admissions Open"
          title="ICSE Computer Applications Foundation Program"
          subtitle="Free 7-Day Workshop • Class 9 Revision + Class 10 Preparation"
          actualPrice="900"
          currentPrice="0"
          type=""
          items={FOUNDATION_ITEMS}
          topics={FOUNDATION_TOPICS}
          buttonText="Reserve Your Free Spot"
        />

        <BatchCard
          badge="Starting August 2026"
          title="ICSE Class 10 Computer Applications Mastery Batch"
          subtitle="Complete Board-Oriented Preparation at an Affordable Price"
          actualPrice=""
          currentPrice="1000"
          type="per month"
          items={REGULAR_ITEMS}
          topics={REGULAR_TOPICS}
          buttonText="Enroll Now"
        />

      </div>
    </section>
  );
}