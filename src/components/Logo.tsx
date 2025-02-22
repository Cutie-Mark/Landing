import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const Logo: React.FC = () => {
  useEffect(() => {
    gsap.to("#starImage", {
      duration: 2,
      filter: "brightness(0) saturate(100%) invert(38%) sepia(67%) saturate(4679%) hue-rotate(243deg) brightness(105%) contrast(103%)",
      ease: "power3.out",
    });

    gsap.to("#starImage", {
      rotate: 360,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <div className="flex items-center">
      
        

      <Image
        id="starImage"
        src="/estrella.svg"
        alt="logo estrella"
        width={275}
        height={106}
       
      />
      <div className="flex flex-col ">
        <h1 className="items-center italic text-9xl mt-8">CUTIE MARK</h1>
        <h2 className="font-inter text-lightViolet text-4xl font-normal text-center mt-2">
          Software Solutions
        </h2>
      </div>
    </div>
  );
};

export default Logo;
