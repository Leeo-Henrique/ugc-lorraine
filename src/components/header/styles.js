import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  justify-content: center;
  display: flex;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    li {
      cursor: pointer;
    }
  }
`;
