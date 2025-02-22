import Image from "next/image";
import CardPhoto from "./CardPhoto";

const Vision = () => {
    return (
        <div id="vision" className="flex flex-col justify-center items-center h-screen gap-5 ">
            <div className="flex justify-end  items-center w-4/5 ">
                <div className="flex items-center gap-2">
                    <Image
                        src={"/ojo.png"}
                        alt="icono ojo"
                        width={50}
                        height={50}
                    />
                    <h2 className="text-2xl">Vision</h2>
                </div>
            </div>

            <div className="w-4/5 flex flex-col sm:flex-row gap-5  sm:pt-20">
                <CardPhoto
                    image={"/vision-1.png"}
                    text={
                        "Lograr ser un referente nacional como empresa de provisión de soluciones innovadoras de software. "
                    }
                />
                <CardPhoto
                    image={"/vision-2.png"}
                    text={
                        "Diseñar y desarrollar servicios y soluciones de software de alta calidad."
                    }
                />
                <CardPhoto
                    image={"/vision-3.png"}
                    text={
                        "Ser una empresa atractiva tanto como entorno tecnológico como lugar de trabajo."
                    }
                />
            </div>
        </div>
    );
};

export default Vision;
