import styled from "styled-components";


export const Container = styled.section`
  height: 80vh;
  background-image: url("/capa.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 550px) {
    background-position: 89% center;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  color: #fff;
  font-family: "Anybody", cursive;

  @media (max-width: 550px) {
    background-color: rgba(0, 0, 0, 0.247);
  }
`;

export const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media (max-width: 768px) {
    font-size: 40px;
    max-width: 350px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  font-size: 36px;
  color: #c4c4c4;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
