import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { EMultiplyAction, ETodoStatus } from './constants';
import { ICountTodo, ITodo } from './interfaces';

export class TodoStore {
  todoList: ITodo[] = [];
  filterText = '';

  constructor() {
    makeAutoObservable(this);
  }

  get todoListWithFilter() {
    return this.todoList.reduce<ITodo[]>((acc, todo) => {
      if (todo.title.includes(this.filterText)) {
        acc.push(todo);
      }

      return acc;
    }, []);
  }

  get countTodo() {
    const countValues = { done: 0, undone: 0, total: this.todoList.length };

    return this.todoList.reduce<ICountTodo>((acc, { status }) => {
      if (status === ETodoStatus.Done) {
        acc.done++;
      } else {
        acc.undone++;
      }

      return acc;
    }, countValues);
  }

  setTodoList = (todoList: ITodo[]) => {
    this.todoList = todoList;
  };

  setFilterText = (text: string) => {
    this.filterText = text.trim();
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

  updatedTodoChecked = ({ id, checked }: Pick<ITodo, 'id' | 'checked'>) => {
    const todoIndex = this.todoList.findIndex((todo) => todo.id === id);

    this.todoList[todoIndex].checked = checked;
  };

  multipleAction = (action: EMultiplyAction) => {
    const updatedTodoList = this.todoList.reduce<ITodo[]>((acc, todo) => {
      if (todo.checked) {
        switch (action) {
          case EMultiplyAction.SetDone:
            todo.status = ETodoStatus.Done;
            break;
          case EMultiplyAction.SetUndone:
            todo.status = ETodoStatus.Undone;
            break;
          case EMultiplyAction.RemoveAll:
            return acc;
        }
      }

      acc.push(todo);
      return acc;
    }, []);

    this.setTodoList(updatedTodoList);
  };
}
