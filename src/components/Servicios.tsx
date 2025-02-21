import React from "react";
import Card from "./Card";

const Servicios = () => {
    return (
        <div
            id="servicios"
            className="flex flex-col items-center p-10 h-screen justify-around pt-24"
        >
            <h2 className="text-4xl text-darkViolet font-bold ">
                Nuestros servicios
            </h2>

            <div className="flex gap-5 py-10 w-full">
                <Card
                    icon="/cohete.png"
                    text="
                Creación de sitios web corporativos y páginas de aterrizaje (landing pages)."
                />
                <Card
                    icon="/planeta.png"
                    text="
Soporte y mantenimiento para páginas web."
                />
                <Card
                    icon="/lapiz.png"
                    text="

Servicio de Diseño UX/UI para mejorar la experiencia del usuario en plataformas digitales."
                />
                <Card
                    icon="/carrito.png"
                    text="

Desarrollo de tiendas en línea (e-commerce) con integración de pagos."
                />
            </div>
            <button className="bg-gradient-to-r  from-lightViolet to-darkViolet px-6 py-2 text-white rounded-md font-bold text-lg">
                Contáctanos
            </button>
        </div>
    );
};

export default Servicios;
