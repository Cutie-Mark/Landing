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


export default function Home() {
    
    return (
        <div className=" snap-y snap-mandatory font-semibold flex flex-col items-center font-montserrat">
            <div>
                <div className="snap-start w-full h-screen flex flex-col justify-between items-center">
                    <div></div>
                    <Logo />

                    <Image
                        src={"/arrow-down.svg"}
                        alt="arrow-down"
                        className="hover:cursor-pointer"
                        height={50}
                        width={50}
                    />
                </div>
                
                <Header />
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
