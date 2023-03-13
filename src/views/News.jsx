import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import ReviewCard from "./ReviewCard";
import { collection, doc, setDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";


function News(props) {

    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const dataNews = [];
            const q = query(collection(db, "News"), where("main", "==", true));
            const news = await getDocs(q);
            news.forEach((doc) => {
                dataNews.push({ id: doc.id, data: doc.data() });
            });
            setNewsItems(dataNews);
        }
        fetchNews();
    }, []);

    return (
        <Box sx={{ mb: 2 }}>
            <div style={{ height: '20px' }} />
            {newsItems.map((item, index) => (
                <ReviewCard news={{ item }} />
            ))}
        </Box>
    );
}

export default News;
