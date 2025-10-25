var contadorNumero = 0;

function contar(){
    contadorNumero++;
    var p = document.getElementById("texto");
    p.innerText = "Veces que has presionado el botón: " + contadorNumero;
}