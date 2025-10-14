import styled from "styled-components";
import Image from "next/image";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  background-color: ${(themes) => (themes.dark ? "#252525;" : "#fff")};
`;

export const ContainerInfo = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 100px;

  p {
    text-align: center;
    font-size: 16px;
    color: #8a8fa3;
  }
`;

export const ContainerSocial = styled.div`
  width: 100%;
  max-width: 375px;
  padding-bottom: 100px;
`;

export const ListIcons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  width: 45px;
  height: 45px;
`;

export const ContainerCopyright = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: #8a8fa3;

  border-top: 1px solid ${(themes) => (themes.dark ? "#747272;" : "#CCCCCC")};

  p {
    font-size: 16px;
  }

  span {
    color: #feb633;
  }
`;
