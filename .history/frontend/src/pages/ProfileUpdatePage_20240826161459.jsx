import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileUpdatePage = () => {
	const { user } = useAuthStore();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const { name, email} = Object.fromEntries(formData);
		try {
			const res = await axios.put(`http://localhost:5000/users/${user.id}`, {
			  name,
			  email,
			});
			navigate("/dashboard");
		  } catch (err) {
			console.log(err);
		  }
	};
	return (
		<form onSubmit={handleSubmit}>
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
				Update Profile
			</h2>

			<div className='space-y-6'>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<h3 className='text-xl font-semibold text-green-400 mb-3'>Profile Information</h3>
					<div className='text-gray-300'>
						<label htmlFor="Name">Name</label>
						<input
							name="name"
							type="text"
							defaultValue={user.name}
							/> 						
					</div>
					<div className='text-gray-300'>
					<label htmlFor="email">Email</label>
						<input					
							name="email"
							type="email"
							defaultValue={user.email}
						/>
					</div>
					<div className='text-gray-300'>
					<label htmlFor="email">password</label>
						<input					
							name="email"
							type="email"
							defaultValue={user.email}
						/>
					</div>
				</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				 font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Submit
				</motion.button>
			</motion.div>
			</div>

		</motion.div>
		</form>
	);
};
export default ProfileUpdatePage;
