import React from "react";

const Mision = () => {
    return (
        <div
            id="mision"
            className="flex justify-center bg-[url(/bg-image-2.png)] bg-cover"
        >
            <div className=" h-screen w-4/5 pt-24">
                <h2 className="font-bold text-5xl text-white pt-24 ">Misión</h2>
                <div className="h-full flex justify-center items-center p-24">
                    <p className="text-white font-semibold text-2xl text-center">
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
