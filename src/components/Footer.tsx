import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-black">
                <div className=" text-white py-10 w-4/5 flex flex-col sm:flex-row ">
                    <div className="md:w-2/3">
                        <div className="flex items-center">
                            <h3 className="font-bold text-2xl">Cutie Mark</h3>
                            
                            <Image
                                src={"/Cutie Mark Estrella.png"}
                                alt="logo estrella"
                                width={76}
                                height={76}
                            />
                        </div>
                        <p className="font-medium">
                            Somos una empresa que busca comercializar e
                            implementar soluciones tecnológicas innovadoras para
                            mejorar la productividad y competitividad de las
                            empresas bolivianas, asegurando la calidad y
                            seguridad de nuestros productos y servicios.
                        </p>
                    </div>

                    <div className="w-full flex justify-center sm:justify-end items-end">
                        <div className="flex gap-2">
                            <Link
                                href={
                                    "https://discord.com/channels/961647000472932393/1341568200101335120"
                                }
                            >
                                <Image
                                    src={"/discord.svg"}
                                    alt={"logo discord"}
                                    height={38}
                                    width={38}
                                />
                            </Link>
                            <Link href={"https://www.instagram.com/"}>
                                <Image
                                    src={"/instagram.svg"}
                                    alt={"logo instagram"}
                                    height={38}
                                    width={38}
                                />
                            </Link>
                            <Link href={"https://github.com/Cutie-Mark"}>
                                <Image
                                    src={"/github.svg"}
                                    alt={"logo github"}
                                    height={38}
                                    width={38}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center font-normal">
                <p className="w-4/5 ">Todos los derechos reservados </p>
            </div>
        </>
    );
};

export default Footer;
