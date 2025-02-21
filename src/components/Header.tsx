import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <div className="w-full fixed top-0 flex items-center  px-4 bg-white">
            <Link href={"#"}>
                <Image
                    alt="Logo Cutie Mark"
                    src={"/cutieLogo.png"}
                    className="object-contain hidden md:block"
                    width={344}
                    height={100}
                />
                <Image
                    alt="Logo Cutie Mark"
                    src={"/Cutie Mark Estrella.png"}
                    className="object-contain block md:hidden"
                    width={100}
                    height={100}
                />
            </Link>

            <div className="flex justify-around w-full items-center h-full font-semibold ">
                <Link href={"#nosotros"}>{">"} Sobre nosotros</Link>
                <a href={"#servicios"}>{">"} Servicios</a>
                <Link href={"#mision"}>{">"} Misión</Link>
                <Link href={"#vision"}>{">"} Vision</Link>
                <Link href={"#valores"}>{">"} Valores</Link>
                <button className="bg-gradient-to-r  from-lightViolet to-darkViolet px-6 py-2 text-white rounded-md font-semibold ">
                    Contáctanos
                </button>
            </div>
        </div>
    );
};

export default Header;
