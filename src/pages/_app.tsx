import React, { useCallback, useState } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
