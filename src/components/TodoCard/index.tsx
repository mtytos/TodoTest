import { observer } from 'mobx-react';
import { ChangeEvent, FC } from 'react';

import { ETodoStatus } from '../../pages/Todo/constants';
import { ITodoCard } from './interfaces';
import { ButtonContainerStyled, TitleStyled, TodoCardStyled } from './styles';

export const TodoCard: FC<ITodoCard> = observer(({ todo, onDelete, onChangeStatus, onChecked }) => {
  const { id, title, status, checked } = todo;

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    onChecked({ id, checked: event.target.checked });
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleChangeStatus = () => {
    onChangeStatus({ id, status });
  };

  return (
    <TodoCardStyled key={id}>
      <input type="checkbox" checked={checked} onChange={handleCheckbox} />
      <TitleStyled status={status}>
        <span>{title}</span>
      </TitleStyled>
      <ButtonContainerStyled>
        <button onClick={handleChangeStatus}>{status === ETodoStatus.Done ? 'Undone' : 'Done'}</button>
        <button onClick={handleDelete}>Remove</button>
      </ButtonContainerStyled>
    </TodoCardStyled>
  );
});
