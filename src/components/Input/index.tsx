import { observer } from 'mobx-react';
import { ChangeEvent, FC, useState } from 'react';

import { IInputProps } from './interfacces';
import { InputStyled } from './styles';

export const Input: FC<IInputProps> = observer(({ onClick, placeholder, buttonLabel, isAutoCleanText }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    onClick(inputText);
    isAutoCleanText && setInputText('');
  };

  return (
    <InputStyled>
      <input type="text" placeholder={placeholder} onChange={handleChange} value={inputText} />
      <button onClick={handleClick}>{buttonLabel}</button>
    </InputStyled>
  );
});
