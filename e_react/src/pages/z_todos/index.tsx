import React, { useCallback, useMemo, useRef, useState } from "react";
import './Todo.css';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Index() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const nextIdRef = useRef<number>(0);

  const addTodo = useCallback((text: string) => {
    const newTodo = {
      id: nextIdRef.current,
      text,
      completed: false
    };

    setTodos([ ...todos, newTodo ]);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      if (input.value.trim() !== '') {
        addTodo(input.value.trim());
        input.value = '';
      }
    }
  }

  const filteredTodos = useMemo((id: number) => {

  }, [todos, filter]);

  return (
    <div>
      <h1>Hook 사용 예제</h1>
      <p>useState / useRef / useMemo / useCallback</p>

      <hr />
      <div className="app-container">
        <h2>My Todo List</h2>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          onKeyDown={handleKeyPress}
        />
        <div className="buttons-container">
          <button className="btn">All</button>
          <button className="btn">Active</button>
          <button className="btn">Completed</button>
        </div>
        <ul className="todo-list">

        </ul>
      </div>
    </div>
  );
}
