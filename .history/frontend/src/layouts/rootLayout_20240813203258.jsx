// import FloatingShape from '../components/FloatingShape'
// import { Outlet } from "react-router-dom"

// const rootLayout = () => {
//   return (
//     <div
// 			className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
// 		>
// 			<FloatingShape color='bg-green-500' size='w-48 h-48' top='-5%' left='10%' delay={0} />
// 			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
// 			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
//       <FloatingShape color='bg-yellow-500' size='w-16 h-16' top='90%' left='50%' delay={4} />
//       <FloatingShape color='bg-red-500' size='w-24 h-24' top='20%' left='90 %' delay={3} />
//       <FloatingShape color='bg-pink-500' size='w-32 h-32' top='10%' left='20%' delay={1} />
//       <FloatingShape color='bg-purple-500' size='w-48 h-48' top='50%' left='50%' delay={0} />
//       <FloatingShape color='bg-indigo-500' size='w-64 h-64' top='80%' left='30%' delay={2} />
//       <FloatingShape color='bg-blue-500' size='w-16 h-16' top='30%' left='70%' delay={4} />
//       <FloatingShape color='bg-cyan-500' size='w-24 h-24' top='60%' left='0%' delay={3} />
//       <FloatingShape color='bg-teal-500' size='w-32 h-32' top='0%' left='40%' delay={1} />
//       <FloatingShape color='bg-gray-500' size='w-48 h-48' top='100%' left='80%' delay={5} />
//       <FloatingShape color='bg-black' size='w-64 h-64' top='90%' left='20%' delay={0} />
//       <FloatingShape color='bg-white' size='w-16 h-16' top='50%' left='90%' delay={4} />
//       <FloatingShape color='bg-gray-500' size='w-24 h-24' top='20%' left='0%' delay={3} />
//       <FloatingShape color='bg-teal-500' size='w-32 h-32' top='70%' left='40%' delay={1} />
//       <FloatingShape color='bg-cyan-500' size='w-48 h-48' top='40%' left='80%' delay={5} />
//       <FloatingShape color='bg-blue-500' size='w-24 h-24' top='10%' left='30%' delay={2} />
//       <FloatingShape color='bg-indigo-500' size='w-16 h-16' top='80%' left='70%' delay={4} />
//       <FloatingShape color='bg-purple-500' size='w-32 h-32' top='30%' left='0%' delay={3} />
//       <FloatingShape color='bg-pink-500' size='w-48 h-48' top='60%' left='50%' delay={1} />
//       <FloatingShape color='bg-red-500' size='w-64 h-64' top='0%' left='90%' delay={0} />
//       <FloatingShape color='bg-yellow-500' size='w-16 h-16' top='100%' left='20%' delay={4} />
//       <FloatingShape color='bg-lime-500' size='w-24 h-24' top='50%' left='40%' delay={3} />
//       <FloatingShape color='bg-emerald-500' size='w-32 h-32' top='90%' left='70%' delay={1} />
//       <FloatingShape color='bg-green-500' size='w-48 h-48' top='20%' left='0%' delay={5} />
//       <FloatingShape color='bg-blue-500' size='w-16 h-16' top='80%' left='50%' delay={4} />


//       <main>
//         <Outlet />
//       </main>

//     </div>
//   )
// }

// export default rootLayout

import FloatingShape from '../components/FloatingShape';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
			<FloatingShape color='green' size='192px' top='-5%' left='10%' delay={0} />
			<FloatingShape color='emerald' size='192px' top='70%' left='80%' delay={5} />
			<FloatingShape color='lime' size='128px' top='40%' left='-10%' delay={2} />
			<FloatingShape color='yellow' size='64px' top='90%' left='50%' delay={4} />
			<FloatingShape color='red' size='96px' top='20%' left='90%' delay={3} />
			<FloatingShape color='pink' size='128px' top='10%' left='20%' delay={1} />
			<FloatingShape color='purple' size='192px' top='50%' left='50%' delay={0} />
			<FloatingShape color='indigo' size='256px' top='80%' left='30%' delay={2} />
			<FloatingShape color='blue' size='64px' top='30%' left='70%' delay={4} />
			<FloatingShape color='cyan' size='96px' top='60%' left='0%' delay={3} />
			<FloatingShape color='teal' size='128px' top='0%' left='40%' delay={1} />
			<FloatingShape color='gray' size='192px' top='100%' left='80%' delay={5} />
			<FloatingShape color='black' size='256px' top='90%' left='20%' delay={0} />
			<FloatingShape color='white' size='64px' top='50%' left='90%' delay={4} />
			<FloatingShape color='gray' size='96px' top='20%' left='0%' delay={3} />
			<FloatingShape color='teal' size='128px' top='70%' left='40%' delay={1} />
			<FloatingShape color='cyan' size='192px' top='40%' left='80%' delay={5} />
			<FloatingShape color='blue' size='96px' top='10%' left='30%' delay={2} />
			<FloatingShape color='indigo' size='64px' top='80%' left='70%' delay={4} />
			<FloatingShape color='purple' size='128px' top='30%' left='0%' delay={3} />
			<FloatingShape color='pink' size='192px' top='60%' left='50%' delay={1} />
			<FloatingShape color='red' size='256px' top='0%' left='90%' delay={0} />
			<FloatingShape color='yellow' size='64px' top='100%' left='20%' delay={4} />
			<FloatingShape color='lime' size='96px' top='50%' left='40%' delay={3} />
			<FloatingShape color='emerald' size='128px' top='90%' left='70%' delay={1} />
			<FloatingShape color='green' size='192px' top='20%' left='0%' delay={5} />
			<FloatingShape color='blue' size='64px' top='80%' left='50%' delay={4} />

			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
