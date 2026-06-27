"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function ContactsSection() {
  const t = useTranslations("contacts");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    {
      icon: MapPin,
      label: t("address_label"),
      value: t("address"),
      href: "https://maps.google.com/?q=Еркина+Ауельбекова+141+Кокшетау",
    },
    {
      icon: Phone,
      label: t("phone_label"),
      value: "+7 705 510 74 20",
      href: "tel:+77055107420",
    },
    {
      icon: Clock,
      label: t("hours_label"),
      value: t("hours"),
      href: null,
    },
    {
      icon: Instagram,
      label: t("instagram_label"),
      value: "@donerium.03",
      href: "https://instagram.com/donerium.03",
    },
  ];

  return (
    <section id="contacts" ref={ref} className="section-pad bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C800]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5C800]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4 inline-block">{t("badge")}</span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-white">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact cards */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-5 glass rounded-2xl p-5 hover:border-[#F5C800]/20 border border-transparent transition-all duration-300 group"
                  >
                    <ContactIcon icon={Icon} />
                    <div>
                      <div className="text-xs text-white/40 font-medium uppercase tracking-widest mb-1">{label}</div>
                      <div className="text-white font-semibold text-base group-hover:text-[#F5C800] transition-colors">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-5 glass rounded-2xl p-5 border border-transparent">
                    <ContactIcon icon={Icon} />
                    <div>
                      <div className="text-xs text-white/40 font-medium uppercase tracking-widest mb-1">{label}</div>
                      <div className="text-white font-semibold text-base">{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a
                href="https://wa.me/77055107420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#20BA5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-300 w-full"
              >
                <WhatsAppIcon />
                {t("whatsapp_label")}
              </a>
            </motion.div>
          </div>

          {/* Right: embedded map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-auto lg:min-h-[400px] border border-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.123456789!2d69.39!3d53.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KPQu9C40YbQsCDQldGA0LrQuNC90LAg0JDRg9C10LvRjNCx0LXQutC-0LLQsCAxNDEsINCa0L7QutGI0LXRgtCw0YM!5e0!3m2!1sru!2skz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
              title={t("map_title")}
            />
            {/* Yellow border overlay */}
            <div className="absolute inset-0 rounded-3xl border border-[#F5C800]/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="w-12 h-12 rounded-2xl bg-[#F5C800]/10 flex items-center justify-center shrink-0">
      <Icon size={20} className="text-[#F5C800]" />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
    </svg>
  );
}
