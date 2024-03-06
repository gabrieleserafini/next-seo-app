import { HeroProps } from "~/shared/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import CTA from "../common/CTA";
import ImageSlider from "../atoms/ImageSlider";
import sideImg from "~/assets/images/hero-side.svg";
import { unstable_setRequestLocale } from "next-intl/server";

const Hero = ({
  title,
  subtitle,
  callToAction,
  callToAction2,
  images,
  image,
}: HeroProps) => {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  const t = useTranslations("Hero");
  return (
    <section id="heroOne">
      <div className="mx-auto px-4 sm:px-10">
        <div className="py-2 md:py-20 flex flex-col md:flex-row">
          <div className="flex flex-col gap-6 justify-between max-w-screen-lg relative z-10 pb-10">
            <div>
              {subtitle && <p className="mb-5 text-subtitle">{t(subtitle)}</p>}
              {title && (
                <h1 className="text-h4 mb-5 md:text-h3 lg:text-h2">
                  {t(title)}
                </h1>
              )}
            </div>
            <div>
              <div className="flex max-w-none min-w-72 flex-col flex-nowrap gap-4 sm:flex-row">
                {callToAction && (
                  <CTA
                    text={t(callToAction.text)}
                    callToAction={callToAction}
                    linkClass="btn btn-primary"
                  />
                )}
                {callToAction2 && (
                  <CTA
                    text={t(callToAction2.text)}
                    callToAction={callToAction2}
                    linkClass="btn"
                  />
                )}
              </div>
            </div>
          </div>
          {images && <ImageSlider images={images} />}
          {image && (
            <div className="hidden md:block relative z-10">
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-3xl shadow-xl max-w-lg"
                loading="eager"
                priority
              />
            </div>
          )}
          <div className="hidden md:block absolute right-0 top-0 z-[5]">
            <Image
              src={sideImg}
              alt={sideImg}
              className="w-full h-full max-h-screen min-h-screen object-cover transition-all duration-500 ease-in-out"
              loading="eager"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
