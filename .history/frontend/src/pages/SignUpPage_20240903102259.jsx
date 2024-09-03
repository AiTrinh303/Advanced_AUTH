import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader, LockKeyhole , Mail, User} from "lucide-react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import Google from "../img/google.png";
import GitHub from "../img/github.png";
import Facebook from "../img/facebook.png";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const { signup, error, isLoading, google, github, facebook  } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} 
		catch (error) {
			console.log(error);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
		>
			<div className='p-9'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Create Account
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						icon={LockKeyhole}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
					</motion.button>
				</form>	

				<div className='my-6 flex items-center bg-opacity-60'>
					<hr className='w-full border-gray-600' />
					<span className='px-4 text-gray-400'>OR</span>
					<hr className='w-full border-gray-600' />
				</div>

				<div className='grid grid-cols-3 gap-4'>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-2 px-4 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 flex items-center justify-center'
						onClick={google}
					>
						<img src={Google} alt="google" className='w-5 h-5 mr-2' />						
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-2 px-4 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 flex items-center justify-center'
						onClick={github}
					>
						<img src={GitHub} alt="github" className='w-5 h-5 mr-2' />						
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 flex items-center justify-center'
						onClick={facebook}
					>
						<img src={Facebook} alt="facebook" className='w-5 h-5 mr-2' />						
					</motion.button>			
				</div>	
			</div>
			<div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Already have an account?{" "}
					<Link to='/login' className='text-green-400 hover:underline'>
						Login
					</Link>
				</p>
			</div>
		</motion.div>
	);
};
export default SignUpPage;
