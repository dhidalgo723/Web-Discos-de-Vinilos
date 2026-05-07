async function readJson(params) {
    try {
        const response = await fetch('productos.json');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error carregant el json:", error);
    }
}

function addToFavorites() {
    // Implementation for adding to favs
    alert('Añadido a favoritos')
    
}

