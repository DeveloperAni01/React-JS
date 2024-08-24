import { useCallback, useState, useEffect, useRef } from "react"


function App() {
 
  const [length, setLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowCharacter, setAllowCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNumber) str += "0123456789"
    if(allowCharacter) str += "!@#$%^&*(){}`~[]?"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }

    setPassword(password)
  }, [length,allowCharacter, allowNumber, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.range(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()

  }, [length, allowCharacter, allowNumber, passwordGenerator])

  return (
    <>
    <div className="w-screen h-screen items-center flex flex-warp bg-black">
      <div className="w-full max-w-md mx-auto shadow-indigo-500/90 rounded-lg px-4 py-8 my-8 bg-gray-800 text-orange-500 shadow-inner ">
        <h1 className='text-white text-center my-3 text-lg mb-8 uppercase'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-indigo-500 text-white px-3 py-0.5 shrink-0 opacity-75 cursor-pointer hover:opacity-100'
          >copy</button>
        </div>
         <div className='flex text-base gap-x-3 '>
          <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
          <input
          type="checkbox"
          className="cursor-pointer"
          defaultChecked={allowNumber}
          id="numberInput"
          onChange={() => {
              setAllowNumber((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
        <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={allowCharacter}
              id="characterInput"
              onChange={() => {
                  setAllowCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
        </div>   
      </div>
    </div>
    </>
  )
}

export default App
