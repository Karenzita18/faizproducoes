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
                  alt="Publicidade"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className={`text-faiz-100 sectionTitle ${inView && "animate-fade-down text-faiz-100"}`}>
                Publicidade
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-faiz-100" : ""}>
                    Fazemos qualquer tipo de serviço relacionado à comunicação do seu negócio.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Trabalhamos com dados e por isso temos uma equipe para fazer pesquisas e planejar as melhores soluções para comunicar de forma eficaz.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Nosso maior diferencial é que já possuímos uma produtora internamente, o que trará mais facilidade, agilidade e economia na hora de produzir qualquer material que seja necessário.
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
