"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Mision from "@/components/Mision";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Valores from "@/components/Valores";
import Vision from "@/components/Vision";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const arrowRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(arrowRef.current,{
        rotate: 0,
        duration: 1,
        ease: "back.inOut",
    }, {
        rotate: 180,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
            trigger: arrowRef.current,
            start: "top 80%",
            end: "top top",
            toggleActions: "play reverse play reverse",
        }
    } )
  }, []);

  return (
    <div className=" snap-y snap-mandatory font-semibold flex flex-col items-center font-montserrat">
      <div>
        <div className="snap-start w-full h-screen flex flex-col justify-between items-center">
          <div></div>
          <Logo />
          <Image
            ref={arrowRef}
            src={"/arrow-down.svg"}
            alt="arrow-down"
            className="hover:cursor-pointer"
            height={50}
            width={50}
          />
        </div>

        <Header />
        <Nosotros />
        <Servicios />
        <Mision />
        <Vision />
        <Valores />
        <Footer />
      </div>
    </div>
  );
}
