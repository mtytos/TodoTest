import { ETodoStatus } from './constants';

export interface ITodo {
  id: string;
  title: string;
  status: ETodoStatus;
  checked: boolean;
}
