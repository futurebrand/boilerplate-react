import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const List = styled.ul`
  list-style: none;

  li {
    color: ${({ theme }) => theme.color('black')}
  }
`;