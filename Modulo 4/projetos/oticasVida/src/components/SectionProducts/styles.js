import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 100px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h3 {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 35px;
    }
  }
`;

export const CardsArea = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 15px 0;
`;

export const Card = styled.div`
  width: calc(50% - 15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: 2px 2px 20px -4px black;

  h4 {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    flex: 1 1 400px;

    h4 {
      font-size: 18px;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 80%;
  max-height: 150px;
  margin: 30px 0;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h3 {
    font-size: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
`;
