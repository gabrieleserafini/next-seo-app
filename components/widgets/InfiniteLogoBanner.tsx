"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import LogoBannerSkeleton from "../atoms/skeletons/LogoBannerSkeleton";

const InfiniteLogoBanner = ({ logos, initialDirection = "right" }) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      const repeatTimes = Math.ceil(screenWidth / (150 * logos.length)) * 2; // 150 è la larghezza approssimativa di ciascun logo
      setContainerWidth(100 * logos.length * repeatTimes);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [logos.length]);

  useEffect(() => {
    const duration = containerWidth / 65;

    controls.start({
      x:
        initialDirection === "right"
          ? [-containerWidth / 2, 0]
          : [0, -containerWidth / 2],
      transition: { repeat: Infinity, duration: duration, ease: "linear" },
    });
  }, [controls, containerWidth, initialDirection]);

  const extendedLogos = Array(Math.ceil(containerWidth / (100 * logos.length)))
    .fill(logos)
    .flat();

  return (
    <div ref={bannerRef} className="overflow-hidden whitespace-nowrap py-2">
      {extendedLogos.length > 0 ? extendedLogos.map((logo, index) => (
        <motion.div
          key={index}
          animate={controls}
          style={{ display: "inline-flex", width: "150px", justifyContent: "center", alignItems: "center" }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={50}
            loading="eager"
            className="w-[100px] h-[50px] object-contain"
          />
        </motion.div>
      )) : <LogoBannerSkeleton />}
    </div>
  );
};

export default InfiniteLogoBanner;
