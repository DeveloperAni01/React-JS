import { useState } from "react"



function App() {
  const [color, setColor] = useState("white")
 
  return (
    <>
     <div className='w-full h-screen duration-200' style = {{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bg-slate-300 rounded-2xl top-12 inset-x-10 py-5 gap-10 drop-shadow-lg">
        <button className='bg-violet-600 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("violet")}>violet</button>
        <button className='bg-indigo-600 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("indigo")}>indigo</button>
        <button className='bg-blue-600 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("blue")}>blue</button>
        <button className='bg-green-600 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("green")}>green</button>
        <button className='bg-yellow-500 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("yellow")}>yellow</button>
        <button className='bg-orange-500 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("orange")}>orange</button>
        <button className='bg-red-600 rounded-full px-5 text-4xl font-bold uppercase outline-double' onClick={() => setColor("red")}>red</button>
      </div>
      
     </div> 
    </>
  )
}

export default App
