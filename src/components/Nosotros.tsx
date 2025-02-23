"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nosotros = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const divAnimation = gsap.fromTo(
      divRef.current,
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        ease: "power2.out",
        scaleX: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 60%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const textAnimation = gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,

        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 60%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      animation.kill();
      divAnimation.kill();
      textAnimation.kill();
    };
  }, []);

  return (
    <div className="bg-[url(/bg-image-1.png)] bg-cover z-0">
      <div
        id="nosotros"
        className="flex justify-center w-full  min-h-screen h-auto bg-cover relative z-0 mt-10 mb-10"
      >
        <div className="snap-always flex-col md:flex-row flex justify-center items-center gap-20 sm:gap-10 w-4/5">
          <h2
            ref={boxRef}
            className="text-white text-3xl sm:text-5xl font-bold w-full"
          >
            ¿Quienes Somos?
          </h2>
          <div className="relative w-full">
            <div
              ref={divRef}
              className="bg-white rounded-xl p-5 sm:p-10 w-full origin-left"
            >
              <p className=" opacity-0">
                Somos una empresa apasionada por la innovación y la tecnología,
                dedicada a transformar negocios a través de soluciones digitales
                que impulsan su crecimiento. Nos especializamos en desarrollar,
                comercializar e implementar herramientas tecnológicas de
                vanguardia, diseñadas para optimizar procesos, mejorar la
                productividad y fortalecer la competitividad de las empresas en
                un mundo cada vez más digital.
              </p>
            </div>

            <p
              ref={textRef}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-100 p-5"
            >
              Somos una empresa apasionada por la innovación y la tecnología,
              dedicada a transformar negocios a través de soluciones digitales
              que impulsan su crecimiento. Nos especializamos en desarrollar,
              comercializar e implementar herramientas tecnológicas de
              vanguardia, diseñadas para optimizar procesos, mejorar la
              productividad y fortalecer la competitividad de las empresas en un
              mundo cada vez más digital.
            </p>
          </div>
        </div>
      </div>
      <div className="h-5"></div>
    </div>
  );
};

export default Nosotros;
