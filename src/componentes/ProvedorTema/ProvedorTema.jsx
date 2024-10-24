import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#B009FF', //roxo
        primarias: {
            a: '#5754ED', //azul
            b: '#D93114', //vermelho
            c: '#168070'  //verde
        },
        secundarias: {
            a: '#F8F8FD', //cinza quase branco
            b: '#EBEAF9', 
            c: '#EBFCF9'  //verde claro
            
        },
        neutras: {
            a: '#373737', //cinza escuro
            b: '#F5F5F5', //cinza bem claro
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: '#B61B00' //vermelhor
        }
    },
    espacamentos: {
       xs: '8px',
       s : '16px',
       l : '32px',
       xl: '48px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}