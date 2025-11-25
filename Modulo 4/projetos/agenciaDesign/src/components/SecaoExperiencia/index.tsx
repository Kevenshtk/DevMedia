import { useContext } from "react";
import { ThemesContext } from "@/contexts/themes";
import { Container, ContainerTitle, ContainerCards } from "./styles";
import Card from "@/components/Card";

const experience = [
  {
    data: "JUNHO 2012 - 2016",
    titulo: "Web Designer",
    empresa: "Pied Piper StartUp.",
    descricao:
      "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores",
  },
  {
    data: "AGOSTO 2016 - 2019",
    titulo: "Product Designer",
    empresa: "E Corp.",
    descricao:
      "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra",
  },
  {
    data: "FEVEREIRO 2019 - 2021",
    titulo: "Digital Consulting",
    empresa: "Arasaka Inc.",
    descricao:
      "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução",
  },
];

export default function SecaoExperiencia() {
  const { temaEscuro } = useContext(ThemesContext);

  return (
    <Container dark={temaEscuro}>
      <ContainerTitle dark={temaEscuro}>
        <h2>Experiências De Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </ContainerTitle>
      <ContainerCards>
        {experience.map((item, index) => (
          <Card
            key={index}
            temaEscuro={temaEscuro}
            data={item.data}
            titulo={item.titulo}
            empresa={item.empresa}
            descricao={item.descricao}
          />
        ))}
      </ContainerCards>
    </Container>
  );
}
