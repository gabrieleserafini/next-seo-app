import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ["/", "/(it|en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
