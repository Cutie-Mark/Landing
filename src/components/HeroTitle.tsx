"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  useEffect(() => {
    const text = new SplitType(".hero-title", { types: "words,chars" }) || {
      chars: [],
    };

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
              y: gsap.utils.random(-100, -50),
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
      <h1 className="items-center italic text-9xl mt-8 hero-title">{title}</h1>
      {subtitle && (
        <h2 className="font-inter text-lightViolet text-4xl font-normal text-center mt-2">
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default HeroTitle;
