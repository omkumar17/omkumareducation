"use client";

import FeatureCard from "@/components/ui/FeatureCard";

export default function TopicGrid({ topics }) {
  return (
    <div className="mt-14">
      <h3 className="mb-8 font-display text-2xl font-bold text-white">
        What You'll Learn
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, i) => (
          <FeatureCard key={topic.title} index={i} {...topic} />
        ))}
      </div>
    </div>
  );
}