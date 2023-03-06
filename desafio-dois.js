
function realizarCalculo(valor1,valor2,operacao){

if(operacao === "adição"){
    return valor1+valor2;
}
if(operacao === "multiplicação"){
    return valor1 * valor2;
}
if(operacao === "subtração"){
    return valor1-valor2;
}
if(operacao === "divisão"){
    return valor1/valor2;
}else{
    return "operação invalida"
}

}

console.log(`O resultado da operação é : ${realizarCalculo(10,20,"adição")}`)
console.log(`O resultado da operação é : ${realizarCalculo(10,20,"subtração")}`)
console.log(`O resultado da operação é : ${realizarCalculo(10,20,"divisão")}`)
console.log(`O resultado da operação é : ${realizarCalculo(10,20,"multiplicação")}`)
console.log(`O resultado da operação é : ${realizarCalculo(10,20,"teste")}`)