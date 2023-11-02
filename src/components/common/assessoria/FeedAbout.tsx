"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-faiz-200 relative overflow-hidden"
    >
      <div className="row relative">
        <div className="container">
            <div className="flex flex-col justify-center">
              <h2 className={`text-faiz-100 sectionTitle ${inView && "animate-fade-down text-faiz-100"}`}>
                Assessoria
              </h2>
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-faiz-100" : ""}>
                    Além de todos os serviços prestados, também fornecemos apenas a opção de assessoria, com análises, dicas e treinamentos para qualquer área necessária para melhorar sua empresa. 
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100 text-faiz-100" : ""
                  }
                >
                    Exemplo: Assessoria de Negócios, Vendas, Comunicação, Marketing, Publicidade, Produção…
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FeedAbout;
