"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
const FeedPortifolio= () => {
  const { ref, inView, entry } = useInView();

  return (
    <section id="portfolio" className="pt-14 text-white relative bg-white">
		  <div className="row z-10 relative">
			  <div className="container md:grid md:grid-cols-4 gap-2 md:gap-10 items-center">
          <div className="col-span-2">
					  <img src="https://via.placeholder.com/700x300" alt="" />
				  </div>
				  <div className="animate-fadeInLeft animate-delay-200 col-span-2">
				    <h1 className="mt-2 md:mt-0 text-2xl md:text-3xl mb-4 font-bold justify-center text-center text-black">
              Portfólio
					  </h1>
					  <p className="text-lg md:text-md mb-4  text-justify text-black"> 
              <b>
                 O nosso negócio é conectar. 
              </b> {' '}
               Construir um elo entre o que precisa ser visto e quem precisa ver. Uma imagem em alta definição, com som de ótima qualidade e ofertada através do canal ideal vale mais que mil palavras. A razão de nossa existência é justamente essa:
              <b> {' '}
                criar soluções que facilitem interações.
              </b>
           
					  </p>
            <div className="flex place-content-center">
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
	  </section>
  );
};

export default FeedPortifolio;
