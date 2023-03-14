import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { analytics } from "./firebase";

import Routes from './routes';

import { lightTheme, darkTheme } from './Theme';

import Header from "./views/Header";


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ToastContainer />
      < Header />
      <Container maxWidth="sm" sx={{ paddingTop: "60px" }}>
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;