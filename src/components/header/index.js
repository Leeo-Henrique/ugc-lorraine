import { StyledHeader } from "./styles";

export const Header = () => {
  const items = [
    { text: "Quem sou eu?", baseUrl: "" },
    { text: "Portifolio", baseUrl: "projects" },
    { text: "Conteúdo autoral", baseUrl: "" },
    { text: "Conteúdo em lives", baseUrl: "" },
    { text: "Por que me contratar", baseUrl: "" },
    { text: "Tipos de trabalho", baseUrl: "types_of_job" },
    { text: "VALORES", baseUrl: "pricing" },
    { text: "Vamos Trabalhar Juntos", baseUrl: "" },
  ];
  return (
    <StyledHeader>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.baseUrl ? `/${item.baseUrl}` : "#"}>{item.text}</a>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};
