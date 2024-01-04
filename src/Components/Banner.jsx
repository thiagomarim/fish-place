import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('./assets/banner.png')] h-[500px] bg-cover">
      <div className="flex items-left flex-col gap-[40px] ml-56">
        <h3 className="flex items-center text-white pt-[150px] font-alice text-5xl max-w-[600px] ml-[80px]">
          O melhor lugar para ver a beleza da natureza.
        </h3>
        <div>
          <a href="#" className="ml-[80px] p-[10px] bg-red-600 hover:bg-red-900 text-white rounded-md">
            Assine o nosso pacote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
