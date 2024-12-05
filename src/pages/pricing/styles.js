import styled from "styled-components";

export const Container = styled.main`
  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.max_width};

  .container__pricing {
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;

    p {
      font-size: 25px;
      text-align: center;
    }
    span {
      font-weight: 600;
      font-size: 25px;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {}
  @media (max-width: ${(props) => props.theme.media.tablet}) {}
  @media (max-width: ${(props) => props.theme.media.desktop}) {}
  @media (max-width: ${(props) => props.theme.media.largeDesktop}) {}
`;
