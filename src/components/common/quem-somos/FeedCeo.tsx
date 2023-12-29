"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  FaInstagram,
  FaRegEnvelope,
  FaUser,
  FaRegUser
} from "react-icons/fa";
import {  BsArrowRight } from "react-icons/bs";

const FeedCeo = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-faiz-200/50 relative overflow-hidden"
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
                  src="/img/quem-somos2.png"
                  alt="Foto PP"
                  className="rounded-md shadow-lg"
                  width={600}
                  height={600}
                />
              </div>
              <div className="text-black mt-3">
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500 font-semibold">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaRegUser/>
                      </span>
                      | Eduardo Faiz – CEO e Fundador
                  </li>
                  <li className="hover:text-brand-50 transition duration-500 font-semibold">
                    <a
                      href="https://www.instagram.com/dufaiz_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaInstagram/>
                      </span>
                      | @dufaiz_
                    </a>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className={`text-faiz-100 sectionTitle ${inView && "animate-fade-down text-faiz-100"}`}>
                Palavra do CEO
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-faiz-100" : ""}>
                    Desde que me entendo por gente, me interesso por tecnologia. Não apenas entender como ela acontece, mas interagir com equipamentos e recursos, saber como são feitos os processos e o que fazer para que todos tenham acesso a isso. Foi isso que sempre busquei no que tange a esse tema.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Em uma transmissão ao vivo, é necessário conectar muitos itens para atingir uma comunicação a contento. Computadores, cabos, conexões, internet, som, filmadoras e, para além disso, o conhecimento técnico para extrair o melhor de cada item conectado a todo esse sistema.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Tecnologia de forma geral é apaixonante. Quando falamos de áudio e vídeo, existe algo mágico e misterioso que torna esse universo ainda mais interessante.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    O emprego de tudo isso em nosso dia a dia é fantástico, eclético e constante. Para cada pessoa, o contato e a interação são diferentes. Não tem certo nem errado, é um aprendizado infinito.
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Além de aprender, poder também ensinar sobre essas questões é um privilégio que nos motiva a continuar transformando o planeta através da tecnologia.
                </p>
              </div>
              <div className="flex place-content-left mt-2">
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

export default FeedCeo;
