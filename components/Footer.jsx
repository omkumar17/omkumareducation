import { Terminal } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 dark:border-white/10 dark:bg-surface-dark sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 font-display text-lg font-bold text-ink dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white">
            {/* <Terminal className="h-4 w-4" /> */}
            <Image
              src="/img/faviconLogo.png"
              alt="Om Kumar Education Logo"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
          </span>
          Om Kumar Education
        </div>
        <p className="text-sm text-ink-soft dark:text-slate-400">
          Making Computer Applications Simple and Scoring.
        </p>
        <p className="font-mono text-xs text-ink-faint dark:text-slate-500">
          © 2026 Om Kumar Education. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
