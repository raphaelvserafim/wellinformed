import React, { useEffect } from 'react';
import News from './News';

export default function Home() {
    useEffect(() => {
        document.title = "Título da página";
    }, []);

    return (<News category="teste" />)

}