"use client";

import React from 'react';
import ReactPlayer from 'react-player';

const FeedAbout = () => {
	return (
		<div>
			<section className="pt-32 text-white relative bg-faiz-100">
				<div className="row z-10 relative">
					<div className="container grid md:grid-cols-3 gap-10 items-center">
                        <div className="col-span-2">
							<div className="aspect-video animate-slideInRight z-10 relative ">
								<ReactPlayer
									width="100%"
									height="100%"
									url="https://www.youtube.com/watch?v=Q92deJWDKXw"
								/>
							</div>
						</div>
						<div className="animate-fadeInLeft animate-delay-200">
							<h1 className="text-1xl md:text-3xl mb-4 font-bold justify-center">
								Comunicamos pessoas, negócios e propósitos.
							</h1>
							<h1 className="text-1xl md:text-3xl mb-4 font-bold"> 
								Solucionamos problemas
							</h1>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FeedAbout;
