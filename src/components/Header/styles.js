import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color('grayLight')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  button {
    background: ${({ theme }) => theme.color('black')};
    color: ${({ theme }) => theme.color('white')};
    padding: 10px;
    border-radius: 4px;
  }
`;

export const Logo = styled(Link)`
  max-width: 150px;
`;