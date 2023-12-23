"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BsSend,BsArrowRightShort,  BsArrowRight } from "react-icons/bs";
const FeedPortifolio= () => {
  const { ref, inView, entry } = useInView();

  return (
    <section className="pt-14 text-white relative bg-white">
		<div className="row z-10 relative">
			<div className="container md:grid md:grid-cols-4 gap-2 md:gap-2 items-center">
                <div className="col-span-2">
					<img src="https://via.placeholder.com/700x300" alt="" />
				</div>
				<div className="animate-fadeInLeft animate-delay-200 col-span-2">
				    <h1 className="text-2xl md:text-3xl mb-4 font-bold justify-center text-center text-black">
                        Portfólio
					</h1>
					<p className="text-lg md:text-md mb-4  text-center text-black"> 
                        Bem-vindo à Faiz Produções, onde transformamos ideias em experiências visuais memoráveis. Explore nosso portfólio e descubra o poder da narrativa audiovisual.
					</p>
                    <div className="flex place-content-center">
                        <Link href="https://www.behance.net/faizproducoes" target="_blank">
                            <button className="font-bold rounded-full outline-none text-white bg-faiz-100 hover:bg-quadrado-100/80 px-5 py-2">
                                Acesse o portfólio
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
