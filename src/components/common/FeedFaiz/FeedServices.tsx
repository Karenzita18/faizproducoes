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
			      Nossos Serviços
		      </h1>
          <div className="grid max-w-sm mx-auto sm:max-w-full sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5">
            {services.map((item) => (
              <div
                key={item.title}
                className={`bg-faiz-200/80 backdrop-blur-sm pt-5 sm:pt-8 px-5 sm:px-8 flex flex-col justify-between shadow-md group hover:scale-[101%] transition duration-300 hover:-translate-y-1 border-faiz-200 gap-y-3 hover:bg-faiz-100 hover:border-white rounded-t-lg rounded-b-lg ${
                  inView &&
                  "animate-fade animate-duration-500 animate-delay-100"
                }`}
              >
                <div>
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className="font-bold text-2xl text-center text-faiz-100 group-hover:text-white"
                  ></h2>
                  <p className="text-center mt-3 text-black group-hover:text-white">
                    {item.desc}
                  </p>
                  <div
                      className={`relative z-10 hover:-translate-y-2 transition duration-500 mt-5 mb-5 ${
                        inView &&
                        "animate-fade-up animate-delay-200 animate-duration-500 text-center"
                      }`}
                    >
                      <Link
                        href={`/servicos/${item.slug}`}
                        className="border border-faiz-100 text-faiz-100 px-5 py-2 font-semibold hover:bg-faiz-100 rounded-full hover:text-white transition duration-500 bg-white outline-none"
                      >
                        Saiba Mais
                      </Link>
                    </div>
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
    title: "Produção",
    slug: "producao",
    desc: "Serviços relacionados a vídeo, imagem, áudio, organização de eventos e mais.",
    size: "h-20 w-20",
  },
  {
    title: "Publicidade",
    slug: "publicidade",
    desc: "Trabalhamos com dados e temos uma equipe preparada para fazer pesquisas e planejar uma comunicação eficaz para o seu negócio. ",
    size: "h-20 w-20",
  },
  {
    title: "Projetos",
    slug: "projetos",
    desc: "Elaboramos projetos para que sua própria equipe possa realizar os serviços de forma autônoma. ",
    size: "h-20 w-20",
  },
  {
    title: "Assessoria",
    slug: "assessoria",
    desc: "Fornecemos apenas a opção de assessoria, com análises, dicas de melhoria e treinamentos para qualquer área da sua empresa.",
    size: "h-24 w-24",
  }
];
