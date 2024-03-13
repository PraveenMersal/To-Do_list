import React, { useState } from 'react';
import './App.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    const updatedText = prompt('Edit todo:', todos.find(todo => todo.id === id).text);
    if (updatedText !== null) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, text: updatedText } : todo));
    }
  };

  return (
    <div className="container">
      <div className="App">
        <h1 style={{ color: 'blue' }}>Grocery Bud</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="E.g. Eggs"
            value={inputText}
            onChange={handleChange}
          />
          <button type="submit" style={{ backgroundColor: 'lightblue' }}>Submit</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <span>
                <FaEdit onClick={() => handleEdit(todo.id)} style={{ cursor: 'pointer' }} />
                <FaTrash onClick={() => handleDelete(todo.id)} style={{ cursor: 'pointer' }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
