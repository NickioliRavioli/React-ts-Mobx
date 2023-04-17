import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { TodoStoreImpl } from './TodoStore';
interface TodoListProps {
  todoStore: TodoStoreImpl;
}

export const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [value, setValue] = useState<string>('');
  const status = todoStore.Status;
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
        />
        <button
          onClick={(event) => {
            if (!value) return;
            todoStore.AddTodo(value);
            setValue('');
          }}
        >
          Submit
        </button>
      </div>
      <p>Todos</p>
      <p>
        Completed {status.completed} --- Remaining {status.remaining}
      </p>
      <ul>
        {todoStore.todos.map((item) => {
          return (
            <li
              className="unselectable"
              onClick={() => {
                todoStore.ToggleTodo(item.id);
              }}
            >
              [{item.completed ? 'x' : '  '}]{item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
