import { useState } from "react"
import { useTodo } from "../contexts"


function InputForm() {

    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return;

        addTodo({todo, completed:false})
        setTodo("")
    }

  return (
    <form  className="flex" onSubmit={add}>
        <input type="text" placeholder="Write To Do......" className="w-full border-black/10  border-y-2 border-slate-500 rounded-l-lg px-3 outline-none duration-150 py-1.5 bg-white/10" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit" className="rounded-r-lg text-lg bg-green-500 text-white shrink-0 px-4 font-medium" >Add</button>
    </form>
  )
}

export default InputForm