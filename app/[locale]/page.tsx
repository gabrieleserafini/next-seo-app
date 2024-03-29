import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "~/components/widgets/Hero";
import SocialProof from "~/components/widgets/SocialProof";
import Features from "~/components/widgets/Features";
import Content from "~/components/widgets/Content";
import Steps from "~/components/widgets/Steps";
import Testimonials from "~/components/widgets/Testimonials";
import FAQs2 from "~/components/widgets/FAQs2";
import Pricing from "~/components/widgets/Pricing";
import Team from "~/components/widgets/Team";
import CallToAction2 from "~/components/widgets/CallToAction2";
import Contact from "~/components/widgets/Contact";
import LogoBannerSkeleton from "~/components/atoms/skeletons/LogoBannerSkeleton";

import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  logoBannerHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from "~/shared/data/pages/home.data";

const LogoBanner = dynamic(
  () => import("~/components/widgets/InfiniteLogoBanner"),
  {
    loading: () => <LogoBannerSkeleton />,
  }
);

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <>
      <Hero {...heroHome} />
      <LogoBanner {...logoBannerHome} />
      <LogoBanner {...logoBannerHome} initialDirection="left" />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}