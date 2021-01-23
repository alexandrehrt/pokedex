import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundSidebar: string;
      backgroundMain: string;

      textSidebar: string;
      textMain: string;
    };
  }
}
