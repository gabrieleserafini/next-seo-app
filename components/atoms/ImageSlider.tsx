'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState([0, 1]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndices) => {
          const nextIndex1 = (prevIndices[0] + 2) % images.length;
          const nextIndex2 = (prevIndices[1] + 2) % images.length;
          return [nextIndex1, nextIndex2];
        });
  
        setIsVisible(true);
      }, 400);
    }, 8500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className={`transition-opacity duration-500 ease-in-out absolute z-0 top-0 left-0 ${isVisible ? 'opacity-20' : 'opacity-0'} rounded-lg overflow-hidden backdrop-blur-2xl`}>
        <Image
          src={images[currentIndex[0]].src}
          alt={images[currentIndex[0]].alt}
          className="w-full h-full max-h-screen min-h-screen object-cover transition-all duration-500 ease-in-out"
          loading="eager"
          placeholder="blur"
          priority
        />
      </div>
      <div className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} relative z-10 flex justify-center md:justify-start`}>
        <Image
          src={images[currentIndex[1]].src}
          alt={images[currentIndex[1]].alt}
          width={500}
          height={650}
          className="h-[500px] w-auto"
          loading="eager"
          placeholder="blur"
          priority
        />
      </div>
    </>
  );
};

export default ImageSlider;
