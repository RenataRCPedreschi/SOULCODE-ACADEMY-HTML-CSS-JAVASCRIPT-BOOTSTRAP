//While


// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
let mult = 1;

while(mult<=10){
let resultado = mult *5;
console.log(`${mult} x 5 = ${resultado}`);
mult++;
}


console.log("===========================================")

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)


let n = 1;

while(n <= 99){
    if(n % 2 == 1){
console.log(`Os número ímpares são ${n}.`);
    }
n++;
}

console.log("===========================================")

// Exercícios III: Conte de 50 até 75
let num = 50;

while(num <= 75){
console.log(num);
num++;
}



