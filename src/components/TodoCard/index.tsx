import { observer } from 'mobx-react';
import { ChangeEvent, FC } from 'react';

import { ETodoStatus } from '../../pages/Todo/constants';
import { ITodoCard } from './interfaces';
import { ButtonContainerStyled, TitleStyled, TodoCardStyled } from './styles';

export const TodoCard: FC<ITodoCard> = observer(({ todo, onDelete, onChangeStatus }) => {
  const { id, title, status } = todo;

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleChangeStatus = () => {
    onChangeStatus({ id, status });
  };

  return (
    <TodoCardStyled key={id}>
      <input type="checkbox" onChange={handleCheckbox} />
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
