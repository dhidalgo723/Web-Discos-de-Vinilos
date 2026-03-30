document.addEventListener('DOMContentLoaded', () => {
    const trackCards = document.querySelectorAll('.track-card');
    
    trackCards.forEach(card => {
        const trackName = card.querySelector('.track-name');
        
        if (trackName) {
            const name = trackName.textContent.trim();
            
            card.addEventListener('click', () => {
                if (name === 'YHLQMDLG') {
                    window.location.href = 'producto.html';
                } else {
                    window.location.href = 'producto.html';
                }
            });
            
            card.style.cursor = 'pointer';
        }
    });
});