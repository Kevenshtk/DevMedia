import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #fafbfc;
`;

export const ContainerImg = styled.div`
  width: 50%;
  background-image: url("/banner.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    .containerImg {
      display: none;
    }
  }
`;

export const ContainerInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  p {
    font-size: 12px;
  }

  h2 {
    font-size: 50px;
    font-weight: normal;
    color: #022144;
  }

  span {
    font-size: 50px;
    font-weight: bold;
    color: #022144;
  }

  @media (max-width: 768px) {
  h2, span{
    font-size: 2.5rem
  }
    .containerInfo {
      width: 100%;
    }
  }
`;
