"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleLang = () => {
    const nextLocale = locale === "ru" ? "kz" : "ru";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  const navLinks = [
    { href: "#menu", label: t("menu") },
    { href: "#about", label: t("about") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-[#F5C800] rounded-lg flex items-center justify-center font-display text-black text-lg font-black tracking-tight group-hover:shadow-[0_0_20px_rgba(245,200,0,0.5)] transition-shadow duration-300">
                  D
                </div>
              </div>
              <span className="font-display text-2xl tracking-widest text-white group-hover:text-[#F5C800] transition-colors duration-300">
                DONERIUM
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-[#F5C800] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F5C800] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Lang toggle */}
              <button
                onClick={toggleLang}
                className="text-xs font-bold tracking-widest text-white/50 hover:text-[#F5C800] border border-white/10 hover:border-[#F5C800]/50 px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {t("lang")}
              </button>

              {/* Phone */}
              <a
                href="tel:+77055107420"
                className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span className="hidden xl:inline">+7 705 510 74 20</span>
              </a>

              {/* CTA */}
              <a
                href="https://wa.me/77055107420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5C800] text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] transition-all duration-300"
              >
                {t("order")}
              </a>
            </div>

            {/* Mobile: lang + burger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleLang}
                className="text-xs font-bold text-[#F5C800] border border-[#F5C800]/30 px-2.5 py-1 rounded-full"
              >
                {t("lang")}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0f0f0f]/98 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-display tracking-widest text-white/80 hover:text-[#F5C800] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <a
                  href="https://wa.me/77055107420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F5C800] text-black font-bold text-center py-4 rounded-2xl text-lg"
                >
                  {t("order")}
                </a>
                <a
                  href="tel:+77055107420"
                  className="w-full glass text-white font-medium text-center py-4 rounded-2xl"
                >
                  +7 705 510 74 20
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
