import { React, useState } from "react";
import Box from '@mui/material/Box';

import ReviewCard from "./ReviewCard";

export default function News(props) {

    const [newsItems, setNewsItems] = useState([
        { title: "noticia 01", category: props.category },
        { title: "noticia 02", category: props.category },
        { title: "noticia 03", category: props.category }
    ]);

    return (
        <Box sx={{ mb: 2 }}>
            <div style={{ height: '20px' }} />
            {newsItems.map((item, index) => (
                <ReviewCard data={{ author: "Raphael" }} />
            ))}
        </Box>
    );
}