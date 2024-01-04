import React from "react";
import Logo from "../assets/logo.svg?react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between text-white bg-blue-header pt-5 pr-20 pb-5 pl-20">
      <div className="flex items-center gap-4">
        <Logo />{" "}
        <a className="text-2xl font-bold" href="#">
          FishPlace
        </a>
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <a
            href="#"
            className="flex items-center gap-1 text-base before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 text-base before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Planos
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 text-base before:content-[''] before:border-2 before:border-red-800 before:rounded-md before:w-2 before:h-2 before:inline-block hover:text-zinc-300"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
