import styled from 'styled-components';

export const Status = styled.div`
  p {
    color: ${props => props.logged ? 'green' : 'red'};
  }
`;