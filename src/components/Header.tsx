import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    const closeMenu = () => {
        setIsOpenMenu(false);
    };
    return (
        <>
            <div className="w-full fixed top-0 flex items-center justify-between px-4 bg-white">
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
                    <Link href={"#nosotros"}>{">"} Sobre nosotros</Link>
                    <a href={"#servicios"}>{">"} Servicios</a>
                    <Link href={"#mision"}>{">"} Misión</Link>
                    <Link href={"#vision"}>{">"} Vision</Link>
                    <Link href={"#valores"}>{">"} Valores</Link>
                    <button className="bg-gradient-to-r  from-lightViolet to-darkViolet px-6 py-2 text-white rounded-md font-semibold ">
                        Contáctanos
                    </button>
                </div>
                <button
                    onClick={openMenu}
                    className="bg-gradient-to-r from-lightViolet to-darkViolet p-2  rounded-md font-semibold sm:hidden flex flex-col justify-between h-10 w-12"
                >
                    <div className="bg-white h-1 w-full"></div>
                    <div className="bg-white h-1 "></div>
                    <div className="bg-white h-1 "></div>
                </button>
            </div>
            {isOpenMenu && (
                <div className="fixed top-20 left-0 w-full bg-gradient-to-b from-darkViolet to-lightViolet flex flex-col items-center justify-center font-semibold p-4 gap-3 text-white">
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
