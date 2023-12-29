"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-faiz-200 relative overflow-hidden"
    >
      <div className="row relative">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div
                className={`"mx-auto max-w-2xl ${
                  inView && "animate-fade-right animate-duration-700"
                }`}
              >
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Projetos"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className={`text-faiz-100 sectionTitle ${inView && "animate-fade-down text-faiz-100"}`}>
                Projetos
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-faiz-100" : ""}>
                    Além de termos uma equipe pronta para realizar os nossos serviços, também podemos elaborar projetos para que sua própria equipe possa realizar de forma autônoma.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Fazemos assessoria para indicar quais as melhores soluções, equipamentos, lojas (com possibilidade de desconto em parceiros), além disso, fazemos toda a instalação desses equipamentos e o treinamento da equipe.
                </p>
              </div>
              <div className="flex place-content-left mt-3">
                <Link href="https://www.behance.net/faizproducoes" target="_blank">
                  <button className="font-bold rounded-full outline-none text-white bg-faiz-100 hover:bg-quadrado-100/80 px-5 py-2">
                    Conheça nosso Portfólio
                    <span className="inline-block -mb-1 ml-2 text-white">
                      < BsArrowRight/>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedAbout;
