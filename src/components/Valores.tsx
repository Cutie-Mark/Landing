import Image from "next/image";
import React from "react";
import Card from "./Card";

const Valores = () => {
    return (
        <div
            id="valores"
            className=" flex flex-col items-center justify-center h-screen bg-[url(/bg-image-3.png)] object-cover gap-20"
        >
            <div className="flex items-center w-4/5 pt-14">
                <h2 className="text-2xl text-white">Valores</h2>
                <Image
                    src={"/mano.png"}
                    alt="icono mano"
                    width={50}
                    height={50}
                />
            </div>

            <div className=" w-4/5 items-center flex flex-col sm:flex-row gap-4 sm:gap-5  ">
                <Card
                    className={
                        "from-black to-black py-5 sm:py-10 text-xl sm:text-2xl font-normal h-full "
                    }
                    text="Fuerte compromiso con el cliente y en la personalización del trato y del servicio."
                />
                <Card
                    className={
                        "from-black to-black py-5 sm:py-10 text-xl sm:text-2xl font-normal h-full"
                    }
                    text="Respeto y tolerancia hacia la forma de ver las cosas de los demás."
                />
                <Card
                    className={
                        "from-black to-black py-5 sm:py-10 text-xl sm:text-2xl font-normal h-full"
                    }
                    text="Confianza, paciencia y constancia en todo cuanto hacemos."
                />
            </div>
        </div>
    );
};

export default Valores;
