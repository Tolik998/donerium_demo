"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Flame, Droplets, Leaf, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Flame, title: t("feat1_title"), desc: t("feat1_desc") },
    { icon: Droplets, title: t("feat2_title"), desc: t("feat2_desc") },
    { icon: Leaf, title: t("feat3_title"), desc: t("feat3_desc") },
    { icon: Zap, title: t("feat4_title"), desc: t("feat4_desc") },
  ];

  const stats = [
    { num: "20+", label: t("stat1") },
    { num: "300+", label: t("stat2") },
    { num: "5", label: t("stat3") },
  ];

  return (
    <section id="about" ref={ref} className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5C800]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                  alt="Мясо на гриле"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="img-zoom rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1773620494884-940e0db95e46?w=400&q=80"
                    alt="Донер с фри"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-zoom rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
                    alt="Сочный бургер"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-yellow rounded-2xl px-5 py-4 border border-[#F5C800]/20"
            >
              <div className="font-display text-4xl text-[#F5C800] leading-none">2023</div>
              <div className="text-white/50 text-xs mt-1">основано</div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div className="flex flex-col gap-8">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <span className="badge">{t("badge")}</span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none"
            >
              <span className="text-white">{t("title")} </span>
              <span className="gradient-text">{t("title2")}</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              <p className="text-white/60 text-lg leading-relaxed">{t("desc")}</p>
              <p className="text-white/60 text-lg leading-relaxed">{t("desc2")}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl gradient-text">{s.num}</div>
                  <div className="text-white/40 text-xs mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Feature grid */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-4 flex items-start gap-3 hover:border-[#F5C800]/20 border border-transparent transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F5C800]/10 flex items-center justify-center shrink-0">
                    <f.icon size={16} className="text-[#F5C800]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{f.title}</div>
                    <div className="text-xs text-white/40 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
