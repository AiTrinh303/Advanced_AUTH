import FloatingShape from '../components/FloatingShape'
import { Outlet } from "react-router-dom"

const rootLayout = () => {

  return (
    <div
			className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-yellow-900 flex items-center justify-center relative overflow-hidden'
		>
      <FloatingShape color='bg-green-500' size='w-48 h-48' top='-5%' left='10%' delay={0} />
      <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
      <FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='10%' delay={0} />
      <FloatingShape color='bg-green-500' size='w-32 h-32' top='20%' left='70%' delay={5} />
      <FloatingShape color='bg-emerald-500' size='w-32 h-32' top='90%' left='30%' delay={0} />
      <FloatingShape color='bg-lime-500' size='w-32 h-32' top='10%' left='50%' delay={5} />
      <FloatingShape color='bg-green-500' size='w-48 h-48' top='50%' left='50%' delay={0} />
      
			<main>
        <Outlet />
      </main>

    </div>
  )
}

export default rootLayout


