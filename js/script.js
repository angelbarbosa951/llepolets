// Mostrar y ocultar el menú en pantallas pequeñas
function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('active');
}

// Mostrar lista seleccionada
function mostrarLista(listaId) {
    // Ocultar todas las listas
    const listas = document.querySelectorAll('.lista');
    listas.forEach(lista => {
        lista.style.display = 'none';
    });

    // Mostrar la lista seleccionada
    const listaSeleccionada = document.getElementById(listaId);
    if (listaSeleccionada) {
        listaSeleccionada.style.display = 'block';
    }
}
