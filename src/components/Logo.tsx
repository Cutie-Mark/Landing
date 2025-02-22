import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroTitle from "./HeroTitle";

const Logo: React.FC = () => {
  const star = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!star.current) return;

    const element = star.current;

    // Animaciones iniciales
    gsap.to(element, {
      duration: 2,
      filter:
        "brightness(0) saturate(100%) invert(38%) sepia(67%) saturate(4679%) hue-rotate(243deg) brightness(105%) contrast(103%)",
      ease: "power3.out",
    });

    gsap.to(element, {
      rotate: 360,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      repeatDelay: 2,
    });

    // Funciones para los eventos
    const handleMouseEnter = () => {
      gsap.timeline().to(element, {
        rotateY: 180,
        ease: "power2.out",
        scale: 1.2,
        duration: 1,
  
        onStart: () => {
          element.removeEventListener("mouseenter", handleMouseEnter);
        }
      }).to(element, {
        rotateY: -180,
        scale: 1,
        delay: 0.5,
        duration: 1,
        onComplete: () => {
          element.addEventListener("mouseenter", handleMouseEnter);
        }
      });
    };
    element.addEventListener("mouseenter", handleMouseEnter);

  }, []);

  return (
    <div className="flex items-center gap-2 ">
      <Image
        className="w-20 sm:w-52"
        src="/estrella.svg"
        alt="logo estrella"
        width={275}
        height={100}
        ref={star}
      />
      <HeroTitle title="CUTIE MARK" subtitle="Software Solutions" />
    </div>
  );
};

export default Logo;
