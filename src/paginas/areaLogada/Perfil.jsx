import styled from "@emotion/styled";
import background from "./assets/perfil-bg.png";
import { Col, Container, Row } from "react-grid-system";
import avatar from "./assets/avatar.png";
import { Tipografia } from "../../componentes/Tipografia/Tipografia.jsx";
import { Card } from "../../componentes/Card/Card";
import { Form } from "react-router-dom";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Botao } from "../../componentes/Botao/Botao";
import { useEffect } from "react";
import http from "../../http/index.js";
import { ArmazenadorToken } from "../../utils/ArmazenadorToken";

const ImagemFundo = styled.div`
    background: url(${background}) no-repeat;
    line-height: 246px;
    background-position: center;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 1em;
`

const ImgEstilizada = styled.img`
    height: 176px;
    margin-bottom: 2em;
`

const Banner = () => {
    return (
        <ImagemFundo>
            Meu Perfil
        </ImagemFundo>
    )
}


const Perfil = () => {

    useEffect(() => {
        
        http.get("profile")
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.error(erro))
    }, [])

    return (
        <>
            <Banner />
            <Container>
                <Row>
                    <Col md={5}>
                        <div style={{ textAlign: "center", marginBottom: "10em", marginTop: "2em" }}>
                            <Card>
                                <Tipografia variante="h2" componente="h2">
                                    Placeholder nome
                                </Tipografia>
                                <ImgEstilizada src={avatar} alt="avatar" />
                            </Card>
                        </div>
                    </Col>
                    <Col md={7}>
                        <Tipografia variante="h2" componente="h2">
                            Revise seus dados
                        </Tipografia>
                        <Form>
                            <CampoTexto
                                titulo="Nome"
                            />
                            <CampoTexto
                                titulo="Sobrenome"
                            />
                            <Row>
                                <Col md={6}>
                                    <CampoTexto
                                        titulo="Celular"
                                    />
                                </Col>
                                <Col md={6}>
                                    <CampoTexto
                                        titulo="Email"
                                    />
                                </Col>
                                <Col md={6}>
                                    <CampoTexto
                                        titulo="Código Postal"
                                    />
                                </Col>
                                <Col md={6}>
                                    <CampoTexto
                                        titulo="País"
                                    />
                                </Col>
                                <Col md={6}>
                                    <Botao>
                                        Salvar
                                    </Botao>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Perfil;