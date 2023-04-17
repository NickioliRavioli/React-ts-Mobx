import * as React from 'react';
import './style.css';
import { TodoList } from './TodoList';
import { TodoStore } from './TodoStore';

export default function App() {
  return <TodoList todoStore={TodoStore}></TodoList>;
}
