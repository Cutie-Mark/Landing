import Image from "next/image";

const CardPhoto = ({ image, text }: { image?: string; text: string }) => {
    return (
        <div className="relative w-full rounded-lg h-44 sm:h-72 group overflow-hidden">
            <div
                className="absolute inset-0 -z-10 bg-black text-white group-hover:opacity-0 flex items-end justify-end p-3"
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <Image src="/abrir.png" alt="abrir" width={30} height={30} />
            </div>

            <div
                className="absolute p-5 inset-0 -z-10 hidden group-hover:flex flex-col justify-center items-center text-white bg-gradient-to-b from-[#BA97FF] to-[#681FF9] "
            >
                <p className="text-lg font-bold">{text}</p>
                
            </div>
        </div>
    );
};

export default CardPhoto;
