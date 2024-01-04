import { useState } from "react";
import Logo from "../assets/logo.svg?react";
import Menu from "../assets/menu.svg?react";
import Close from "../assets/close.svg?react";


const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="lg:flex lg:gap-4 gap-0 lg:justify-between text-white bg-blue-header pt-5 pr-20 pb-5 pl-20">
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <a className="text-2xl font-bold" href="#">
          FishPlace
        </a>
      </div>
      <ul className={`flex absolute bg-blue-header pl-6 pr-6 pb-6 left-0 lg:z-auto lg:w-auto w-full lg:p-0 lg:static mt-[20px] lg:mt-[0px] flex-col lg:flex-row items-center gap-5 transition-all duration-500 ease-in ${menu ? 'top-10' : "top-[-490px]"}`}>
        <li>
          <a
            href="#sobre"
            className="flex items-center gap-2 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#planos"
            className="flex items-center gap-2 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Planos
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="flex items-center gap-2 text-lg before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Contato
          </a>
        </li>
      </ul>
      <div className="absolute right-8 top-6 cursor-pointer lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? <Close /> : <Menu />}
      </div>
    </nav>
  );
};

export default Header;
