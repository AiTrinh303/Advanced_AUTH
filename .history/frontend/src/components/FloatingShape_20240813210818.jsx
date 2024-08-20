import { motion } from "framer-motion";
import star1 from '../assets/star-1.svg'

const FloatingShape = ({ color, size, top, left, delay }) => {
	return (
		<motion.img
			src={star1}
			className={`absolute rounded-full ${color} ${size} opacity-50 blur-xl`}
			style={{ top, left }}
			animate={{
				y: ["0%", "100%", "0%"],
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 10,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
			alt="star 1"
		/>
	);
};
export default FloatingShape;

