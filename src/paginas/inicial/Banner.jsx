import { Col, Container, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import imgBanner from "./assets/banner.png"
import styled from '@emotion/styled'
import { Link as RouterLink } from "react-router-dom";

const FigureEstilizada = styled.figure`
    margin: 0; /* Ensure no margins around the figure */
    padding: ${props => props.theme.espacamentos.l}; /* Internal padding */
    color: ${props => props.theme.cores.primarias.b};
    background-color: ${props => props.theme.cores.neutras.b};
    width: 100vw; /* Full viewport width */
    position: relative; /* Positioning to expand across the screen */
    left: 50%; /* Adjust for viewport alignment */
    right: 50%;
    margin-left: -50vw; /* Reset margin from the center */
    margin-right: -50vw;
    margin-bottom: 2em;
`

const ImgEstilizada = styled.img`
    max-width: 100%;
`

const Banner = () => {
    return (
        <FigureEstilizada>
            <Container>
                <Row align="center">
                    <Col md={5} sm={12}>
                        <Tipografia variante="h1" componente="h1">
                            Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
                        </Tipografia>
                        <RouterLink to="cadastro">
                            <Botao>Quero me cadastrar!</Botao>
                        </RouterLink>
                    </Col>
                    <Col md={7} sm={12}>
                        <ImgEstilizada src={imgBanner} alt="" />
                    </Col>
                </Row>
            </Container>
        </FigureEstilizada>
    );
}

export default Banner;