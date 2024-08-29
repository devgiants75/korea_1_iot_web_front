import React from "react";
import './Todo.css';

export default function Index() {
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
