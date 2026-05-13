// guarda el id para usarlo en favoritos
let productoActualId = null;

async function readJson() {
    try {
        const response = await fetch('productos.json');
        const data = await response.json();

        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));

        // busca el producto y si no existe, usa el primero
        const producto = data.productos.find(p => p.id === id) || data.productos[0];
        productoActualId = producto.id;

        showProducto(producto);
    }
    catch (error) {
        console.error("Error carregant el json:", error);
    }
}

function showProducto(producto) {
    document.title = producto.title;

    // el $ es para concatenar el valor del string
    // y el .join tambien es para concatenarlo
    const trackNumber = document.querySelector('.track-card .track-number');
    if (trackNumber) trackNumber.textContent = producto.title.toUpperCase();

    const trackInfoTop = document.querySelector('.track-card .track-info');
    if (trackInfoTop) trackInfoTop.textContent = producto.categoria.join(', ').toUpperCase();

    if (producto.imagen) {
        const overlay = document.querySelector('.track-card .play-overlay');
        if (overlay) overlay.style.backgroundImage = `url('${producto.imagen}')`;

        const fondo = document.querySelector('.product-card').parentElement;
        if (fondo) fondo.style.backgroundImage = `url('${producto.imagen}')`;
    }

    const paragraf = document.querySelector('.paragraf-text');
    if (paragraf) {
        paragraf.innerHTML = `
            <p class="track-info">
                <strong>${producto.title}</strong> de ${producto.artist}.<br>
                Album de la categoria ${producto.categoria.join(', ')} con ${producto.tracks} canciones.
            </p>
            <p class="track-info">
                Fecha de lanzamiento: ${producto.date} <br>
                Numero de canciones: ${producto.tracks} <br>
                Duracion del album: ${producto.duration} <br>
                <strong>Precio: ${producto.price}</strong>
            </p>
            <div align="center">
                <button class="hero-button">COMPRAR AHORA</button>
                <button class="hero-button" onclick="addToFavorites()">AÑADIR A FAVORITOS</button>
            </div>
        `;
    }
}

readJson();

function addToFavorites() {
    if (!productoActualId) return;

    // Leo los favoritos guardados (array de ids) y añado el actual si no esta
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.includes(productoActualId)) {
        alert('Este album ya esta en favoritos');
    } else {
        favoritos.push(productoActualId);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Añadido a favoritos');
    }
}
