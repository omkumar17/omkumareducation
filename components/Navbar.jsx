"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon, MessageCircle, Rocket } from "lucide-react";
import { useTheme } from "next-themes";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  // { label: "Topics", href: "#topics" },
  // { label: "Resources", href: "#resources" },
  { label: "Batch", href: "#batch" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    console.log("clicked", href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/80 shadow-softer backdrop-blur-md dark:bg-surface-dark/80"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2 font-display text-lg font-bold text-ink dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-indigo text-white overflow-hidden">
            <Image
              src="/img/faviconLogo.png"
              alt="Om Kumar Education Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </span>
          Om Kumar Education
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="font-mono text-sm text-ink-soft transition-colors hover:text-brand-indigo dark:text-slate-400 dark:hover:text-brand-indigoLight"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-soft transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#register");
            }}
            className="btn-primary !px-5 !py-2.5 text-sm"
          >
            <Rocket className="h-6 w-6" />
            Register for free foundation Program
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden dark:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{
              opacity: open ? 1 : 0,
              height: open ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden  px-6 pb-6 lg:hidden bg-white/80 shadow-softer backdrop-blur-md dark:bg-surface-dark/80">
            <div className="flex flex-col gap-4 pt-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="font-mono text-sm text-ink-soft dark:text-slate-400"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                {mounted && (
                  <button
                    aria-label="Toggle dark mode"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-soft dark:border-white/10 dark:text-slate-300"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                )}
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#batch");
                  }}
                  className="btn-primary flex-1 text-sm"
                >
                  Register for free foundation Program
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
