import React from 'react';
import ReactPlayer from 'react-player';

const FeedAbout = () => {
	return (
		<div id="quemsomos">
			<section className="pt-32 text-white relative bg-black">
				<div className="row z-10 relative">
					<div className="container grid md:grid-cols-3 gap-10 items-center">
                        <div className="col-span-2">
							<div className="aspect-video animate-slideInRight z-10 relative ">
								<ReactPlayer
									width="100%"
									height="100%"
									url="https://www.youtube.com/watch?v=D2Y54Q5DGi4"
								/>
							</div>
						</div>
						<div className=" animate-fadeInLeft animate-delay-200">
							<h1 className="text-3xl md:text-5xl mb-4 font-medium">
								Olá! Estou feliz em recebê-lo{' '}
							</h1>
							<p className="text-xl leading-relaxed">
								Obrigado por estar aqui, espero que possamos conversar e juntos
								formarmos uma grande parceria.
							</p>
							<a
								href="https://wa.me/5519998410419"
								className="text-white border border-white rounded block w-fit px-6 py-3 mt-5"
								target="_blank"
								rel="noopener noreferrer"
							>
								Me chame aqui
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FeedAbout;
