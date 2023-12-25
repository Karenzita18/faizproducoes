"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";

const FeedServices = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden bg-faiz-300/30">
      <div className="row relative">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-3 text-faiz-100">
            Serviços / Projetos
          </h1>
          <div className="grid max-w-sm mx-auto sm:max-w-full sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
            {services.map((item) => (
              <div
                key={item.desc1}
                className={`bg-faiz-200/80 backdrop-blur-sm pt-5 sm:pt-4 px-5 sm:px-8 flex flex-col justify-between shadow-md group hover:scale-[101%] transition duration-300 hover:-translate-y-1 gap-y-3 hover:bg-faiz-100  rounded-t-lg rounded-b-lg       
                ${
                  inView &&
                  "animate-fade animate-duration-500 animate-delay-100"
                }`}
              >
                <div className="pb-5">
                  <p className="text-center mt-3 font-bold text-2xl text-black group-hover:text-white">
                    {item.desc1}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc5}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc6}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc7}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc8}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc9}
                  </p>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc10}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedServices;

const services = [
  {
    desc1: "Projetos",
    size: "h-20 w-20",
  },
  {
    desc5: "Assessoria",
    desc6: "Instalação",
    desc7: "Treinamento",
    size: "h-20 w-20",
  },
  {
    desc5: "Transmissão ao Vivo",
    desc6: "Sonorização",
    desc7: "Iluminação",
    desc8: "Projeção",
    desc9: "Fotografia",
    desc10: "Filmagem",
    size: "h-20 w-20",
  },
];
