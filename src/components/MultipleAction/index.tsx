import { observer } from 'mobx-react';
import { FC } from 'react';

import { EMultiplyAction } from '../../pages/Todo/constants';
import { IMultipleActionProps } from './interfaces';
import { ActionContainerStyled } from './styles';

export const MultipleAction: FC<IMultipleActionProps> = observer(({ onClickAction }) => {
  return (
    <ActionContainerStyled>
      <p>Actions on selected ToDo's:</p>
      <button onClick={() => onClickAction(EMultiplyAction.SetDone)}>Done all</button>
      <button onClick={() => onClickAction(EMultiplyAction.SetUndone)}>Undone all</button>
      <button onClick={() => onClickAction(EMultiplyAction.RemoveAll)}>Remove</button>
    </ActionContainerStyled>
  );
});
