"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Plus, Flame, Star, Sparkles } from "lucide-react";
import menuData from "@/locales/menu.json";

const TAG_CONFIG: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  bestseller: { label: "Хит", color: "text-[#F5C800] bg-[#F5C800]/10 border-[#F5C800]/30", icon: Star },
  hot: { label: "Острый", color: "text-red-400 bg-red-500/10 border-red-500/30", icon: Flame },
  new: { label: "Новинка", color: "text-green-400 bg-green-500/10 border-green-500/30", icon: Sparkles },
  big: { label: "XXL", color: "text-purple-400 bg-purple-500/10 border-purple-500/30", icon: Star },
};

const CAT_ICONS: Record<string, string> = {
  doners: "🌯",
  burgers: "🍔",
  sides: "🍟",
  drinks: "🥤",
};

export default function MenuSection() {
  const t = useTranslations("menu");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("doners");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categoryLabels: Record<string, string> = {
    doners: t("cat_doners"),
    burgers: t("cat_burgers"),
    sides: t("cat_sides"),
    drinks: t("cat_drinks"),
  };

  const items = menuData.items[activeCategory as keyof typeof menuData.items] || [];

  return (
    <section id="menu" ref={ref} className="section-pad bg-[#0d0d0d] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5C800]/4 rounded-full blur-[100px]" />
      </div>

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

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 sm:gap-3 justify-center flex-wrap mb-10"
        >
          {menuData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#F5C800] text-black shadow-[0_0_25px_rgba(245,200,0,0.4)]"
                  : "glass text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">{CAT_ICONS[cat]}</span>
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {items.map((item: { id: string; name_ru: string; name_kz: string; desc_ru: string; desc_kz: string; price: number; tag: string; image: string }, i: number) => (
            <MenuCard
              key={item.id}
              item={item}
              locale={locale}
              t={t}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  locale,
  t,
  index,
}: {
  item: { id: string; name_ru: string; name_kz: string; desc_ru: string; desc_kz: string; price: number; tag: string; image: string };
  locale: string;
  t: ReturnType<typeof useTranslations>;
  index: number;
}) {
  const name = locale === "ru" ? item.name_ru : item.name_kz;
  const desc = locale === "ru" ? item.desc_ru : item.desc_kz;
  const tag = TAG_CONFIG[item.tag];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="menu-card group bg-[#141414] border border-white/5 rounded-3xl overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="img-zoom relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={name}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

        {/* Tag badge */}
        {tag && (
          <div className={`absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-bold ${tag.color}`}>
            <tag.icon size={10} />
            {tag.label}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#F5C800] transition-colors duration-200">
          {name}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed flex-1">{desc}</p>

        {/* Price + add */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="font-display text-2xl text-[#F5C800]">
            {item.price.toLocaleString()} {t("tenge")}
          </span>
          <a
            href="https://wa.me/77055107420"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[#F5C800]/10 hover:bg-[#F5C800] flex items-center justify-center text-[#F5C800] hover:text-black transition-all duration-200 group/btn"
          >
            <Plus size={16} className="group-hover/btn:rotate-90 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
