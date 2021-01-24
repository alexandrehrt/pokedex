import React, { useCallback, useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useQuery } from '@apollo/client';

import { BiSun, BiMoon } from 'react-icons/bi';

import { LOAD_POKEMONS } from '../GraphQL/Queries';

import { Container, Sidebar, Main } from '../styles/pages/Dashboard';

interface Props {
  toggleTheme(): void;
}

const Dashboard: React.FC<Props> = ({ toggleTheme }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeName, setPokeName] = useState('');
  const [currentPoke, setCurrentPoke] = useState({});
  const { data } = useQuery(LOAD_POKEMONS);

  // Pokedex logo
  const logo = 'https://cdn.riderize.com/miscellaneous/logo-pokedex.png';

  const { title } = useContext(ThemeContext); // theme

  // Fetch initial pokemon data
  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons.results);
      setPokeName(data.pokemons.results[0].name);
      setCurrentPoke(data.pokemons.results[0]);
    }
  }, [pokemons, data]);

  const handleClick = useCallback(poke => {
    setPokeName(poke.name);
    setCurrentPoke(poke);
  }, []);

  return (
    <Container>
      <Sidebar>
        <div>
          <img src={logo} alt="Pokedex logo" width="250px" />
          <p>
            Everything you wanted to know about your favorite pocket monsters!
          </p>

          <input type="search" placeholder="Search by name or number" />
        </div>

        <ul>
          {pokemons.map(poke => {
            return (
              <li>
                <button type="button" onClick={() => handleClick(poke)}>
                  {poke.name}
                </button>
              </li>
            );
          })}
        </ul>
      </Sidebar>

      <Main>
        <header>
          <h1>{pokeName}</h1>
          <div id="switchbox">
            <BiSun color="#FFF" />
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              onColor="#264653"
              offColor="#ffff3f"
            />
            <BiMoon color="#FFF" />
          </div>
        </header>

        <body>
          <div id="poke-details">
            <div id="poke-picture">
              <img
                src={currentPoke.image}
                alt="Pokemon"
                height="300px"
                width="300px"
              />
            </div>

            <div id="poke-type">
              <span>Type</span>
              <span>Grass</span>
              <span>Poison</span>
            </div>

            <span id="heigth">Heigth: 2.04 / 0.7m</span>
            <span id="weigth">Weigth: 15.2lbs / 6.9kg</span>

            <div id="attributes">
              <h5>Attributes</h5>
              <div>
                <span>45 HP</span>
                <span>45 HP</span>
                <span>45 HP</span>
                <span>45 HP</span>
                <span>45 HP</span>
                <span>45 HP</span>
              </div>
            </div>
          </div>

          <div id="poke-description">
            <div id="evolution">
              <p>Evolution</p>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fpokemon-planet%2Fimages%2F5%2F5b%2FBulbasaur_by_elfaceitoso.png%2Frevision%2Flatest%3Fcb%3D20161115042430&f=1&nofb=1"
                alt="Pokemon"
                height="80px"
                width="80px"
              />
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fpokemon-planet%2Fimages%2F5%2F5b%2FBulbasaur_by_elfaceitoso.png%2Frevision%2Flatest%3Fcb%3D20161115042430&f=1&nofb=1"
                alt="Pokemon"
                height="80px"
                width="80px"
              />
            </div>

            <div id="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                consequat mollis magna vel faucibus. Aliquam nisl metus, laoreet
                vitae commodo et, consequat a neque. Fusce posuere arcu sit amet
                ex finibus, et vestibulum ex ornare. Sed in ligula in nunc
                suscipit tincidunt. Suspendisse tempus molestie venenatis.
                Praesent sit amet purus vitae dolor faucibus pulvinar vitae
                vestibulum metus. Aenean cursus lorem ac arcu pulvinar, et
                rutrum tellus lacinia. Nulla facilisi. Donec ac elit elementum,
                tempor lectus auctor, vehicula magna. Aliquam eget aliquam
                libero, in ornare magna. Vivamus ex diam, accumsan in convallis
                molestie, fermentum eu turpis. Suspendisse venenatis placerat
                ligula at vestibulum. Nam nec consectetur lorem, eu facilisis
                metus. Sed orci tortor, dictum ut nibh quis, bibendum
                ullamcorper turpis. Nulla id nibh maximus, tincidunt turpis in,
                venenatis neque. Pellentesque sit amet velit quis ipsum aliquam
                interdum. Aliquam mauris orci, imperdiet vitae bibendum id,
                semper vitae nulla.
              </p>
            </div>
          </div>
        </body>
      </Main>
    </Container>
  );
};

export default Dashboard;
