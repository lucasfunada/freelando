import styled from "@emotion/styled"

const StyledSpan = styled.span`
    border-radius: 16px;
    border: 1px solid;
    font-weight: 400;
    font-size: 16px;
    background: ${props => props.theme.cores.neutras.b};
    border-color: ${props => props.theme.cores.neutras.a};
    padding: 0.8em;
    margin: 0.8em;
`

export const Chip = ({children}) => {
    return (<StyledSpan>
        {children}
    </StyledSpan>)
}

