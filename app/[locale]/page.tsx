import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kz" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <GallerySection />
      <CTASection />
      <ContactsSection />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </main>
  );
}
