"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Mision from "@/components/Mision";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Valores from "@/components/Valores";
import Vision from "@/components/Vision";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.screen.height - 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };
    return (
        <div className=" snap-y snap-mandatory font-semibold flex flex-col items-center font-montserrat">
            <div>
                <div className="snap-always w-full h-screen flex flex-col justify-between items-center">
                    <div></div>
                    <Logo />

                    <Image
                        onClick={scrollDown}
                        src={"/arrow-down.svg"}
                        alt="arrow-down"
                        className="hover:cursor-pointer"
                        height={50}
                        width={50}
                    />
                </div>

                {isVisible && <Header />}
                <Nosotros />
                <Servicios />
                <Mision />
                <Vision />
                <Valores />
                <Footer />
            </div>
        </div>
    );
}
