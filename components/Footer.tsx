"use client";

import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const navLinks = [
    { href: "#menu", label: tNav("menu") },
    { href: "#about", label: tNav("about") },
    { href: "#gallery", label: tNav("gallery") },
    { href: "#contacts", label: tNav("contacts") },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-[#F5C800] rounded-xl flex items-center justify-center font-display text-black text-xl font-black">
                D
              </div>
              <span className="font-display text-2xl tracking-widest text-white group-hover:text-[#F5C800] transition-colors">
                DONERIUM
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            {/* Social */}
            <a
              href="https://instagram.com/donerium.03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#F5C800] transition-colors text-sm w-fit"
            >
              <InstagramIcon />
              @donerium.03
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              {t("nav_title")}
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-[#F5C800] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              {t("contacts_title")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a href="tel:+77055107420" className="hover:text-[#F5C800] transition-colors">
                +7 705 510 74 20
              </a>
              <p>ул. Еркина Ауельбекова 141</p>
              <p>Кокшетау, Казахстан</p>
              <p>11:00 — 01:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>© 2024 DONERIUM. {t("rights")}.</p>
          <p className="flex items-center gap-1">
            {t("made")} <Heart size={10} className="text-[#F5C800] fill-[#F5C800]" /> in Kokshetau
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
