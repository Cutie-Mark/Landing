"use client"
import React, { useState, useRef } from 'react';
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import gsap from 'gsap';

interface HamburgerProps {
  funcion: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({funcion}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    funcion();
    if (!isOpen) {
      gsap.to(mark.current, {duration: 0.7, opacity: 1,rotate: 90,});
      gsap.to(bars.current, {duration: 0.7, opacity: 0,rotate: 90});
    } else {
      gsap.to(mark.current, {duration: 0.7, opacity: 0, rotate: 0});
      gsap.to(bars.current, {duration: 0.7, opacity: 1, rotate: 0});
    }
    setIsOpen(!isOpen);
  }

  const mark = useRef(null);
  const bars = useRef(null);

  return (
    <div className="h-10 w-10 flex items-center justify-center" onClick={handle}>
      <XMarkIcon
      ref={mark}
      strokeWidth={2}
      className={`absolute text-lightViolet sm:hidden ${isOpen ? 'block' : 'hidden'}`}
      width={30}
      height={30}
      />
      <Bars2Icon
      ref={bars}
      className={`absolute text-lightViolet sm:hidden ${isOpen ? 'hidden' : 'block'}`}
      strokeWidth={2}
      width={30}
      height={30}
      />
    </div>
  );
};

export default Hamburger;