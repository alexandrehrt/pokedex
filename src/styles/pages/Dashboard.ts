import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
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

  ul {
    margin-top: 30px;
    list-style: none;
    width: 80%;
    overflow-y: scroll;

    li ~ li {
      margin-top: 20px;
    }

    p {
      color: white;
      transition: 0.2s;
    }

    p:hover {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const Main = styled.div`
  padding: 30px 80px;
  flex: 1;
  background: ${props => props.theme.colors.backgroundMain};

  header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 3rem;
    color: white;
  }

  body {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* TESTEEEEEEEEE */
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
    background: white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }

  div#poke-type {
    grid-area: type;
    background: white;
    padding: 8px;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
  }

  span#heigth {
    grid-area: heigth;
    background: white;
    padding: 8px;
    border-radius: 12px;
  }

  span#weigth {
    grid-area: weigth;
    background: white;
    padding: 8px;
    border-radius: 12px;
  }

  div#attributes {
    grid-area: attributes;
    background: white;
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
        color: white;
        border-radius: 12px;
        padding: 4px;
      }
    }
  }

  /* AQUI COMEÇA O ORIGINAL - NÃO MEXER */
  /* div#poke-details {
    width: 50%;
    height: 100%;

    div#poke-picture {
      background: white;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div#poke-type {
      background: white;
      margin-top: 20px;
      padding: 0.5rem;
      border-radius: 12px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      span ~ span {
        background: green;
        padding: 4px 8px;
        color: white;
        text-transform: uppercase;
        border-radius: 8px;
      }
    }

    div#heigth-weigth {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }

    div#heigth-weigth span {
      width: 49%;
      font-size: 15px;
      background: white;
      text-align: center;
      padding: 10px;
      border-radius: 12px;
    }

    div#attributes {
      text-align: center;
      background: white;
      margin-top: 20px;
      padding: 10px;
      border-radius: 12px;

      div {
        margin-top: 10px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 10px;
        grid-column-gap: 10px;

        span {
          background: lightgreen;
          color: white;
          border-radius: 12px;
          padding: 4px;
        }
      }
    }
  } */

  /* AQUI TERMINA O ORIGINAL - NÃO MEXER */

  div#poke-description {
    width: 50%;
    height: 100%;
    margin-left: 50px;

    div#evolution {
      background: white;
      margin-bottom: 20px;
      border-radius: 12px;
      padding: 20px;
      display: flex;

      img {
        margin: 0 15px;
      }
    }

    div#text {
      background: white;
      border-radius: 12px;
      padding: 20px;
      line-height: 30px;
      height: 410px;
      overflow-y: scroll;
    }
  }
`;
