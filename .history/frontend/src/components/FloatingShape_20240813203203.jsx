// import { motion } from "framer-motion";

// const FloatingShape = ({ color, size, top, left, delay }) => {
// 	return (
// 		<motion.div
// 			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
// 			style={{ top, left }}
// 			animate={{
// 				y: ["0%", "100%", "0%"],
// 				x: ["0%", "100%", "0%"],
// 				rotate: [0, 360],
// 			}}
// 			transition={{
// 				duration: 20,
// 				ease: "linear",
// 				repeat: Infinity,
// 				delay,
// 			}}
// 			aria-hidden='true'
// 		/>
// 	);
// };
// export default FloatingShape;

import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
	return (
		<motion.div
			className={`absolute ${color} ${size} opacity-20`}
			style={{ 
				top, 
				left,
				width: 0,
				height: 0,
				borderLeft: `${size / 2}px solid transparent`,
				borderRight: `${size / 2}px solid transparent`,
				borderBottom: `${size}px solid ${color}`,
				transform: 'rotate(35deg)',
				clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
				filter: 'blur(10px)',
			}}
			animate={{
				y: ["0%", "100%", "0%"],
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
		/>
	);
};

export default FloatingShape;
