import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const styles = {
    goback: {
        position: 'fixed',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        left: '10px',
        top: '10px'
    },
    iconPerfil: {
        float: 'right',
        right: '10px',
        position: 'fixed',
        padding: '10px',
        top: '10px',
    }
}

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#941208',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFC107',
            contrastText: '#fff',
        },
        error: {
            main: '#F44336',
            contrastText: '#fff',
        },
        text: {
            primary: '#333',
            secondary: '#555',
        },
        background: {
            default: '#e1e1e1',
            paper: '#F4F4F4',
        },
    },
});



const darkTheme = createTheme({
    palette: {
        type: 'dark', // define o modo dark
        primary: {
            main: '#64B5F6', // um azul claro para indicar crescimento financeiro
        },
        secondary: {
            main: '#FFA726', // um laranja claro para indicar o tempo
        },
        error: {
            main: '#EF5350', // um vermelho claro para indicar erro ou aviso
        },
        background: {
            default: '#212121', // um cinza escuro para fundo
            paper: '#424242', // um cinza mais claro para painéis e fundo de conteúdo
        },
    },
});



export { lightTheme, darkTheme, styles }