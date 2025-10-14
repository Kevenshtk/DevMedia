import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 70px 30px;
  border: 1px solid #74727233;

  color: ${(themes) => (themes.dark ? "#CCCCCC" : "#000000ff")};

  @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 16px;
  }

  h3 {
    font-size: 24px;
  }

  small {
    font-size: 14px;
  }
`;

export const CardDesc = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
