"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ContactButtonProps {
  handleClick: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ handleClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const bgEffect = buttonRef.current.querySelector(".effect");
    const text = buttonRef.current.querySelector(".text");

    gsap.set(bgEffect, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(text, { color: "#662ECC" });

    const handleHover = () => {
      gsap.to(buttonRef.current, {
        borderColor: "#ffffff",
        ease: "power2.out",
        duration: 0.5,
      });
      gsap.to(bgEffect, {
        scaleX: 1,
        scaleY: 1.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.5,
      });
      gsap.to(text, {
        color: "#FFFFFF",
        duration: 0.3,
        ease: "power2.out",
        delay: 0.5,
        onComplete: () => {
          gsap.to(bgEffect, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 1.1,
          });
          gsap.to(text, {
            delay: 1.1,
            color: "#662ECC",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(buttonRef.current, {
            delay: 1.5,
            borderColor: "#662ECC",
            duration: 0.5,
          });
        },
      });
    };

    buttonRef.current.addEventListener("mouseenter", handleHover);

    buttonRef.current.addEventListener("mouseleave", () => {});
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-2 rounded-3xl border-4  border-darkViolet font-bold"
    >
      {/* Fondo con degradado animado */}
      <span className="effect absolute left-0 top-0 w-full h-full bg-gradient-to-r from-darkViolet to-lightViolet"></span>

      {/* Texto */}
      <span className="text relative z-10 text-darkViolet">Contáctanos</span>
    </button>
  );
};

export default ContactButton;
