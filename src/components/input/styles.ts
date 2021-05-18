import styled, { css } from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div<{ isError: boolean }>`
  width: 100%;
  margin-bottom: 10px;
  .base-input {
    width: 100%;
    input {
      padding: 16px 17px;
      height: auto;
      width: 100%;
      border: 1px solid ${colors.royalBlue};
      box-sizing: border-box;
      border-radius: 4px;
      background: white;
      font-size: 14px;
      line-height: 18px;
      color: black;

      :focus {
        outline: 2px solid ${colors.lightBlue};
      }
    }
  }

  ${({ isError }) =>
    isError &&
    css`
      .base-input {
        input {
          border: 2px solid #f07f7f;

          :focus {
            outline: none;
          }
        }
      }
    `}
`;

Container.displayName = "Container";

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.darkTelegray};
`;

Title.displayName = "Title";

export const ErrorText = styled.p`
  margin-top: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #F34343;
`;

ErrorText.displayName = "Error";

export const RelativeBlock = styled.div`
  position: relative;
`;

export const Popup = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: calc(100% + -8px);
  width: 250px;
  padding: 12px;
  z-index: 10;
  border-radius: 12px;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  background: white;
  color: ${colors.darkTelegray};

  :hover {
    display: block;
  }

  ::before {
    content: "";
    position: absolute;
    top: -1px;
    right: 1px;
    transform: translateX(-50%) rotate(45deg);
    width: 24px;
    height: 24px;
    z-index: -1;
    background-color: white;
  }
`;