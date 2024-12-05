import { Ball } from "../../components/utils/ball";
import { theme } from "../../theme";
import { Container } from "./styles";

export const Pricing = ({ project }) => {
  return (
    <Container>
      <h1>Valores:</h1>
      <div className="container__pricing">
        <Ball
          padding={"25px"}
          width={"350px"}
          height={"350px"}
          backgroundColor={theme.colors.lilac}
        >
          <p>Vídeo para o tiktok ou instagram reel</p>
          <span>R$ 350 + produto</span>
        </Ball>
        <Ball
          padding={"25px"}
          width={"350px"}
          height={"350px"}
          backgroundColor={theme.colors.lilac}
        >
          <p>Live utilizando o produto</p>
          <span>R$ 450 + produto</span>
        </Ball>
        <Ball
          padding={"25px"}
          width={"350px"}
          height={"350px"}
          backgroundColor={theme.colors.lilac}
        >
          <p>Serviço personalizado ou combinado com mais de uma rede social:</p>
          <span>Valor a combinar</span>
        </Ball>
      </div>
      <p>
        Em qualquer dos pacotes escolhidos, é necessároio um briefing anterior
        para eu entender do que a marca precisa, juntamente com contrato e envio
        dos produtos, após, eu envio o pacote de vídeos e fotos via google drive
        para evitar perda de qualidade!
      </p>
    </Container>
  );
};
