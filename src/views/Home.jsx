import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "./Header";



export default function Home() {
    useEffect(() => {
        document.title = "Título da página";
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            < Header />
            <Container maxWidth="sm">
                <Box sx={{ height: '100vh' }} />
            </Container>
        </React.Fragment>
    )

}