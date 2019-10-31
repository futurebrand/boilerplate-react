import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.grayLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  button {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 4px;
  }
`;

export const LogoDesktop = `
  max-width: 150px;
`;

export const Logo = styled(Link)`
  max-width: 100px;

  ${({ theme }) => theme.maxScreen('tablet', LogoDesktop)}
`;