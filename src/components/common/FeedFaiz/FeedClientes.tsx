"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const FeedClientes = () => {
	return (
		<section>
			<div className="row">
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
									src="/img/empresas.png" 
									alt="" 
									title="" 
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="w-3/4 m-auto flex mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt="/"
									title="/"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="w-1/2 flex m-auto mx-5 items-center justify-center h-full">
								<img 
									src="/img/empresas.png" 
									alt="" 
									title="" 
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/empresas.png"
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
