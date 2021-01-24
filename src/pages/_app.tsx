import React, { useCallback, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import { ThemeProvider, DefaultTheme } from 'styled-components';

// Styles
import GlobalStyle from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

// Apollo Client
const link = from([
  new HttpLink({ uri: 'https://graphql-pokeapi.vercel.app/api/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Component toggleTheme={toggleTheme} {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
