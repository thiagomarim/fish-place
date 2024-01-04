import Scuba from '../assets/scuba.svg?react'
import Boia from '../assets/boia.svg?react'
import Sol from '../assets/sol.svg?react'


export const About = () => {
  return (
    <div id='sobre' className="flex flex-wrap justify-center gap-[120px] mr-4 ml-4 lg:mr-12 lg:ml-12 mt-28 mb-28">
      <div className="flex flex-col gap-[5px] sm:gap-[10px] items-center lg:items-start xl:justify-center-center">
        <h1 className="text-4xl sm:text-5xl font-alice text-center lg:text-start max-w-[600px] mb-[10px] lg:mb-[10px] ">
          Conheça o que há nas profundeza dos mares.
        </h1>
        <p className="text-slate-700 text-lg max-w-[380px]  sm:max-w-[480px] mt-[20px] sm:mt-[20px]">
          Venha participar dessa grande aventura, com a nossa equipe, aqui você
          irá descobrir tudo sobre o mar, se aventurando e entrando no mesmo.
        </p>
        <p className="text-slate-700 text-lg max-w-[380px] sm:max-w-[480px] mt-[40px]">
          Temos total controle e acompanhamento sobre o passeio de scuba, temos
          regras de segurança estabelecidas com total consciência.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] ml-4 lg:ml-0 mr-4 lg:mr-0">
        <h1 className="text-4xl sm:text-5xl font-alice text-center lg:text-start max-w-[600px] mb-[20px] lg:mb-[40px]">
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
