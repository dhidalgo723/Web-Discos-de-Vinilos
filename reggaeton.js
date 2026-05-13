function masmejor(texto) {
    return texto.trim().toUpperCase()
        // esto lo q hace es q si hay alguna cosa rara en el JSON lo cambia, por ejemplo si hayb acentos o cosas en mayuscula 
        // lo vuelve todo a minuscula y sin acentos
        .replace(/Á/g, 'A').replace(/É/g, 'E').replace(/Í/g, 'I')
        .replace(/Ó/g, 'O').replace(/Ú/g, 'U');
}

async function readJson() {
    try {
        const response = await fetch('productos.json');
        const data = await response.json();

        const trackCards = document.querySelectorAll('.track-card');

        trackCards.forEach(card => {
            const trackName = card.querySelector('.track-name');
            if (!trackName) return;

            const nombre = masmejor(trackName.textContent);
            const producto = data.productos.find(p => masmejor(p.title) === nombre);

            if (producto) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    let url = 'producto.html?id=' + producto.id;
                    window.location.href = url;
                });
            }
        });
    }
    catch (error) {
        console.error("Error carregant el json:", error);
    }
}

document.addEventListener('DOMContentLoaded', readJson);
