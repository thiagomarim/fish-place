import React from "react";
import Seta from "../assets/seta.svg?react";

const Planos = () => {
  return (
    <div className="text-center mt-16 p-[40px] mb-56 bg-slate-100">
      <h1 className="font-alice text-6xl">Planos</h1>
      <div className="flex gap-16 justify-center mt-10">
        <div className="bg-white p-[40px] rounded-md shadow-lg">
          <h3 className="text-2xl font-bold text-slate-600 pb-[30px] border-b-2 border-zinc-300">
            INFANTIL
          </h3>
          <div className="mt-[30px] pb-[30px] border-b-2 border-zinc-300 flex flex-col gap-3">
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Crianças de 5 a 10 anos
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Todos equipamentos de mergulho
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              30 minutos de mergulho
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-[30px]">
            <span className="text-blue-600 text-lg mb-[20px]">
              R$ 49,00 / Aula
            </span>
            <a
              href=""
              className=" flex items-center justify-between flex-row gap-2 text-lg p-[10px] bg-slate-600 hover:bg-slate-500 text-white rounded-md"
            >
              ADQUIRIR
              <Seta />
            </a>
          </div>
        </div>
        <div className="bg-white p-[40px] rounded-md shadow-lg">
          <h3 className="text-2xl font-bold text-slate-600 pb-[30px] border-b-2 border-zinc-300">
            ADULTO
          </h3>
          <div className="mt-[30px] pb-[30px] border-b-2 border-zinc-300 flex flex-col gap-3">
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Público entre 16 a 80 anos
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              Todos equipamentos de mergulho
            </p>
            <p className=" flex items-center gap-2 text-slate-600 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block">
              1 hora de mergulho
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-[30px]">
            <span className="text-blue-600 text-lg mb-[20px]">
              R$ 69,00 / Aula
            </span>
            <a
              href=""
              className=" flex items-center justify-between flex-row gap-2 text-lg p-[10px] bg-slate-600 hover:bg-slate-500 text-white rounded-md"
            >
              ADQUIRIR
              <Seta />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
