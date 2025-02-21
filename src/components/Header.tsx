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

            <div className="flex justify-around w-full items-center h-full">
                <Link href={"#nosotros"} className="font-semibold text-lg">
                    {">"} Sobre nosotros
                </Link>
                <Link href={"#servicios"} className="font-bold text-lg">
                    {">"} Servicios
                </Link>
                <Link href={"#mision"} className="font-bold text-lg">
                    {">"} Misión
                </Link>
                <Link href={"#vision"} className="font-bold text-lg">
                    {">"} Vision
                </Link>
                <Link href={"#valores"} className="font-semibold text-lg">
                    {">"} Valores
                </Link>
                <button className="bg-gradient-to-r  from-lightViolet to-darkViolet px-6 py-2 text-white rounded-md font-semibold text-lg">
                    Contáctanos
                </button>
            </div>
        </div>
    );
};

export default Header;
