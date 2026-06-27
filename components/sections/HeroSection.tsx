"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Clock } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#F5C800]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F5C800]/3 blur-[100px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#F5C800]/4 blur-[80px]" />
      </div>

      {/* Grid lines decorative */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5C800 1px, transparent 1px), linear-gradient(to bottom, #F5C800 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-[#F5C800] animate-pulse" />
                {t("badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display leading-none tracking-wider">
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white">
                  {t("headline1")}
                </span>
                <span className="block text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] gradient-text text-glow">
                  {t("headline2")}
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/60">
                  {t("headline3")}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {[t("sub1"), t("sub2"), t("sub3")].map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-white/70"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#F5C800] text-black font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#FFD700] transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,200,0,0.5)] overflow-hidden"
              >
                <span className="relative z-10">{t("cta_menu")}</span>
                <ArrowDown
                  size={16}
                  className="relative z-10 group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/77055107420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass-yellow text-[#F5C800] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#F5C800]/10 transition-all duration-300 border border-[#F5C800]/20 hover:border-[#F5C800]/50"
              >
                <WhatsAppIcon />
                {t("cta_order")}
              </a>
            </motion.div>

            {/* Hours badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-white/40"
            >
              <Clock size={14} className="text-[#F5C800]" />
              <span>{t("hours")}</span>
            </motion.div>
          </div>

          {/* Right: hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#F5C800]/10 blur-3xl scale-90 animate-pulse" />

            {/* Image container */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F5C800]/10 to-transparent border border-[#F5C800]/10" />
              <Image
                src="https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=800&q=85"
                alt="DONERIUM Premium Shawarma Doner"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/3 glass-yellow rounded-2xl px-4 py-3 border border-[#F5C800]/20"
              >
                <div className="text-[#F5C800] font-display text-3xl leading-none">5</div>
                <div className="text-white/50 text-xs mt-1">минут</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-1/3 glass rounded-2xl px-4 py-3 border border-white/10"
              >
                <div className="text-white font-display text-2xl leading-none">XXL</div>
                <div className="text-white/50 text-xs mt-1">порция</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#F5C800] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
    </svg>
  );
}
