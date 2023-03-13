import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "./Header";

import News from './News';

export default function Home() {
    useEffect(() => {
        document.title = "Título da página";
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            < Header />
            <Container maxWidth="sm" sx={{ paddingTop: "45px" }}>
                <Box   >
                    <News category="teste" />
                </Box>
            </Container>
        </React.Fragment>
    )

}