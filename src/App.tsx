import React from 'react';

import { Todo } from './pages/Todo';
import { AppStyled } from './styles';

function App() {
  return (
    <AppStyled className="App">
      <Todo />
    </AppStyled>
  );
}

export default App;
