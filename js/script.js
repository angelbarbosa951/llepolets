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
