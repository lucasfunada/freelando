import GrupoRadio from "../../componentes/Radio/GrupoRadio.jsx";
import { Tipografia } from "../../componentes/Tipografia/Tipografia.jsx";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao.jsx";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario.jsx";
import { useEffect } from "react";


const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

const Interesses = () => {

    const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext();

    const navegar = useNavigate();

    useEffect(() => {
        if (!possoSelecionarInteresse) {
            navegar("/cadastro");
        }
    }, [navegar, possoSelecionarInteresse])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="h3" componente="h2">
                    Qual a área de interesse?
                </Tipografia>
            </div>
            <GrupoRadio
                opcoes={opcoes}
                valor={usuario.interesse}
                onChange={setInteresse}
            />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <RouterLink to="/cadastro">
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </RouterLink>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <RouterLink to="/cadastro/dados-pessoais">
                            <Botao>
                                Próximo
                            </Botao>
                        </RouterLink>
                    </div>
                </Col>
            </Row>
        </>

    );
}

export default Interesses;