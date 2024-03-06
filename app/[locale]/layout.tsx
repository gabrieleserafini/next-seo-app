import { locales } from "~/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";

import { Montserrat as CustomFont } from "next/font/google";

import Providers from "~/components/atoms/Providers";
import Header from "~/components/widgets/Header";
import Footer2 from "~/components/widgets/Footer2";

const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: {
      template: "%s | Inflead",
      default: "Inflead",
    },
    generator: "Inflead",
    applicationName: t("metaTitleDefault"),
    referrer: "origin-when-cross-origin",
    creator: "Inflead",
    publisher: "Inflead",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    description: t("metaDescriptionDefault"),
    keywords: t("metaKeywordsDefault"),
    metadataBase: new URL("https://inflead.com"),
    alternates: {
      canonical: `/`,
      languages: {
        en: `/en`,
        es: `/es`,
        it: `/it`,
      },
    },
    category: t("metaCategoryDefault"),
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: t("metaTitleDefault"),
      description: t("metaDescriptionDefault"),
      url: `https://inflead.com/${locale}`,
      siteName: "Inflead",
      images: [
        {
          url: "https://inflead.com/favicon.ico",
          width: 600,
          height: 600,
          alt: "Inflead",
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-50 dark:bg-backgroundDark">
        <Providers>
          <NextIntlClientProvider messages={pick(messages, "Header")}>
            <Header />
          </NextIntlClientProvider>
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
