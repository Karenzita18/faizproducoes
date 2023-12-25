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
            Serviços / Publicidade
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
                  <p className="text-center mt-3 font-bold text-2xl text-black group-hover:text-white">
                    {item.desc2}
                  </p>
                  <p className="text-center mt-3 font-bold text-2xl text-black group-hover:text-white">
                    {item.desc3}
                  </p>
                  <p className="text-center mt-3 font-bold text-2xl text-black group-hover:text-white">
                    {item.desc4}
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
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc11}
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
    desc1: "Publicidade",
    desc2: "Marketing",
    desc3: "Propaganda",
    desc4: "Comunicação",
    size: "h-20 w-20",
  },
  {
    desc5: "Assessoria",
    desc6: "Planejamento",
    desc7: "Criação",
    desc8: "Tráfego Pago",
    desc9: "Mídia Off",
    desc10: "Social Media",
    desc11: "Produção",
    size: "h-20 w-20",
  },
  {
    desc5: "Campanhas",
    desc6: "Redes Sociais",
    desc7: "Sites",
    desc8: "Outdoor",
    desc9: "Planfletos",
    size: "h-20 w-20",
  },
];
