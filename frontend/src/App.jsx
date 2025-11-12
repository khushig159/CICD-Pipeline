import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  // ✅ Use async/await inside useEffect
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("https://cicd-pipeline-lc3s.onrender.com/api/todos");
        setTodos(res.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // ✅ Add todo with async/await
  const addTodo = async () => {
    if (!newTask.trim()) return; // prevent empty tasks
    try {
      const res = await axios.post("https://cicd-pipeline-lc3s.onrender.com/api/todos", {
        task: newTask
      });
      setTodos([...todos, res.data]);
      setNewTask('');
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>Mera Pro MERN Todo 🔥</h1>

      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add new task"
        style={{ padding: '10px', width: '300px' }}
      />

      <button
        onClick={addTodo}
        style={{ padding: '10px 20px', marginLeft: '10px' }}
      >
        Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id || todo._id} style={{ fontSize: '18px', padding: '5px' }}>
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
