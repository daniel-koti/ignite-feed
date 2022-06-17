import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }

  .commentBox {
    flex: 1;

    .commentContent {
      background: ${props => props.theme.colors.backgroundSecundary};
      border-radius: 8px;
      padding: 1rem;

      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .authorAndTime strong {
          display: block;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .authorAndTime time {
          display: block;
          font-size: 0.75rem;
          line-height: 1.6;
          color: ${props => props.theme.colors.text};
        }

        button {
          background: transparent;
          border: none;
          color: ${props => props.theme.colors.textSecundary};
          cursor: pointer;

          line-height: 0;
          border-radius: 2px;

          &:hover {
            color: var(--red-500);
          } 
        }
      }

      p {
        margin-top: 1rem;
        color: ${props => props.theme.colors.text};
      } 

    }

    footer {
      margin-top: 1rem;

      button {
        border: 0;
        background: transparent;
        color: ${props => props.theme.colors.textSecundary};
        cursor: pointer;

        display: flex;
        align-items: center;

        border-radius: 2px;

        &:hover {
          color: ${props => props.theme.colors.primary};
        }

        svg {
          margin-right: 0.5rem;
        }

        span::before {
          content: "\2022";
          padding: 0 0.25rem;
        }
      }
    }
  }

  
`;