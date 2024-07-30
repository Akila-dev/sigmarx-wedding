/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from '../constants';

const Floral = ({ img, animation }) => {
	const ref = useRef(null);
	const { height } = useDimensions(ref);
	// const { width } = useDimensions(ref);

	return (
		// <div className="w-full h-full object-cover overflow-hidden">
		<motion.img
			src={img}
			custom={height}
			ref={ref}
			variants={animation}
			alt="wedding"
			className="w-full h-full object-cover overflow-hidden"
		/>
		// </div>
	);
};

export default Floral;
