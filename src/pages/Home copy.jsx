// import React from 'react';

import { Floral1 } from '../components';
import { images } from '../constants';

const Home = () => {
	return (
		<div className="h-screen w-full relative p-0 m-0">
			<div className="h-screen w-full absolute top-0 left-0">
				<img
					src={images.bg}
					alt="wedding"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="h-auto w-auto absolute top-0 left-0">
				<Floral1
					color="white"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-[23vw] object-contain "
				/>
			</div>
			<div className="h-auto w-auto absolute bottom-0 right-0">
				<Floral1
					color="white"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-[23vw] object-contain "
				/>
				{/* <Floral2 className="w-full h-full object-contain p-0" /> */}
			</div>
			<div className="h-auto w-auto absolute bottom-0 left-0">
				{/* <img
					src={images.f3}
					alt="wedding"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-auto object-cover "
				/> */}
				<Floral1
					color="white"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-[23vw] object-contain "
				/>
			</div>
			<div className="h-auto w-auto absolute top-0 right-0">
				{/* <img
					src={images.f4}
					alt="wedding"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-auto object-cover "
				/> */}
				<Floral1
					color="white"
					className="w-[40vw] lg:w-[23vw] h-[40vw] lg:h-[23vw] object-contain "
				/>
			</div>
		</div>
	);
};

export default Home;
