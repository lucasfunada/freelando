import { Container, Row } from "react-grid-system";
import Banner from "./Banner.jsx";
import { Tipografia } from "../../componentes/Tipografia/Tipografia.jsx";

import { IconeCertificado } from "./assets/IconeCertificado.jsx";
import { IconeConexoes } from "./assets/IconeConexoes.jsx";
import { IconeAtendimento } from "./assets/IconeAtendimento.jsx";
import { IconeSeguranca } from "./assets/IconeSeguranca.jsx";
import { IconeCliente } from "./assets/IconeCliente.jsx";
import { IconeRelacionamento } from "./assets/IconeRelacionamento.jsx";
import { IconeProjetos } from "./assets/IconeProjetos.jsx";
import { IconeCheckout } from "./assets/IconeCheckout.jsx";

import { CardCliente } from "./CardCliente.jsx";
import { CardFreela } from "./CardFreela.jsx";
import { Chip } from "./Chip.jsx";

const habilidades = [
    "Design",
    "Branding",
    "Ilustração",
    "Marketing",
    "Identidade Visual",
    "SEO",
    "Redação",
    "Transcrição",
    "Revisão",
    "Tradução",
    "E-Books",
    "ABNT",
    "Programação",
    "API",
    "Desenvolvimento de Aplicativo",
    "Desenvolvimento de Websites",
]

const PaginaInicial = () => {
    return (
        <>
            <Banner />
            <Container>
                <Row justify="center">
                    <Tipografia variante="h2" componente="h2">
                        Vantagens para contratantes
                    </Tipografia>
                </Row>
                <Row justify="center">
                    <CardCliente icone={<IconeCertificado />} texto="Profissionais qualificados" />
                    <CardCliente icone={<IconeConexoes />} texto="Múltiplas especialidades" />
                    <CardCliente icone={<IconeAtendimento />} texto="Atendimento e agilidade" />
                    <CardCliente icone={<IconeSeguranca />} texto="Simplicidade e Segurança" />
                </Row>
                <Row justify="center">
                    <Tipografia variante="h2" componente="h2">
                        Vantagens para freelas
                    </Tipografia>
                </Row>
                <Row justify="center">
                    <CardFreela icone={<IconeCliente />} texto="Clientes verificados" />
                    <CardFreela icone={<IconeRelacionamento />} texto="Atendimento e agilidade" />
                    <CardFreela icone={<IconeProjetos />} texto="Projetos interessantes" />
                    <CardFreela icone={<IconeCheckout />} texto="Remuneração supervisionada" />
                </Row>
                <Row justify="center">
                    <Tipografia variante="h2" componente="h2">
                        Quais habilidades você encontra por aqui?
                    </Tipografia>
                </Row>
                <Row justify="center" style={{ marginBottom: "2em" }}>
                    {habilidades.map((habilidade) => (
                        <Chip key={habilidade}>{habilidade}</Chip>
                    ))}
                </Row>
            </Container >
        </>
    )
}

export default PaginaInicial;