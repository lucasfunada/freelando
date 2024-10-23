import { Tipografia } from "../../componentes/Tipografia/Tipografia.jsx";
import { Botao } from "../../componentes/Botao/Botao.jsx";
import { Link as RouterLink } from "react-router-dom";
import imgConcluido from "./assets/cliente-concluido.png"
import styled from "@emotion/styled";


const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`


const Concluido = () => {

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="h3" componente="h2">
                    Agora é só começar a se conectar com os melhores freelancers do mercado!
                </Tipografia>
                <ImagemEstilizada src={imgConcluido} alt="" />
                <RouterLink to="..">
                    <Botao variante="secundaria">
                        Voltar para a home
                    </Botao>
                </RouterLink>
            </div>
        </>
    );
}

export default Concluido;