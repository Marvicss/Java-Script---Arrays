

function verificarForma(largura,altura){

    if(largura === altura){
        return "Quadrado";
    }
    if (largura != altura) {
        return "Retangulo"
    } else {
        return console.error("Valores Invalidos")
    }

}


/* function calcularArea(largura,altura){

   
        const area = largura * altura;
        console.log(`a area do ${verificarForma(largura,altura)} eh ${area} `);
    
} */


verificarForma("texto",10)

