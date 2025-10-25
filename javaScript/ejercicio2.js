function cambiarColor(){
    const elementos= document.getElementsByClassName('nota');
        for(var i=0;i<elementos.length;i++){
        elementos[i].style.color="red";
    }
}