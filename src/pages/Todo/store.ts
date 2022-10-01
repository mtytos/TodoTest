import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { ETodoStatus } from './constants';
import { ITodo } from './interfaces';

export class TodoStore {
  todoList: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTodoList = (todoList: ITodo[]) => {
    this.todoList = todoList;
  };

  addTodo = (title: string) => {
    const id = uuidv4();
    const newTodo: ITodo = { id, title, status: ETodoStatus.Undone, checked: false };

    this.setTodoList([...this.todoList, newTodo]);
  };

  deleteTodo = (id: string) => {
    const filteredList = this.todoList.filter((todo) => todo.id !== id);

    this.setTodoList(filteredList);
  };

  editTodoStatus = ({ id, status }: Pick<ITodo, 'id' | 'status'>) => {
    const todoIndex = this.todoList.findIndex((todo) => todo.id === id);
    const newStatus = status === ETodoStatus.Done ? ETodoStatus.Undone : ETodoStatus.Done;

    this.todoList[todoIndex].status = newStatus;
  };
}
