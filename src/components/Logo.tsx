import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroTitle from "./HeroTitle";

const Logo: React.FC = () => {
  const star = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.to(star.current, {
      duration: 2,
      filter: "brightness(0) saturate(100%) invert(38%) sepia(67%) saturate(4679%) hue-rotate(243deg) brightness(105%) contrast(103%)",
      ease: "power3.out",
    });

    gsap.to(star.current, {
      rotate: 360,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      repeatDelay: 2,
    });


    if (star.current) {
      star.current.addEventListener("mouseenter", () => {
        gsap.to(star.current, {
          ease: "power2.out",
          scale: 1.3,
          duration: 0.5,
          opacity: 0, 
        });
      });

      star.current.addEventListener("mouseleave", () => {
        gsap.to(star.current, {
          scale: 1, // Vuelve al tamaño original
          duration: 0.3,
          opacity: 1, // Duración de la animación
        });
      });
    }
  }, []);

  return (
    <div className="flex items-center">
      
        

      <Image
        id="starImage"
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
