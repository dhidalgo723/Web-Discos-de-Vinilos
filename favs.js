async function readJson() {
    try {
        const response = await fetch('productos.json');
        const data = await response.json();

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const text = document.querySelector('.tracks-grid-favs');
        if (!text) return;

        text.innerHTML = '';

        if (favoritos.length === 0) {
            text.innerHTML = '<p class="track-info">No tienes albumes en favoritos.</p>';
            return;
        }

        favoritos.forEach(id => {
            // busca el producto y si no existe, usa el primero
            const producto = data.productos.find(p => p.id === id);
            if (!producto) return;

            const card = document.createElement('div');
            card.className = 'track-card-favs';
            card.innerHTML = `
                <h3 class="track-name">${producto.title}</h3>
                <p class="track-info">${producto.categoria.join(', ')}</p>
            `;
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                let url = `producto.html?id=${producto.id}`;
                window.location.href = url;
            });
            text.appendChild(card);
        });
    }
    catch (error) {
        console.error("Error carregant el json:", error);
    }
}

document.addEventListener('DOMContentLoaded', readJson);
