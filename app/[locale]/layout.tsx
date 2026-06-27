import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";

export const metadata: Metadata = {
  title: "DONERIUM — Премиум донеры и бургеры в Кокшетау",
  description: "Самые сочные донеры и бургеры в Кокшетау. Свежее мясо, фирменный соус, хрустящая корочка. Работаем до 01:00.",
  keywords: "донер, бургер, фаст-фуд, Кокшетау, шаурма, DONERIUM",
  openGraph: {
    title: "DONERIUM — Премиум донеры и бургеры в Кокшетау",
    description: "Самые сочные донеры в Кокшетау. Максимум мяса. Фирменный соус. Хрустящая корочка.",
    url: "https://donerium.kz",
    siteName: "DONERIUM",
    locale: "ru_KZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kz" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "DONERIUM",
              description: "Премиум донеры и бургеры в Кокшетау",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Еркина Ауельбекова 141",
                addressLocality: "Кокшетау",
                addressCountry: "KZ",
              },
              telephone: "+77055107420",
              openingHours: "Mo-Su 11:00-01:00",
              servesCuisine: ["Shawarma", "Burgers", "Fast Food"],
              priceRange: "₸₸",
              sameAs: ["https://instagram.com/donerium.03"],
            }),
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
