import { makeObservable, action, observable, computed } from 'mobx';

interface TodoItems {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoStoreImpl {
  todos: TodoItems[] = [];
  constructor() {
    makeObservable(this, {
      todos: observable,
      AddTodo: action,
      ToggleTodo: action,
      Status: computed,
    });
  }

  AddTodo(title: string) {
    const item: TodoItems = {
      id: title,
      title: title,
      completed: false,
    };
    this.todos.push(item);
  }

  ToggleTodo(id: string) {
    const index = this.todos.findIndex((item) => item.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  get Status() {
    let completed = 0,
      remaining = 0;
    this.todos.forEach((item) => {
      item.completed ? completed++ : remaining++;
    });
    return { completed, remaining };
  }
}

export const TodoStore = new TodoStoreImpl();
