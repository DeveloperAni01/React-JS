import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import Todo from "./components/Todo";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((eachTodo) => eachTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoId"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoId", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div id="main" className="min-h-screen bg-gray-800 ">
        <div className="w-full text-center py-12">
          <h1 className="text-6xl font-bold text-white mt-32 mb-8 ">
            Manage Your Todos
          </h1>
        </div>
        <div className=" w-full max-w-2xl mx-auto shadow-md border-t-2 border-slate-500 shadow-slate-400 rounded-lg px-4 py-3 text-white">
          <div className="mt-4">
            <InputForm />
          </div>

          <div className="flex flex-warp flex-col gap-y-4 py-3">
            {todos.map((eachTodo) => (

              <div key={Math.floor(Math.random() * 10000 + 1)} className="w-full">
                <Todo eachTodo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
