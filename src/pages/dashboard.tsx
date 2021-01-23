import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { BiSun, BiMoon, BiSearch } from 'react-icons/bi';

import { Container, Sidebar, Main } from '../styles/pages/Dashboard';

interface Props {
  toggleTheme(): void;
}

const Dashboard: React.FC<Props> = ({ toggleTheme }) => {
  const logo = 'https://cdn.riderize.com/miscellaneous/logo-pokedex.png';

  const { title } = useContext(ThemeContext);

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
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
          <li>
            <p>001 Bulbasaur</p>
          </li>
        </ul>
      </Sidebar>

      <Main>
        <header>
          <h1>001 - Bulbasaur</h1>
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
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fpokemon-planet%2Fimages%2F5%2F5b%2FBulbasaur_by_elfaceitoso.png%2Frevision%2Flatest%3Fcb%3D20161115042430&f=1&nofb=1"
                alt="Pokemon"
                height="300rem"
                width="300rem"
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
                É um fato conhecido de todos que um leitor se distrairá com o
                conteúdo de texto legível de uma página quando estiver
                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que
                ele tem uma distribuição normal de letras, ao contrário de
                "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma
                aparência similar a de um texto legível. Muitos softwares de
                publicação e editores de páginas na internet agora usam Lorem
                Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem
                ipsum' mostra vários websites ainda em sua fase de construção.
                Várias versões novas surgiram ao longo dos anos, eventualmente
                por acidente, e às vezes de propósito (injetando humor, e coisas
                do gênero).
              </p>
            </div>
          </div>
        </body>
      </Main>
    </Container>
  );
};

export default Dashboard;
