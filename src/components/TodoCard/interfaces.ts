import { ETodoStatus } from '../../pages/Todo/constants';
import { ITodo } from '../../pages/Todo/interfaces';

export interface ITodoCard {
  todo: ITodo;
  onDelete: (id: string) => void;
  onChangeStatus: ({ id, status }: Pick<ITodo, 'id' | 'status'>) => void;
  onChecked: ({ id, checked }: Pick<ITodo, 'id' | 'checked'>) => void;
}

export interface ITitleStyled {
  status: ETodoStatus;
}
