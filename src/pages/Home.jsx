/* eslint-disable react/no-unknown-property */
// import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Floral } from '../components';

const Home = () => {
	const animation1 = {
		animate: (height) => ({
			clipPath: `circle(${height * 2 + 350}px at top left)`,
			transition: {
				type: 'spring',
				stiffness: 10,
				restDelta: 5,
				delay: 0.5,
			},
		}),
	};
	const animation2 = {
		animate: (height) => ({
			clipPath: `circle(${height * 2 + 300}px at bottom left)`,
			transition: {
				type: 'spring',
				stiffness: 15,
				restDelta: 5,
				delay: 1,
			},
		}),
	};

	const animation3 = {
		animate: (height) => ({
			clipPath: `circle(${height * 2 + 350}px at bottom center)`,
			transition: {
				type: 'spring',
				stiffness: 15,
				restDelta: 5,
				delay: 1,
			},
		}),
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			className="h-screen w-full relative p-0 m-0"
		>
			<div className="h-screen w-full absolute top-0 left-0 overflow-hidden">
				<motion.img
					// initial={{ scale: 0.8 }}
					animate={{ scale: [1.2, 1] }}
					transition={{
						type: 'ease',
						duration: 1,
					}}
					src={images.bg}
					alt="wedding"
					className="w-full h-full object-cover"
				/>
			</div>
			<motion.div className="h-auto w-[60vw] md:w-[40vw] lg:w-[20vw] absolute top-0 left-0">
				{/* <img
					src={images.f1}
					alt="wedding"
					className="w-full h-full object-cover"
				/> */}
				<Floral img={images.f1} animation={animation1} />
			</motion.div>
			<motion.div className="h-auto  w-[30vw] md:w-[20vw] lg:w-[10vw] absolute bottom-[20vh] lg:bottom-[10vw] left-0">
				<Floral img={images.f2} animation={animation2} />
			</motion.div>
			<motion.div className="h-auto w-[50vw] md:w-[40vw] lg:w-[20vw] absolute bottom-0 right-0">
				<Floral img={images.f3} animation={animation3} />
			</motion.div>
		</motion.div>
	);
};

export default Home;
