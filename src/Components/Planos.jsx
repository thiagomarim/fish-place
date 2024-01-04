import React from "react";
import Seta from "../assets/seta.svg?react";
import Logo from "../assets/logo.svg?react";

const Planos = () => {
  return (
    <section className="text-center mt-16 p-[40px] mb-12 bg-bg-planos">
      <h3 className="font-alice text-4xl lg:text-5xl">Planos</h3>
      <div className="flex gap-2 lg:gap-16 justify-center mt-10 flex-wrap">
        <div className="bg-white p-[20px] lg:p-[40px] rounded-lg shadow-lg mb-12">
          <h3 className=" flex items-center gap-4 justify-center text-2xl lg:text-2xl font-bold text-slate-600 pb-[30px] border-b-2 border-zinc-300">
            INFANTIL
            <span className="bg-blue-white rounded-md">
              <Logo />
            </span>
          </h3>
          <div className="mt-[30px] pb-[30px] border-b-2 border-zinc-300 flex flex-col gap-3">
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-blue-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Crianças de 5 a 10 anos
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-blue-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Todos equipamentos de mergulho
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-blue-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              30 minutos de mergulho
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-[30px]">
            <span className="text-blue-white text-lg mb-[20px]">
              R$ 49,00 / Aula
            </span>
            <a
              href=""
              className=" flex items-center justify-between flex-row gap-2 text-lg pb-[10px] pt-[10px] pl-[20px] pr-[20px] bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              ADQUIRIR
              <Seta />
            </a>
          </div>
        </div>
        <div className="bg-white p-[20px] lg:p-[40px] rounded-lg shadow-lg mb-12">
          <h3 className=" flex items-center gap-4 justify-center text-2xl font-bold text-slate-600 pb-[30px] border-b-2 border-zinc-300">
            ADULTO
            <span className="bg-red-500 rounded-md">
              <Logo />
            </span>
          </h3>
          <div className="mt-[30px] pb-[30px] border-b-2 border-zinc-300 flex flex-col gap-3">
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Público entre 16 a 80 anos
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Todos equipamentos de mergulho
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-500 before:rounded-md before:w-2 before:h-2 before:inline-block">
              1 hora de mergulho
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-[30px]">
            <span className="text-red-500 text-lg mb-[20px]">
              R$ 69,00 / Aula
            </span>
            <a
              href=""
              className=" flex items-center justify-between flex-row gap-2 text-lg pb-[10px] pt-[10px] pl-[20px] pr-[20px] bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              ADQUIRIR
              <Seta />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;
