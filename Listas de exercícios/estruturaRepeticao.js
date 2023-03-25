//1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let numeros = 2;

while(numeros <= 10){
    numeros += 2
    console.log(numeros);
}


console.log("===============================================");


//2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).

for (let i = 0; i <=10; i++ ){
    console.log(`7 x ${i} = ${7 * i}`);
}

console.log("===============================================");


//3. Use um laço for para imprimir na tela a sequência de Fibonacci até o décimo termo.
// numero 3

let n1 = 0;
let n2 = 1;
let aux = 0;

for (let i = 0; i <= 10; i++) {
    n1 = n2
    n2 = aux
    aux = n1 + n2
    console.log(aux);
}

console.log("===============================================");

//repetição 1 = 1 - n1 = 1 / n2 = 0 / aux = 1
//repetição 2 = 1 - n1 = 0 / n2 = 1 / aux = 1
//repetição 3 = 2 - n1 = 1 / n2 = 1 / aux = 2
//repetição 4 = 3 - n1 = 1 / n2 = 2 / aux = 3
//repetição 5 = 5 - n1 = 2 / n2 = 3 / aux = 5




//4. Mostre a seguinte figura com utilização de laços:
//   *
//   **
//   ***
//   ****
//   *****

/* let num = 0;
let st1 = "*";
let st3 = "";
while (num <5) {
    st3 = st3 + st1;
    console.log("Com while:" + st3);
    num++;
} */


let str1 = "*";
let vaz = "";
for(let i = 0; i<5; i++){
    vaz += str1;
    console.log("Com for" + vaz);
}

console.log("===============================================");

//5. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).




console.log("===============================================");
//6. Mostre apenas os números ímpares de 1 até 1000.



console.log("===============================================");