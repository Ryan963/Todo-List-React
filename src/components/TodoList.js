import React from 'react'
import Todo from './Todo'
export default function TodoList({todos, setTodos}) {
    return (
    <div className="todo-container">
      <ul className="todo-list">
          {todos.map(todo => (
              <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} setTodos={setTodos}/>
          ))}
      </ul>
    </div>
    )
}
