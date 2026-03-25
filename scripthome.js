document.addEventListener('DOMContentLoaded', () => {
    const trackCards = document.querySelectorAll('.track-card');
    
    trackCards.forEach(card => {
        const trackName = card.querySelector('.track-name');
        
        if (trackName) {
            const name = trackName.textContent.trim();
            
            card.addEventListener('click', () => {
                if (name === 'FAVORITOS') {
                    window.location.href = 'favs.html';
                } else if (name === 'RAP'){
                    window.location.href = 'rap.html';
                } else if (name === 'REGGAETON') {
                    window.location.href = 'reggaeton.html';
                } else if (name === 'ALBUMES RAP'){
                    window.location.href = 'producto.html';
                } else if (name === 'ALBUMES RGTN'){
                    window.location.href = 'producto.html';
                }
            });
            
            card.style.cursor = 'pointer';
        }
    });
});