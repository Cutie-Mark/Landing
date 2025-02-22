import Image from "next/image";
import React from "react";

const Mision = () => {
    return (
        <div
            id="mision"
            className="flex justify-center -z-10 relative h-screen overflow-hidden"
        >
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/Space.mp4" type="video/mp4" />
            </video>
            <div className="absolute h-screen w-4/5 pt-40">
                <div className="flex justify-end  items-center  ">
                    <div className="  flex justify-end items-center gap-2">
                        <Image
                            src={"/cohete.png"}
                            alt="icono ojo"
                            width={50}
                            height={50}
                        />
                        <h2 className="text-4xl text-white">Mision</h2>
                    </div>
                </div>
                <div className="h-full  items-center py-24 pl-24">
                    <p className="text-white font-semibold text-xl text-end">
                        Nuestra misión como empresa es la de proveer soluciones
                        a empresas mediante el uso de la tecnología,
                        centrándonos en desarrollar soluciones innovadoras
                        enfocadas y de calidad para la optimización y
                        simplificación de procesos empresariales, brindando
                        precisión y confianza.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mision;
