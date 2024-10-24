import { Tipografia } from "../../componentes/Tipografia/Tipografia.jsx";
import { Botao } from "../../componentes/Botao/Botao.jsx";
import { Link as RouterLink } from "react-router-dom";
import imgErro from "./assets/erro-404.png";
import styled from "@emotion/styled";
import LayoutBase from "../LayoutBase.jsx";
import LayoutBaseCadastro from "../cadastro/LayoutBaseCadastro.jsx";


const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`


const Pagina404 = () => {

    return (
        <LayoutBase>
            <LayoutBaseCadastro>
                <div style={{ textAlign: "center" }}>
                    <Tipografia variante="h1" componente="h1">
                        Ops... Página não encontrada :(
                    </Tipografia>
                    <ImagemEstilizada src={imgErro} alt="" />
                    <Tipografia variante="body" componente="body">
                        Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
                    </Tipografia>
                    <RouterLink to="..">
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </RouterLink>
                </div>
            </LayoutBaseCadastro>
        </LayoutBase>
    );
}

export default Pagina404;