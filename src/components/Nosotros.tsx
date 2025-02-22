const Nosotros = () => {
    return (
        <>
            <div id="nosotros" className="flex justify-center w-full bg-[url(/bg-image-1.png)] h-screen bg-cover">
                <div
                    className="snap-always flex-col md:flex-row flex justify-center items-center gap-20 sm:gap-10 w-4/5"
                >
                    <h2 className="text-white text-3xl sm:text-5xl font-bold w-full ">
                        ¿Quienes Somos?
                    </h2>
                    <div className="bg-white rounded-xl p-5 sm:p-10  w-full">
                        <p>
                            Somos una empresa apasionada por la innovación y la
                            tecnología, dedicada a transformar negocios a través
                            de soluciones digitales que impulsan su crecimiento.
                            Nos especializamos en desarrollar, comercializar e
                            implementar herramientas tecnológicas de vanguardia,
                            diseñadas para optimizar procesos, mejorar la
                            productividad y fortalecer la competitividad de las
                            empresas en un mundo cada vez más digital.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nosotros;
