"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card = ({
  icon,
  text,
  className,
}: {
  icon?: string;
  text: string;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.fromTo(card, {
      y: -50,
      opacity: 0,
    }, { 
      y: 0,
      opacity: 1,
      ease: "back.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 10%",
        toggleActions: "play reverse play reverse"
      }
    })
    const tl = gsap.timeline({ paused: true });

    tl.to(card, {
      filter: "hue-rotate(20deg)",
      duration: 0.5,
      ease: "power1.inOut",
    });

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      card.removeEventListener("mouseenter", () => tl.play());
      card.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gradient-to-b from-[#8C52FF] to-[#662ECC] rounded-xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col items-center w-full justify-center ${className} min-h-40`}
    >
      {icon && (
        <div className="md:p-2">
          <Image
            src={icon}
            className="object-fill w-11 sm:w-14"
            alt="icon"
            width={60}
            height={60}
          />
        </div>
      )}
      <div className="h-full flex items-center justify-center">
        <p className="text-white text-center mt-2 md:mt-5">{text}</p>
      </div>
    </div>
  );
};

export default Card;
