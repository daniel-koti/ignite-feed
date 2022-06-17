import styled from 'styled-components';

export const Image = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(${props => props.theme.colors.primary});
  outline: 2px solid var(${props => props.theme.colors.primary});
`