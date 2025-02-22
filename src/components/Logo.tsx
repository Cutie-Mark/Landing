import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const Logo: React.FC = () => {
  useEffect(() => {
    gsap.to("#starImage", {
      duration: 2,
      rotation: 360,
      filter: "invert(40%) sepia(80%) saturate(500%) hue-rotate(200deg)",
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="flex items-center">
      <Image
        id="starImage"
        src="/Star.svg"
        alt="logo estrella"
        width={480}
        height={106}
        className="-mr-20 -ml-20"
      />
      <div className="flex flex-col ">
        <h1 className="items-center italic text-9xl mt-8">CUTIE MARK</h1>
        <h2 className="font-inter text-lightViolet text-3xl font-normal text-center mt-2">Software Solutions</h2>
      </div>
    </div>
  );
};

export default Logo;
