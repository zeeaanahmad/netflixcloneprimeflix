import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 800px;
  font-size: 4rem;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;

  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  margin-bottom: 0;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
