"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagicLinkProps {
  url: string;
  text: string;
}

const MagicLink: React.FC<MagicLinkProps> = ({ url, text }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;

    const underline = linkRef.current.querySelector(".underline-effect");

    gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });

    linkRef.current.addEventListener("mouseenter", () => {
      gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out" });
    });

    linkRef.current.addEventListener("mouseleave", () => {
      gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.out" });
    });
  }, []);

  return (
    <Link
      ref={linkRef}
      href={url}
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      {text}
      <span className="underline-effect absolute left-0 bottom-0 w-full h-[2px] bg-zinc-800"></span>
    </Link>
  );
};

export default MagicLink;
