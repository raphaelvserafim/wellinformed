const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = `
            {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "Título da notícia",
                "datePublished": "2023-03-14",
                "dateModified": "2023-03-14",
                "description": "Descrição da notícia",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://example.com/news"
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://example.com/news.jpg",
                    "height": 800,
                    "width": 1200
                },
                "author": {
                    "@type": "Person",
                    "name": "Nome do autor"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Nome da empresa",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://example.com/logo.png",
                        "width": 600,
                        "height": 60
                    }
                }
            }
        `;

document.head.appendChild(script);