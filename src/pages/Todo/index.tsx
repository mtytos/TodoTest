import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { FC, useState } from 'react';

import { AddInput } from '../../components/AddInput';
import { TodoCard } from '../../components/TodoCard';
import { TodoStore } from './store';

export const Todo: FC = observer(() => {
  const [todoStore] = useState(() => new TodoStore());
  const { todoList, addTodo, deleteTodo, editTodoStatus } = todoStore;

  console.log(toJS(todoList));

  return (
    <div>
      <AddInput onClick={addTodo} />
      {todoList.map((todo) => (
        <TodoCard todo={todo} onDelete={deleteTodo} onChangeStatus={editTodoStatus} />
      ))}
    </div>
  );
});
