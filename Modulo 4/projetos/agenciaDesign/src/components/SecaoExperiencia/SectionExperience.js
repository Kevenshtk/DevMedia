import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 100px 20px;

  background-color: ${(themes) => (themes.dark ? "#393838" : "#f6f8fc")};
`;

export const ContainerTitle = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  h2 {
    font-size: 45px;
    color: ${(themes) => (themes.dark ? "#CCCCCC;" : "#32333c")};

    &:after {
      content: "";
      width: 80px;
      display: block;
      margin: 0 auto;
      border: 1px solid #feb633;
    }
  }

  p {
    font-size: 18px;
    color: ${(themes) => (themes.dark ? "#CCCCCC;" : "#8a8fa3")};
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
