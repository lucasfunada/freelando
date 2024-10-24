import { createContext } from "react";

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: () => null,
    logout: () => null,
    perfil: {}
})

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = () => {
    const value = {};
    return (
    <SessaoUsuarioContext.Provider value={value}>
        {children}
    </SessaoUsuarioContext.Provider>
    )
}