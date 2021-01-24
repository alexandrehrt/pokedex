import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import { Container, Navbar, Content } from '../styles/pages/Login';

// Images
const logo = 'https://cdn.riderize.com/miscellaneous/logo-pokedex.png';
const settingsIcon = 'https://cdn.riderize.com/miscellaneous/settings.svg';
const pokeball = 'https://cdn.riderize.com/miscellaneous/pokeball.svg';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [toggleError, setToggleError] = useState<boolean>(false);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      !email ? setToggleError(true) : Router.push('/dashboard');
    },
    [email],
  );

  return (
    <Container>
      <Navbar>
        <img src={logo} alt="Pokedex logo" height="45px" />
        <img src={settingsIcon} alt="Settings icon" height="30px" />
      </Navbar>

      <Content>
        <img src={pokeball} className="rotate-image" alt="Pokeball" />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          {toggleError && <p>Insira um e-mail válido</p>}

          <button type="submit">Acessar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
