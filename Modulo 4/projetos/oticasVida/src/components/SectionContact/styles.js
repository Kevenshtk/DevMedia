import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  background-color: #05031b;
  color: #fff;
  padding: 100px 20px;

  h3 {
    font-size: 45px;
  }

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    h3 {
      font-size: 35px;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  .content {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px;
    border: 1px solid #808080;
    border-radius: 5px;

    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media (max-width: 768px) {
    .conteudo h4 {
      text-align: center;
    }
  }
`;
