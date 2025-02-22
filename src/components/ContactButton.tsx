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

    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power.inOut",
    });

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(bgEffect, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(text, { color: "#FFFFFF", duration: 0.3, ease: "power2.out" });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(bgEffect, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(text, { color: "#662ECC", duration: 0.3, ease: "power2.out" });
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-2 rounded-full border-4 border-white font-bold transition-colors duration-300"
    >
      <span className="effect absolute left-0 top-0 w-full h-full bg-gradient-to-r from-darkViolet to-lightViolet rounded-full"></span>

  
      <span className="text relative z-10 text-darkViolet underline underline-offset-4">Contáctanos</span>
    </button>
  );
};

export default ContactButton;
