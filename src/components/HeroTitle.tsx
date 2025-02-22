"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  const divRef = useRef(null);
  useEffect(() => {
    const text = new SplitType(".hero-title", { types: "words,chars" }) || {
      chars: [],
    };
    const subtitle = new SplitType(".hero-subtitle", { types: "words,chars" }) || {
      chars: [],
    };

    if (subtitle.chars) {
      subtitle.chars.forEach((char, index) => {
        const charTl = gsap.timeline();
        charTl.from(char, {
          x: 200,
          duration: 0.75,
          delay: index * 0.03,
          opacity: 0,
          ease: "power2.out",
        });
        charTl.to(char, {
          color: "rgb(209, 179,255)",
          duration: 0.3,
          delay: index * 0.01,
          ease: "linear",
          repeat: -1,
          repeatDelay: 3,
        });
        charTl.to(char, {
          color: "rgb(140,83,255)",
          duration: 0.3,
          delay: 0.3,
          ease: "linear",
          repeat: -1,
          repeatDelay: 3,
        });
      });
    }

    if (text.chars) {
      text.chars.forEach((char, index) => {
        const charTl = gsap.timeline();
        charTl.from(char, {
          y:-150,

          duration: 0.75,
          delay: index * 0.05,
          opacity: 0,
          ease: "back.out",
        });

        charTl.from(
          char,
          {
            color: `rgb(${gsap.utils.random(0, 255)},${gsap.utils.random(
              0,
              255
            )},${gsap.utils.random(0, 255)})`,
            duration: 1,
          },
          "-=0.25"
        );

        char.addEventListener("mouseenter", charsHover);

        function charsHover() {
          gsap
            .timeline()
            .to(char, {
              y: -70,
              ease: "power2.out",
              color: `rgb(${gsap.utils.random(0, 255)},${gsap.utils.random(
                0,
                255
              )},${gsap.utils.random(0, 255)})`,
              onStart: () => {
                char.removeEventListener("mouseenter", charsHover);
              },
              duration: 0.3,
            })
            .to(char, {
              y: 0,
              color: "#000000",
              delay: 0.25,
              ease: "power2.out",
              onComplete: () => {
                char.addEventListener("mouseenter", charsHover);
              },
            });
        }
      });
    }
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="items-center italic text-4xl sm:text-9xl mt-8 hero-title">{title}</h1>
      {subtitle && (
        <h2 className="font-inter text-lightViolet text-xl sm:text-4xl font-normal text-center mt-2 hero-subtitle" ref={divRef}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default HeroTitle;
