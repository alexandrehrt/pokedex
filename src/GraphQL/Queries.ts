import { gql } from '@apollo/client';

export const LOAD_POKEMONS = gql`
  query {
    pokemons {
      results {
        name
        id
        image
      }
    }
  }
`;
