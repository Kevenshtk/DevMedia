import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f8f7ff;
  padding: 100px 20px;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    h3 {
      font-size: 20px;
    }
  }
`;

export const CardArea = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;

  .ImgWrapper,
  .cardTexto {
    width: 50%;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border: 1px solid #c4c4c4;
  }

  .cardTexto {
    padding: 20px;

    h3 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 40px;
    }

    p {
      color: #4a4a4a;
    }
  }

  @media (max-width: 768px) {
      .cardTexto h3 {
        font-size: 20px;
      }
    }

  @media (max-width: 550px) {
    flex-direction: column;

    .ImgWrapper,
    .cardTexto {
      width: 100%;
      height: 295px;
    }
  }
`;

export const Card = styled.div`
  width: 50%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px solid #c4c4c4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
