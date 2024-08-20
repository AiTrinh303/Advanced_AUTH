import FloatingShape from '../components/FloatingShape'
import { Outlet } from "react-router-dom"

const rootLayout = () => {
  return (
    <div
			className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
		>
			<FloatingShape color='bg-green-500' size='w-48 h-48' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <FloatingShape color='bg-yellow-500' size='w-16 h-16' top='90%' left='50%' delay={4} />
      <FloatingShape color='bg-red-500' size='w-24 h-24' top='20%' left='90 %' delay={3} />
      <FloatingShape color='bg-pink-500' size='w-32 h-32' top='10%' left='20%' delay={1} />
      <FloatingShape color='bg-purple-500' size='w-48 h-48' top='50%' left='50%' delay={0} />
      <FloatingShape color='bg-indigo-500' size='w-64 h-64' top='80%' left='30%' delay={2} />
      <FloatingShape color='bg-blue-500' size='w-16 h-16' top='30%' left='70%' delay={4} />
      <FloatingShape color='bg-cyan-500' size='w-24 h-24' top='60%' left='0%' delay={3} />
      <FloatingShape color='bg-teal-500' size='w-32 h-32' top='0%' left='40%' delay={1} />
      <FloatingShape color='bg-gray-500' size='w-48 h-48' top='100%' left='80%' delay={5} />
      <FloatingShape color='bg-black' size='w-64 h-64' top='90%' left='20%' delay={0} />
      <FloatingShape color='bg-white' size='w-16 h-16' top='50%' left='90%' delay={4} />
      <FloatingShape color='bg-gray-500' size='w-24 h-24' top='20%' left='0%' delay={3} />
      <FloatingShape color='bg-teal-500' size='w-32 h-32' top='70%' left='40%' delay={1} />
            <FloatingShape color='bg-cyan-500' size='w-48 h-48' top='40%' left='80%' delay={5} />
            <FloatingShape color='bg-blue-500' size='w-24 h-24' top='10%' left='30%' delay={2} />
            <FloatingShape color='bg-indigo-500' size='w-16 h-16' top='80%' left='70%' delay={4} />
            <FloatingShape color='bg-purple-500' size='w-32 h-32' top='30%' left='0%' delay={3} />
            <FloatingShape color='bg-pink-500' size='w-48 h-48' top='60%' left='50%' delay={1} />
            <FloatingShape color='bg-red-500' size='w-64 h-64' top='0%' left='90%' delay={0} />
            <FloatingShape color='bg-yellow-500' size='w-16 h-16' top='100%' left='20%' delay={4} />
            <FloatingShape color='bg-lime-500' size='w-24 h-24' top='50%' left='40%' delay={3} />
      <FloatingShape color='bg-emerald-500' size='w-32 h-32' top='90%' left='70%' delay={1} />
      <FloatingShape color='bg-green-500' size='w-48 h-48' top='20%' left='0%' delay={5} />
      <FloatingShape color='bg-blue-500' size='w-16 h-16' top='80%' left='50%' delay={4} />


      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default rootLayout
