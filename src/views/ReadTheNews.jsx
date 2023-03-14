import React from 'react';


function ReadTheNews(props) {
    React.useEffect(() => {
        document.title = "News";
        const metaTags = [
            { name: "description", content: "Leia as últimas notícias sobre diversos assuntos" },
            { name: "keywords", content: "notícias, atualizações, novidades" },
            { name: "author", content: "Seu nome ou nome da empresa" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0" },
            { property: "og:title", content: "News" },
            { property: "og:description", content: "Leia as últimas notícias sobre diversos assuntos" },
            { property: "og:image", content: "https://example.com/news.jpg" },
            { property: "og:url", content: "https://example.com/news" },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "News" },
            { name: "twitter:description", content: "Leia as últimas notícias sobre diversos assuntos" },
            { name: "twitter:image", content: "https://example.com/news.jpg" },
        ];

        metaTags.forEach(tag => {
            const meta = document.createElement('meta');
            Object.keys(tag).forEach(key => {
                meta.setAttribute(key, tag[key]);
            });
            document.head.appendChild(meta);
        });

    }, []);

    const { newsId } = props;
    return `News ${newsId}`
}



export default ReadTheNews