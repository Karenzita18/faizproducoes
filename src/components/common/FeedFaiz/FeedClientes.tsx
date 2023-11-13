"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const FeedClientes = () => {
	return (
		<section>
			<div className="row ">
				<div className="container">
					<h1 className="text-4xl font-bold text-center mb-3">
						Clientes
					</h1>
					<p className="text-center text-lg mb-6 text-faiz-100">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</p>
					<Swiper
						slidesPerView={1}
						loop={true}
						autoplay={true}
						pagination={{
							clickable: true,
						}}
						navigation={false}
						modules={[Navigation]}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 7,
							},
						}}
						className=""
					>
						<SwiperSlide className="relative m-auto">
							<div className="w-1/2 flex m-auto items-center justify-center h-full">
								<img 
									src="/img/clientes/WA-NOTICIAS.webp" 
									alt="WA-NOTICIAS" 
									title="WA-NOTICIAS" 
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/VILLE.webp"
									alt="VILLE"
									title="VILLE"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/UPTV.webp"
									alt="UPTV"
									title="UPTV"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="w-3/4 m-auto flex mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/TV-TODODIA.webp"
									alt="TV TODO DIA"
									title="TV TODO DIA"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/SBVC.webp"
									alt="SBVC "
									title="SBVC"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/RADIO-PARAISO.webp"
									alt="RÁDIO PARAISO"
									title="RÁDIO PARAISO"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/PUC-CAMPINAS.webp"
									alt="Puc Campinas"
									title="Puc Campinas"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="w-1/2 flex m-auto mx-5 items-center justify-center h-full">
								<img 
									src="/img/clientes/PREFEITURA_NOVA-ODESSA.webp" 
									alt="" 
									title="" 
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/LOGO_CAMARA.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/IGREJA-NAZARENO.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/IGREJA-CONVIVA.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/IGREJA_NOVA-ALIANCA.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/IGREJA_CELEBRANDO-AO-REI.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/EDSON-HUDSON.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/COPENO.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/CARREIRO-CAPATAZ.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/clientes/BLUE-TRADING.webp"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default FeedClientes;
