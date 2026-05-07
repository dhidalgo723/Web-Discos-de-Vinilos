let data 

// Cargo el json
async function readJson() {
    try {
        const response = await fetch('productos.json');
        data = await response.json();
        console.log(data);
        data.productos.forEach(producto => {
            let query = document.querySelector('.track-number');
            if (producto.id == 2) {
                query.textContent = producto.title;
            } else if (producto.id == 3) {
                query = document.querySelector('.track-info');
                query.innerHTML = '<p>' + producto.date + ' - ' + producto.duration + '</p>';
            }
            console.log(producto.title);
        });
    }
    catch (error) {
        console.error("Error carregant el json:", error);
    }
}

readJson();


function addToFavorites() {
    alert('Añadido a favoritos')
    
}

