import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Navbar = styled.nav`
  background: #dd4b4a;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  img.rotate-image {
    animation: rotation 3s ease-in-out infinite;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid #ecebee;
      border-radius: 4px;
      width: 400px;
      padding: 14px;
      font-size: 14px;
      margin: 10px 0;
    }

    p {
      color: #dd4b4a;
      font-size: 12px;
    }

    button {
      margin-top: 10px;
      width: 40%;
      background: #0054d1;
      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 10px 15px;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
