import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --green-300: #00B37E;
    --green-500: #00875f;

    --red-500: #f75a68;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.backgroundSecundary};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .wrapper {
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 2rem;
    align-items: flex-start;
  }

  @media (max-width: 960px) {
    html {
      font-size: 87.5%;
    }

    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`;