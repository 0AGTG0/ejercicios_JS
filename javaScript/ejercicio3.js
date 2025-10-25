
function ocultar(){
    var boton = document.getElementById('btn');
    var imagen = document.getElementById('pepsiLata');
    if (boton.value == 'Ocultar') {
        imagen.style.display = 'none';
        boton.value = 'Mostrar';
    } else {
        imagen.style.display = 'block';
        boton.value = 'Ocultar';
    }
}