import styled from "@emotion/styled"

const DivEstilizada = styled.div`
    background-color: ${props => props.theme.cores.secundarias.b};
    border-radius: 16px;
    color: ${props => props.theme.cores.primarias.a};
    text-align: center;
    padding: 1em;
    margin: 0 0.5em 2em 0.5em;
    font-size: 24px;
    width: 10em;
`

const IconeEstilizado = styled.div`
    display: block;
    margin-bottom: 10px;
`

export const CardCliente = ({ icone, texto }) => {
    return (
        <DivEstilizada>
            <IconeEstilizado>{icone}</IconeEstilizado>
            {texto}
        </DivEstilizada>
    )
}