import styled from "@emotion/styled"
import { Container, Row } from "react-grid-system"

const DivEstilizada = styled.div`
    background-color: ${props => props.theme.cores.secundarias.c};
    border-radius: 16px;
    color: ${props => props.theme.cores.primarias.c};
    text-align: center;
    padding: 1em;
    margin: 0 0.5em 2em 0.5em;
    font-size: 24px;
    width: 23em;
`
const IconeEstilizado = styled.span`
    margin-left: 15%;
`

const TextoEstilizado = styled.span`
    margin-left: 3%;
`

export const CardFreela = ({ icone, texto }) => {
    return (
        <DivEstilizada>
            <Container>
                <Row align="center">
                    <IconeEstilizado>{icone}</IconeEstilizado>
                    <TextoEstilizado>{texto}</TextoEstilizado>
                </Row>
            </Container>
        </DivEstilizada>
    )
}