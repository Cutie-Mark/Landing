const Nosotros = () => {
    return (
        <>
            <div className="flex justify-center w-full bg-[url(/bg-image-1.png)] h-screen bg-cover">
                <div
                    id="nosotros"
                    className="snap-always flex justify-center items-center gap-10 w-4/5"
                >
                    <h2 className="text-white text-6xl font-bold w-full">
                        ¿Quienes Somos?
                    </h2>
                    <div className="bg-white rounded-3xl p-10 font-semibold w-full">
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
