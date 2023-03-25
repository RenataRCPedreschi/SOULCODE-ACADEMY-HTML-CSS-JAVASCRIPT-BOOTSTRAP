//Estruturas de repetição - FOR

/*

for(inicialização; condição; atualização){
    //o código a se repetir

}
*/

//1 até 5

for(let contador = 1; contador <=5; contador++){
    console.log(contador);
}


console.log("========================================")  


//5 até 1 

for (let contador = 5; contador >= 1; contador--){
    console.log(contador);
}

console.log("========================================")


// 1 + 2 + 3 + 4 + ... + 99 + 100 = ?
let soma = 0;

for (let i = 1; i <= 100; i++) {
  // iteração ou index
  soma = soma + i;
}

console.log(soma);

