import React from "react";
import Map from "../assets/map.png";

const Contato = () => {
  return (
    <section className="text-center mb-12">
      <h3 className="font-alice text-4xl  lg:text-5xl mb-[40px]">Contato</h3>
      <div className="flex flex-wrap md:flex-nowrap  justify-center items-center gap-[60px] lg:gap-[120px]">
        <img src={Map} alt="" className="ml-6 lg:ml-0 mr-6 lg:mr-0"/>
        <div className="flex flex-col gap-6 text-start ">
          <div className="border-b-2 border-b-border-color">
            <h3 className="text-xl font-bold text-blue-text">Endereço</h3>
            <p className="text-blue-text">Praia - Punta Cana</p>
            <p className="mb-[10px] text-blue-text">Caribe</p>
          </div>
          <div className="border-b-2 border-b-border-color">
            <h3 className="text-xl font-bold text-blue-text">
              Email & Telefone
            </h3>
            <p className="text-blue-text">contato@fishplace.com</p>
            <p className="mb-[10px] text-blue-text">+1 99999-9999</p>
          </div>
          <div>
            <h3 className=" flex items-center gap-2 text-xl font-bold text-blue-text before:content-[''] before:border-2 before:border-zinc-900 before:bg-red-500 before:rounded-full before:w-2 before:h-2 before:inline-block">
              Horário
            </h3>
            <p className="text-blue-text">De sexta à Sábado</p>
            <p className="text-blue-text">Das 12:00 às 16:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
