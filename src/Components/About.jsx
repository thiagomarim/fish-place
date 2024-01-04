import Scuba from '../assets/scuba.svg?react'
import Boia from '../assets/boia.svg?react'
import Sol from '../assets/sol.svg?react'


export const About = () => {
  return (
    <div className="flex justify-center gap-[120px] mt-28 mb-28">
      <div className="flex flex-col gap-[30px] ">
        <h1 className="text-5xl font-alice max-w-[600px]">
          Conheça o que há nas profundeza dos mares.
        </h1>
        <p className="text-slate-700 text-lg max-w-[480px] mt-[40px]">
          Venha participar dessa grande aventura, com a nossa equipe, aqui você
          irá descobrir tudo sobre o mar, se aventurando e entrando no mesmo.
        </p>
        <p className="text-slate-700 text-lg max-w-[480px]">
          Temos total controle e acompanhamento sobre o passeio de scuba, temos
          regras de segurança estabelecidas com total consciência.
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-5xl font-alice max-w-[400px] mb-[30px]">
          Segurança e Equipamentos
        </h1>
        <div className="border-t-2 border-y-zinc-200 border-b-2"  >
          <div className="pt-[30px] pb-[30px] flex gap-5 items-center">
            <Scuba />
            <p className="text-slate-700 text-lg">Equipamentos de mergulho completo</p>
          </div>
        </div>
        <div className=""  >
          <div className="pt-[20px] pb-[20px] flex gap-5 items-center">
            <Boia />
            <p className="text-slate-700 text-lg">Salva-vidas a bordo</p>
          </div>
        </div>
        <div className="border-t-2 border-y-zinc-200 border-b-2"  >
          <div className="pt-[30px] pb-[30px] flex gap-5 items-center">
            <Sol />
            <p className="text-slate-700 text-lg">Equipe de acompanhamento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
