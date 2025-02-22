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

    // Animación de latido (palpitación)
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.7,
      repeat: -1,
      ease: "sine.out",
      repeatDelay: 2,
    });

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.7,
      delay: 0.7,
      repeat: -1,
      ease: "sine.out",
      repeatDelay: 2,
    });

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        borderColor: "#ffffff",
        ease: "power2.out",
        duration: 0.4,
      });
      gsap.to(bgEffect, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.4,
      });
      gsap.to(text, {
        color: "#FFFFFF",
        duration: 0.3,
        ease: "power2.out",
        delay: 0.4,
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(bgEffect, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(text, {
        color: "#662ECC",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(buttonRef.current, {
        borderColor: "#662ECC",
        duration: 0.4,
      });
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-2 rounded-3xl border-4  border-darkViolet font-bold"
    >
      {/* Fondo con degradado animado */}
      <span className="effect absolute left-0 top-0 w-full h-full bg-gradient-to-r from-darkViolet to-lightViolet rounded-3xl"></span>

      {/* Texto */}
      <span className="text relative z-10 text-darkViolet">Contáctanos</span>
    </button>
  );
};

export default ContactButton;
