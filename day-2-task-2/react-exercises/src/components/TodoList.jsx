import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Learn React Props' },
        { id: 2, task: 'Master useState hook' },
        { id: 3, task: 'Understand event handling' }
    ]);
    const [useIndex, setUseIndex] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [nextId, setNextId] = useState(4);

    const addTodoStart = () => {
        if (!newTask.trim()) return;

        // Add to the start of the array
        const newTodo = { id: nextId, task: newTask };
        setTodos([newTodo, ...todos]);
        setNextId(nextId + 1);
        setNewTask('');
    };

    return (
        <div className="component-container todo-container">
            <h3>Todo List</h3>

            <div className="todo-input-group">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New task..."
                    className="todo-input"
                    onKeyDown={(e) => e.key === 'Enter' && addTodoStart()}
                />
                <button onClick={addTodoStart} className="todo-add">Add to Top</button>
            </div>

            <div className="key-strategy">
                <span>Current Key Strategy:</span>
                <button
                    onClick={() => setUseIndex(!useIndex)}
                    className={`strategy-btn ${useIndex ? 'strategy-index' : 'strategy-id'}`}
                >
                    {useIndex ? 'Using Index (Anti-Pattern)' : 'Using Unique ID (Best Practice)'}
                </button>
            </div>

            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={useIndex ? index : todo.id} className="todo-item">
                        <span className="todo-number">{useIndex ? index : todo.id}.</span>
                        <span>{todo.task}</span>
                    </li>
                ))}
                {todos.length === 0 && <li className="todo-empty">No tasks left!</li>}
            </ul>

            {useIndex && (
                <div className="warning-box">
                    <strong>Warning:</strong> Currently using array index as key. Notice that when you add an item to the top, React re-renders all items below because their keys (indexes) shifted!
                </div>
            )}
        </div>
    );
};

export default TodoList;
