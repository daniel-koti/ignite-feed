import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string,
      backgroundSecundary: string,

      text: '#202024',
      textSecundary: string
    }
  }
}