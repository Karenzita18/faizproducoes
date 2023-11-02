"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      id="quem-somos"
      className="bg-brand-100/5 relative overflow-hidden"
    >
      <div className="row relative">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div
                className={`"mx-auto max-w-2xl ${
                  inView && "animate-fade-right animate-duration-700"
                }`}
              >
                <Image
                  src="/img/maximus-gestao.png"
                  width={500}
                  height={500}
                  alt="Sobre a Maximus"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p
                className={`sectionSubTitle ${
                  inView && "animate-fade-down animate-delay-300"
                }`}
              >
                Quem Somos
              </p>
              <h2 className={`sectionTitle ${inView && "animate-fade-down"}`}>
                Nossa História
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left" : ""}>
                 O Maximus Gestão de Acesso é uma solução aderente aos diferentes segmentos 
                 empresariais, nacionais e internacionais, de fácil implantação
                 e usabilidade que foi desenvolvido pelo Centro de Tecnologia
                 de Campinas - CTC.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100" : ""
                  }
                >
                  Utilizado para gestão de acesso e segurança, gerência
                  de dispositivos on-line, coleta de informações em tempo real,
                  navegação nos mais diferentes browsers e dispositivos móveis
                  como tablets e smartphones.
                </p>
                <div
                  className={`hover:-translate-y-2 transition duration-500 mt-5 ${
                    inView &&
                    "animate-fade-up animate-delay-200 animate-duration-500"
                  }`}
                >
                  <Link
                    href="/quem-somos"
                    className="border border-brand-100 text-brand-100 px-5 py-2 font-semibold hover:bg-brand-100 rounded-full hover:text-white transition duration-500"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedAbout;