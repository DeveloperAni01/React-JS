import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0)

  function addValue () {
    setCount(count + 1)
    
  }

  function substract () {
    if(count == 0) {
      // alert("count can't be negative")
      return;
    }
    
    setCount(count - 1)
  }

  return (
    <>
     <div className=" items-center flex flex-col">
     <h2 className="bg-yellow-400 w-80 text-center h-auto rounded-lg text-4xl ml-7 py-5  mt-5">counter value {count}</h2>

    <button className="bg-blue-600 px-5 text-2xl text-black my-10 mx-12 rounded-full" onClick={addValue}>Add</button>

    <button className="bg-red-600 px-7 text-2xl text-black-600 rounded-full" onClick = {substract}>Substrtuct</button>
     </div>
    </>
  )
}

export default App
