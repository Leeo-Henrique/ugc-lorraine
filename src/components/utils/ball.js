import styled from "styled-components";

export const Ball = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props.padding};
  gap: 10px;
  @media (max-width: ${(props) => props.theme.media.mobile}) {
    max-width: 33%;
    max-height: 33%;
    /* padding: 10px; */
  }
`;
