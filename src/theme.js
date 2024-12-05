import styled from "styled-components";

export const theme = {
  container: {
    width: "75%",
    max_width: "1500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  colors: {
    pink: "#E0ADES",
    lilac: "#B8A8E6",
    purple: "#A8ABE6",
    soft_pink: "#CCA8E6",
    soft_lilac: "#B9A9E9",
    soft_blue: "#AAC1E3",
  },
  media: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1280px",
    xLargeDesktop: "1600px",
  },
};

export const Container = styled.main`
  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.max_width};
  display: ${(props) => props.theme.container.display};
  flex-direction: ${(props) => props.theme.container.flexDirection};
  align-items: ${(props) => props.theme.container.alignItems};
  justify-content: space-evenly;
  ul {
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 30px;
  }
  li {
    list-style: ${(props) => (props.listStyle ? props.listStyle : "none")};
    font-style: italic;
    font-size: 35px;
  }
  p {
    font-size: 25px;
    text-align: center;
    font-weight: 600;
  }

  h1 {
    font-size: 100px;
    font-style: ${(props) => (props.textStyle ? props.textStyle : "italic")};
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
`;
