import Image from "next/image";
import React from "react";

const Card = ({ icon, text }: { icon: string; text: string }) => {
    return (
        <div className="bg-gradient-to-b from-[rgb(28,16,51)] to-[#543199] rounded-3xl p-8  flex flex-col items-center w-full justify-center ">
            <div className="p-2">
                <Image src={icon} className="object-fill" alt="icon" width={60} height={60} />
            </div>
            <div className="h-full">
                <p className="text-white mt-5">{text}</p>
            </div>
        </div>
    );
};

export default Card;
