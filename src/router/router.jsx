import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente.jsx";
import Interesses from "../paginas/cadastro/Interesses.jsx";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro.jsx";
import LayoutBase from "../paginas/LayoutBase.jsx";
import DadosPessoais from "../paginas/cadastro/DadosPessoais.jsx";
import Concluido from "../paginas/cadastro/Concluido.jsx";
import PaginaInicial from "../paginas/inicial/PaginaInicial.jsx";
import Pagina404 from "../paginas/erro/Pagina404.jsx"
import Login from "../paginas/login/Login.jsx";
import Perfil from "../paginas/areaLogada/Perfil.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: "",
                element: <PaginaInicial />,
            },
            {
                path: "cadastro",
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: "",
                        element: <SelecaoCliente />,
                    },
                    {
                        path: "interesses",
                        element: <Interesses />,
                    },
                    {
                        path: "dados-pessoais",
                        element: <DadosPessoais />,
                    },
                    {
                        path: "concluido",
                        element: <Concluido />,
                    }
                ]
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "area-logada",
                children: [
                    {
                        path: "perfil",
                        element: <Perfil />,
                    },
                ]
            },
        ],
    },
]);