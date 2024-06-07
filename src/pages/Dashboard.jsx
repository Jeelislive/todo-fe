import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  }

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, [])

  const saveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(items => {
      return items.id !== id;
    });
    setTodos(newTodos);
    saveTodo();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(items => {
      return items.id !== id;
    });
    setTodos(newTodos);
    saveTodo();
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveTodo();
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(items => {
      return items.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTodo();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <input
          onChange={handleChange}
          type="text"
          value={todo}
          className="w-full px-4 py-2 border rounded-md mb-2 sm:mb-0 sm:mr-4"
          placeholder="Add new todo..."
        />
        <button onClick={handleAdd} disabled={todo.length < 3}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <div className="flex items-center mb-4">
        <input onChange={toggleFinished} className='mr-2' type='checkbox' checked={showFinished} /> Show Finished
      </div>
      <ul className="space-y-4">
        {todos.length === 0 && <div className='m-5'>No Todos to Display</div>}
        {todos.map(item => (
          (showFinished || !item.isCompleted) &&
          <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-md">
            <div className="flex items-center w-full sm:w-auto">
              <input type='checkbox' name={item.id} onChange={handleCheckbox} checked={item.isCompleted} className="mr-4" id={item.id}></input>
              <span className={`flex-1 ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</span>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <button onClick={(e) => handleEdit(e, item.id)} className="text-blue-500 hover:text-blue-600 mr-4 text-xl">
                <FaEdit />
              </button>
              <button onClick={(e) => handleDelete(e, item.id)} className="text-red-500 hover:text-red-600 text-xl">
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
