export function ImageSkeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-white/10 dark:via-white/5 dark:to-white/10 ${className}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="card p-6 sm:p-7">
      <div className="h-12 w-12 animate-pulse rounded-xl bg-slate-200 dark:bg-white/10" />
      <div className="mt-5 h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-white/10" />
      <div className="mt-2 h-3 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
    </div>
  );
}
