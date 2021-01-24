import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 30px;
  background: ${props => props.theme.colors.backgroundSidebar};

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Logo - searchbox */
  div {
    max-width: 80%;
    border-bottom: 1px solid white;

    p {
      color: white;
      margin: 20px 0px;
      text-align: center;
    }

    input {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 12px;
      margin-bottom: 20px;
    }
  }

  /* List of pokemons */
  ul {
    margin-top: 30px;
    height: 60vh;
    list-style: none;
    width: 80%;
    overflow-y: scroll;

    li ~ li {
      margin-top: 20px;
    }

    button {
      border: none;
      font-size: 18px;
      color: #fff;
      background: transparent;
      transition: 0.2s;

      &:hover {
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
`;

export const Main = styled.div`
  padding: 30px 80px;
  flex: 1;
  height: 100%;
  background: ${props => props.theme.colors.backgroundMain};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 45px;
    color: white;
  }

  body {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  div#poke-details {
    width: 50%;
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 30px;
    grid-template-areas:
      'picture picture'
      'type type'
      'heigth weigth'
      'attributes attributes';
  }

  div#poke-picture {
    grid-area: picture;
    background: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }

  div#poke-type {
    grid-area: type;
    background: #fff;
    padding: 8px;
    border-radius: 12px;

    span ~ span {
      color: #fff;
      margin-left: 20px;
      padding: 5px 12px;
      border-radius: 12px;

      background: lightgreen;
    }
  }

  span#heigth {
    grid-area: heigth;
    background: #fff;
    padding: 8px;
    border-radius: 12px;
  }

  span#weigth {
    grid-area: weigth;
    background: #fff;
    padding: 8px;
    border-radius: 12px;
  }

  div#attributes {
    grid-area: attributes;
    background: #fff;
    padding: 8px;
    border-radius: 12px;

    div {
      margin-top: 15px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 18px;
      grid-column-gap: 30px;

      span {
        text-align: center;
        background: lightgreen;
        color: #fff;
        border-radius: 12px;
        padding: 4px;
      }
    }
  }

  div#poke-description {
    width: 50%;
    height: 100vh;
    margin-left: 50px;

    div#evolution {
      background: #fff;
      margin-bottom: 20px;
      border-radius: 12px;
      padding: 20px;
      display: flex;

      img {
        margin: 0 15px;
      }
    }

    div#text {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      line-height: 30px;
      height: 410px;
      overflow-y: scroll;
    }
  }
`;
