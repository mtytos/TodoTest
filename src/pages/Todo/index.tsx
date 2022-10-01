import { observer } from 'mobx-react';
import { FC, useState } from 'react';

import { Input } from '../../components/Input';
import { MultipleAction } from '../../components/MultipleAction';
import { TodoCard } from '../../components/TodoCard';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoStore } from './store';

export const Todo: FC = observer(() => {
  const [todoStore] = useState(() => new TodoStore());

  const {
    todoListWithFilter,
    addTodo,
    deleteTodo,
    editTodoStatus,
    setFilterText,
    countTodo,
    updatedTodoChecked,
    multipleAction,
  } = todoStore;

  return (
    <div>
      <TodoCounter counters={countTodo} />
      <Input
        placeholder="Enter a ToDo title..."
        buttonLabel="Add new ToDo"
        onClick={addTodo}
        isAutoCleanText={true}
      />
      <Input placeholder="Enter a Todo name to filter..." buttonLabel="Apply" onClick={setFilterText} />
      <MultipleAction onClickAction={multipleAction} />
      {todoListWithFilter.map((todo) => (
        <TodoCard
          todo={todo}
          onDelete={deleteTodo}
          onChangeStatus={editTodoStatus}
          onChecked={updatedTodoChecked}
        />
      ))}
    </div>
  );
});
