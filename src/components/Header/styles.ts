import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1.25rem 0;
  color: ${props => props.theme.colors.text};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;