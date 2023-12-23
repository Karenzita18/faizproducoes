"use client";
import Link from "next/link";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const FeedClienteTeste = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute z-0 w-full h-3/5 bg-brand-150 -top-14"></div>
      <section className="relative py-10">
        <div className="row">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-3">
				Clientes
			</h1>
			<p className="text-center text-lg mb-6 text-faiz-100">
				Desbrave o mundo de oportunidades junto com nossos clientes satisfeitos. 
			</p>
            <div className="relative">
              <Swiper
                navigation={{
                  nextEl: ".next_produtos",
                  prevEl: ".prev_produtos",
                }}
                autoplay
                loop
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                className="mySwiper relative"
                breakpoints={{
                    // When window width is >= 640px (sm)
                    640: {
                      slidesPerView: 1,
                    },
                    // When window width is >= 768px (md)
                    768: {
                        slidesPerView: 2,
                      },
                    // When window width is >= 1024px (lg)
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
              >
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/prefeitura-nova-odessa.webp" alt="Prefeitura Nova Odessa" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/camara-municipal.webp" alt="Câmara Municipal" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="https://via.placeholder.com/500x344" alt="Copeno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/carreiro-capataz.webp" alt="Carreiro Capataz" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="https://via.placeholder.com/500x344" alt="Copeno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/hagens.webp" alt="Hagens" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/twotigers.webp" alt="Twotigers" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/ville-ambientes.webp" alt="Ville Ambientes" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/puc-campinas.webp" alt="Puc Campinas" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/blue-trading.webp" alt="Blue trading" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/wa-noticias.webp" alt="WA Notícias" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/tv-tododia.webp" alt="TV Todo Dia" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/uptv.webp" alt="UP TV" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/radio-paraiso.webp" alt="Rádio Paraíso" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/nova-alianca.webp" alt="Nova Aliança" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/copeno.webp" alt="Copeno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="https://via.placeholder.com/500x344" alt="Copeno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/igreja-conviva.webp" alt="Conviva" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="/img/Clientes-novos/igreja-nazareno.webp" alt="Igreja Nazareno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="https://via.placeholder.com/500x344" alt="Copeno" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                    <div className="max-w-xs mx-auto shadow-md rounded-tr-3xl rounded-bl-3xl rounded overflow-hidden hover:-translate-y-2 transition duration-500 group">
                      <img src="https://via.placeholder.com/500x344" alt="Copeno" />
                    </div>
                </SwiperSlide>
              </Swiper>

                <div className="absolute h-full w-full flex items-center place-content-between inset-0">
                    <div className="prev_produtos text-5xl text-brand-100 cursor-pointer relative z-10 md:-ml-8 -ml-5">
                        <RxCaretLeft />
                    </div>
                    <div className="next_produtos text-5xl text-brand-100 cursor-pointer relative z-10 md:-mr-8 -mr-5">
                        <RxCaretRight />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedClienteTeste;
