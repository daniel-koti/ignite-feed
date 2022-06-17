import styled from 'styled-components';

export const Container = styled.aside`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }

  div.profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: calc(0px - 1.5rem - 6px);

    > strong {
      margin-top: 1.5rem;
      color: ${props => props.theme.colors.textSecundary};
      line-height: 1.5;
    }

    > span {
      font-size: 1rem;
      color: ${props => props.theme.colors.text};
      line-height: 1.6;
    }
  }

  footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;

    > a {
      background: transparent;
      color: ${props => props.theme.colors.primary};
      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 8px;
      height: 50px;
      padding: 0 1.5rem;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      transition: background 0.1s, color 0.1s;

      &:hover {
        background: ${props => props.theme.colors.primary};
        color: var(--white);
      }
    }
  }
`; 
