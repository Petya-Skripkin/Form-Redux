import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8% 35%;

  @media (max-width: 800px) {
    padding: 8% 10%;
  }
`;

export const Context = styled.p`
  font-size: 26px;
  margin-bottom: 12px;
`;