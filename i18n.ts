import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "it", "es"];

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
  "/about": "/about",
  "/blog": "/blog",
  "/blog/[slug]": "/blog/[slug]",
  "/services": "/services",
  "/faqs": "/faqs",
  "/terms": "/terms",
  "/privacy": "/privacy",
} satisfies Pathnames<typeof locales>;

export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "en"
        ? import("./messages/en.json")
        : import(`./messages/${locale}.json`))
    ).default,
  };
});
