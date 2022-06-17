import styled from 'styled-components';

export const Container = styled.article`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .authorInfo {
      display: flex;
      flex-direction: column;

      strong {
        color: ${props => props.theme.colors.textSecundary};
        line-height: 1.6;
      }

      span {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.text};
        line-height: 1.6; 
      }
    }

    time {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.text};
    }
    
  }

  .content {
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    margin-top: 1.5rem;

    p {
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: ${props => props.theme.colors.primary};
      text-decoration: none;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .commentForm {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme.colors.backgroundSecundary};

    > strong {
      line-height: 1.6;
      color: ${props => props.theme.colors.text};
    }

    textarea {
      width: 100%;
      background-color: ${props => props.theme.colors.backgroundSecundary};
      border: 0;
      border-radius: 8px;
      resize: none;
      height: 6rem;
      padding: 1rem;
      color: ${props => props.theme.colors.text};
      line-height: 1.4;
      margin-top: 1rem;
    }

    footer {
      visibility: hidden;
      max-height: 0;
    }

    &:focus-within footer {
      visibility: visible;
      max-height: none;
    }

    button[type="submit"] {
      cursor: pointer;
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: 0;
      background-color: ${props => props.theme.colors.primary};
      color: var(--white);
      font-weight: bold;

      transition: filter 0.1s;

      &:not(:disabled):hover {
        filter: brightness(0.8);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }

  .commentList {
    margin-top: 2rem;
  }
`; 
