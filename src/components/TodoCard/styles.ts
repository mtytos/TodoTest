import styled from 'styled-components';

import { ETodoStatus } from '../../pages/Todo/constants';
import { ITitleStyled } from './interfaces';

export const TodoCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 640px;
  margin: 16px auto;
  padding: 8px;

  border: 1px black solid;
`;

export const TitleStyled = styled.div<ITitleStyled>`
  span {
    text-decoration: ${({ status }) => (status === ETodoStatus.Done ? 'line-through' : 'none')};
  }
`;

export const ButtonContainerStyled = styled.div`
  & :first-child {
    margin-right: 8px;
  }
`;
