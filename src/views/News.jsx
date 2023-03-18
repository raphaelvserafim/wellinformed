import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import ReviewCard from "./ReviewCard";
import { collection, doc, setDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";


import CardLoading from "./cardLoading";


function News(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        setTimeout(async () => {
            const dataNews = [];
            const q = query(collection(db, "News"), where("main", "==", true));
            const news = await getDocs(q);
            news.forEach((doc) => {
                dataNews.push({ id: doc.id, data: doc.data() });
            });
            setNewsItems(dataNews);
            setIsLoading(false);
        }, 2000);

    }, [newsItems]);


    return (
        <Box sx={{ mb: 2 }}>
            <div style={{ height: '20px' }} />
            {isLoading ? (
                <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </>
            ) : (
                newsItems.map((item, index) => (
                    <ReviewCard key={index} news={item} />
                ))
            )}
        </Box>
    );

}

export default News;
