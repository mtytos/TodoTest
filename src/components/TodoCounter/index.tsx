import { observer } from 'mobx-react';
import { FC } from 'react';

import { ITodoCounter } from './interfaces';
import { TodoCounterStyled } from './styles';

export const TodoCounter: FC<ITodoCounter> = observer(({ counters }) => {
  const { total, done, undone } = counters;

  return (
    <TodoCounterStyled>
      <span>Total todo count: {total}</span>
      <span>Done todo count: {done}</span>
      <span>Undone todo count: {undone}</span>
    </TodoCounterStyled>
  );
});
