function ocultar(){
    var boton = document.querySelector('#btn');
    var imagen = document.querySelector('#pepsiLata');
    if (boton.value == 'Ocultar') {
        imagen.style.display = 'none';
        boton.value = 'Mostrar';
    } else {
        imagen.style.display = 'block';
        boton.value = 'Ocultar';
    }
}