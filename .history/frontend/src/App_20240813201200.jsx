
import FloatingShape from "./components/FloatingShape";

function App() { 

  return (
    <div
			className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
		>
			<FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <FloatingShape color='bg-yellow-500' size='w-16 h-16' top='90%' left='50%' delay={4} />
      <FloatingShape color='bg-red-500' size='w-24 h-24' top='20%' left='90 %' delay={3} />
      <FloatingShape color='bg-pink-500' size='w-32 h-32' top='10%' left='20%' delay={1} />
      <FloatingShape color='bg-purple-500' size='w-48 h-48' top='50%' left='50%' delay={0} />
      <FloatingShape color='bg-indigo-500' size='w-64 h-64' top='80%' left='30%' delay={2} />
      <FloatingShape color='bg-blue-500' size='w-16 h-16' top='30%' left='70%' delay={4} />
      

      <h1 className="text-red-500 text-5xl">React App</h1>

    </div>
  );
}

export default App;
