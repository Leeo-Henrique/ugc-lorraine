import { Container } from "../../theme";

export const TypesOfJob = ({ project }) => {
  return (
    <Container listStyle={"disc"} textStyle={"normal"}>
      <h1>Tipos de trabalho</h1>
      <ul>
        <li>
          Turorial: Explico como usar seu produto, encaixar no dia a dia e sua
          utilidade;
        </li>
        <li>
          Depoimento: Testo e digo o que achei do seu produto, opinião sincera,
          como se fosse uma conversa com um amigo;
        </li>
        <li>
          Unboxing: Abertura de recebido, mostrando todos os detalhes, filmando
          e comentando o processo todo;
        </li>
        <li>
          Live: Utilizar o produto em live e comentando com os meus viewers o
          que estou achando;
        </li>
      </ul>
    </Container>
  );
};
