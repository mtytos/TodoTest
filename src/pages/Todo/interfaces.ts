import { ETodoStatus } from './constants';

export interface ITodo {
  id: string;
  title: string;
  status: ETodoStatus;
  checked: boolean;
}

export interface ICountTodo {
  done: number;
  undone: number;
  total: number;
}
