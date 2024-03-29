import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Ryan's TODO List</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
