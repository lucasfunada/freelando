import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";

function App() {
    return (
        <ProvedorTema>
            <Estilos />
            <SessaoUsuarioProvider>
                <RouterProvider router={router} />
            </SessaoUsuarioProvider>
        </ProvedorTema>
    );
}

export default App

