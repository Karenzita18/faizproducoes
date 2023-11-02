"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeedCeo = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-faiz-200 relative overflow-hidden"
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
                <img
                  src="https://via.placeholder.com/700x700"
                  alt="Foto PP"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className={`text-faiz-100 sectionTitle ${inView && "animate-fade-down text-faiz-100"}`}>
                Palavra do CEO
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-faiz-100" : ""}>
                    "Desde que me entendo por gente, me interesso por tecnologia. Não apenas entender como ela acontece, mas interagir com equipamentos e recursos, saber como são feitos os processos e o que fazer para que todos tenham acesso a isso. Foi isso que sempre busquei no que tange a esse tema.
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
                    Além de aprender, poder também ensinar sobre essas questões é um privilégio que nos motiva a continuar transformando o planeta através da tecnologia".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedCeo;
