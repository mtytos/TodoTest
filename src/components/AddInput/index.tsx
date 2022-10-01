import { observer } from 'mobx-react';
import { ChangeEvent, FC, useState } from 'react';

import { IAddInputProps } from './interfacces';
import { AddInputStyled } from './styles';

export const AddInput: FC<IAddInputProps> = observer(({ onClick }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    onClick(title);
    setTitle('');
  };

  return (
    <AddInputStyled>
      <input type="text" placeholder="text ToDo title" onChange={handleChange} value={title} />
      <button onClick={handleClick}>Add new ToDo</button>
    </AddInputStyled>
  );
});
