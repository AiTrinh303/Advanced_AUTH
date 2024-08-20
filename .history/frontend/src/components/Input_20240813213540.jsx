// const Input = ({ icon: Icon, ...props }) => {
// 	return (
// 		<div className='relative mb-6'>
// 			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
// 				<Icon className='size-5 text-green-500' />
// 			</div>
// 			<input
// 				{...props}
// 				className='w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
// 			/>
// 		</div>
// 	);
// };
// export default Input;

import { useState } from 'react';

const Input = ({ icon: Icon, rightIcon: RightIcon, type = 'text', ...props }) => {
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	// Determine the input type based on the password visibility toggle
	const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-green-500' />
			</div>
			<input
				{...props}
				type={inputType}
				className='w-full pl-10 pr-10 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
			/>
			{type === 'password' && (
				<div
					className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
					onClick={() => setPasswordVisible(!isPasswordVisible)}
				>
					<RightIcon
						className={`size-5 ${isPasswordVisible ? 'text-green-500' : 'text-gray-500'}`}
					/>
				</div>
			)}
		</div>
	);
};

export default Input;
