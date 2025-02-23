import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MagicLink from "./MagicLink";
import ContactButton from "./ContactButton";
import Hamburger from "./Hamburger";
import gsap from "gsap";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const header = useRef(null);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
     gsap.fromTo(
       header.current,
       {y: -50 },
       {
         opacity: 1,
         y: 0,
         duration: 1,
         ease: "power2.out",
         scrollTrigger: {
           trigger: "#nosotros",
           start: "top 10%",
           toggleActions: "play none none reverse",
         },
       }
     );
  }, []);

  return (
    <>
      <div className="w-full fixed top-0 flex items-center justify-between px-4 bg-white border-b-[1px] border-zinc-300 z-50 opacity-0" ref={header}>
        <Link href={"#"}>
          <Image
            alt="Logo Cutie Mark"
            src={"/cutieLogo.png"}
            className="object-contain h-20 sm:h-30 "
            width={344}
            height={100}
          />
        </Link>

        <div className="hidden sm:flex sm:justify-around w-full items-center h-full font-semibold flex-wrap gap-x-3 ">
          <MagicLink url={"#nosotros"} text="Sobre Nosotros" />
          <MagicLink url={"#servicios"} text="Servicios" />
          <MagicLink url={"#mision"} text="Misión" />
          <MagicLink url={"#vision"} text="Vision" />
          <MagicLink url={"#valores"} text="Valores" />
          <ContactButton handleClick={() => alert("hola")} />
        </div>
        <Hamburger funcion={
          openMenu
        } />
      </div>
      {isOpenMenu && (
        <div className="fixed top-20 left-0 w-full bg-gradient-to-b from-darkViolet to-lightViolet flex flex-col items-center justify-center font-semibold p-4 gap-3 text-white z-50">
          <Link onClick={closeMenu} href={"#nosotros"}>
            {">"} Sobre nosotros
          </Link>
          <a onClick={closeMenu} href={"#servicios"}>
            {">"} Servicios
          </a>
          <Link onClick={closeMenu} href={"#mision"}>
            {">"} Misión
          </Link>
          <Link onClick={closeMenu} href={"#vision"}>
            {">"} Vision
          </Link>
          <Link onClick={closeMenu} href={"#valores"}>
            {">"} Valores
          </Link>
          <button className="bg-gradient-to-t  from-darkViolet to-lightViolet px-6 py-2 text-white rounded-md font-semibold ">
            Contáctanos
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
