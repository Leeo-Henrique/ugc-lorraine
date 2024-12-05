import styled from "styled-components";

export const Container = styled.main`
  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.max_width};
  display: ${(props) => props.theme.container.display};
  flex-direction: ${(props) => props.theme.container.flexDirection};
  align-items: ${(props) => props.theme.container.alignItems};
  justify-content: space-evenly;
  p {
    font-size: 25px;
    text-align: center;
    font-weight: 600;
  }
  h1 {
    font-size: 100px;
    font-style: italic;
    text-transform: uppercase;
  }
  .container__pricing {
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
    width: 100%;

    span {
      font-weight: 600;
      font-size: 25px;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 95%;
    max-width: ${(props) => props.theme.container.max_width};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-size: 5px;
      text-align: center;
      margin: 0;
    }
    h1 {
      font-size: 50px;
      font-style: italic;
      text-transform: uppercase;
    }
    .container__pricing {
      display: flex;
      justify-content: space-evenly;
      margin: 10px 0;
      width: 100%;
      height: 200px;
      span {
        font-weight: 600;
        font-size: 10px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.media.tablet}) {
  }
  @media (max-width: ${(props) => props.theme.media.desktop}) {
  }
  @media (max-width: ${(props) => props.theme.media.largeDesktop}) {
  }
`;
