"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const FeedPortifolio = () => {
	return (
		<div>
			<section className="pt-32 text-white relative bg-faiz-200">
				<div className="row z-10 relative">
					<div className="container grid md:grid-cols-2 gap-10 items-center">
            <div className="col-span-1">
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
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 1,
							},
							1024: {
								slidesPerView: 1,
							},
						}}
						className=""
					>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/quem-somos3.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/quem-somos3.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="w-3/4 m-auto flex mx-5 items-center justify-center h-full">
								<img
									src="/img/quem-somos3.png"
									alt="/"
									title="/"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative m-auto">
							<div className="flex my-auto mx-5 items-center justify-center h-full">
								<img
									src="/img/quem-somos3.png"
									alt=""
									title=""
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="animate-fadeInLeft animate-delay-200">
					<h1 className="text-2xl md:text-3xl mb-4 font-medium text-faiz-100">
						Conheça o nosso portifólio
					</h1>
					<p className="text-xl md:text-xl mb-4 font-medium text-faiz-100"> 
						Solucionamos problemas
					</p>
				</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FeedPortifolio;

