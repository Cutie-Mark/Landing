import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const CardPhoto = ({ image, text }: { image?: string; text: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !frontRef.current || !backRef.current) return;

    gsap.set(backRef.current, { rotationY: -180 });

    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;


    const ctx = gsap.context(() => {
      card.addEventListener("mouseenter", () => {
        gsap.to(front, { rotationY: 180, duration: 1, ease: "power2.inOut" });
        gsap.to(back, { rotationY: 0, duration: 1, ease: "power2.inOut" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(front, { rotationY: 0, duration: 1, ease: "power2.inOut" });
        gsap.to(back, { rotationY: -180, duration: 1, ease: "power2.inOut" });
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-44 sm:h-72 perspective-500"
    >
      <div
        ref={frontRef}
        className="absolute inset-0 z-10 backface-hidden bg-black text-white flex items-end justify-end p-3 rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image src="/abrir.png" alt="abrir" width={30} height={30} />
      </div>

      <div
        ref={backRef}
        className="rounded-xl absolute p-5 inset-0 z-10 backface-hidden flex flex-col justify-center items-center text-white bg-gradient-to-b from-[#BA97FF] to-[#681FF9]"
      >
        <p className="text-lg font-bold">{text}</p>
      </div>
    </div>
  );
};

export default CardPhoto;
