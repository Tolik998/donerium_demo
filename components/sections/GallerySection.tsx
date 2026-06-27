"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=800&q=80", alt: "Донер крупным планом", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", alt: "Сочный бургер", span: "" },
  { src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&q=80", alt: "Картофель фри", span: "" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", alt: "Мясо на гриле", span: "" },
  { src: "https://images.unsplash.com/photo-1773620494884-940e0db95e46?w=800&q=80", alt: "Донер с картофелем", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80", alt: "Смэш бургер", span: "" },
  { src: "https://images.unsplash.com/photo-1762284513096-e411d20c1a4d?w=600&q=80", alt: "Донер в лаваше", span: "" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", alt: "Чикен бургер", span: "" },
];

export default function GallerySection() {
  const t = useTranslations("gallery");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="section-pad bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C800]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4 inline-block">{t("badge")}</span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none">
            <span className="text-white">{t("title")} </span>
            <span className="gradient-text text-glow">{t("title2")}</span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`img-zoom group relative rounded-3xl overflow-hidden bg-[#141414] ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Yellow border on hover */}
              <div className="absolute inset-0 rounded-3xl border border-[#F5C800]/0 group-hover:border-[#F5C800]/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/donerium.03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-yellow border border-[#F5C800]/20 px-8 py-4 rounded-2xl text-[#F5C800] font-bold hover:bg-[#F5C800]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,200,0,0.2)]"
          >
            <InstagramIcon />
            @donerium.03
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
