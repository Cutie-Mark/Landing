import Image from "next/image";
import React from "react";

const Card = ({
    icon,
    text,
    className,
}: {
    icon?: string;
    text: string;
    className?: string;
}) => {
    return (
      <div
        className={` bg-gradient-to-b from-[#8C52FF] to-[#662ECC] rounded-xl sm:rounded-3xl p-3 sm:p-4 md:p-6  flex flex-col items-center w-full justify-center ${className} min-h-40`}
      >
        {icon && (
          <div className="md:p-2 ">
            <Image
              src={icon}
              className="object-fill w-11 sm:w-14"
              alt="icon"
              width={60}
              height={60}
            />
          </div>
        )}
        <div className="h-full flex items-center justify-center">
          <p className="text-white text-center mt-2 md:mt-5">{text}</p>
        </div>
      </div>
    );
};

export default Card;
