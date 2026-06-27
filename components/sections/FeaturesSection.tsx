"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Beef, FlaskConical, Package, MoonStar, Wheat } from "lucide-react";

const features = [
  { icon: Truck, key: "f1" },
  { icon: Beef, key: "f2" },
  { icon: FlaskConical, key: "f3" },
  { icon: Package, key: "f4" },
  { icon: MoonStar, key: "f5" },
  { icon: Wheat, key: "f6" },
];

export default function FeaturesSection() {
  const t = useTranslations("features");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative yellow bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C800]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C800]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-block">{t("badge")}</span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none">
            <span className="text-white">{t("title")} </span>
            <span className="gradient-text">{t("title2")}</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {features.map(({ icon: Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass rounded-3xl p-6 lg:p-8 hover:border-[#F5C800]/20 border border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,200,0,0.06)] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5C800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5C800]/10 group-hover:bg-[#F5C800]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <Icon size={22} className="text-[#F5C800]" />
                </div>

                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#F5C800] transition-colors duration-200">
                  {t(`${key}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {t(`${key}_desc` as Parameters<typeof t>[0])}
                </p>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 font-display text-6xl text-white/3 group-hover:text-[#F5C800]/5 transition-colors duration-300 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
