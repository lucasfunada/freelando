import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import LayoutBaseCadastro from "../cadastro/LayoutBaseCadastro"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Botao } from "../../componentes/Botao/Botao";
import { useState } from "react";
import iconeLogin from "./assets/iconeLogin.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "../../componentes/Link/Link";
import { useSessaoUsuarioContext } from "../../contexto/SessaoUsuario";


const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { login } = useSessaoUsuarioContext()

    const tentarEfetuarLogin = async (event) => {
        event.preventDefault();
        login(email, senha);
    }

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "5em" }}>
                <img src={iconeLogin} alt="" />
            </div>
            <LayoutBaseCadastro>
                <div style={{ textAlign: "center" }}>
                    <Tipografia variante="h1" componente="h1">
                        Efetuar Login
                    </Tipografia>
                </div>
                <form onSubmit={tentarEfetuarLogin}>
                    <CampoTexto
                        titulo="E-mail"
                        valor={email}
                        onChange={setEmail}
                    />
                    <CampoTexto
                        titulo="Senha"
                        valor={senha}
                        onChange={setSenha}
                    />
                    <div style={{ textAlign: 'right' }}>
                        <RouterLink to="">
                            <Tipografia componente="legenda" variante="legenda">
                                Esqueceu sua senha?
                            </Tipografia>
                        </RouterLink>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Botao>
                            Login
                        </Botao>
                    </div>
                </form>
                <div style={{ textAlign: 'center' }}>
                    <Tipografia componente="legenda" variante="legenda">
                        Ainda não criou sua conta no Freelando?
                    </Tipografia>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link>
                        <RouterLink to="/cadastro">
                            Cadastre-se clicando aqui!
                        </RouterLink>
                    </Link>
                </div>
            </LayoutBaseCadastro>
        </>

    )
}

export default Login;