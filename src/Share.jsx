import React from 'react';

function ShareButton() {
    const { title, url } = React.useMemo(() => {
        return {
            title: document.title,
            url: window.location.href,
        };
    }, []);

    function shareOnSocialMedia() {
        if (navigator.share) { // Verifica se o navegador suporta a API de compartilhamento
            navigator.share({
                title: title,
                url: url
            })
                .then(() => console.log('Compartilhado com sucesso!'))
                .catch((error) => console.log('Erro ao compartilhar:', error));
        }
    }

    return (
        <button onClick={shareOnSocialMedia}></button>
    );
}

export default ShareButton;

