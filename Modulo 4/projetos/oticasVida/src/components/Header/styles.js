import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const LogoWrapper = styled.div`
  width: 150px;
  height: 50px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    padding-top: 10px;
    border-top: 1px solid #c4c4c4;
  }
`;

export const Link = styled.a`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
`;
