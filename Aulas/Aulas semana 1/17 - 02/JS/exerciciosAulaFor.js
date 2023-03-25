//For

// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
for(let mult=1; mult<=10 ; mult++){
    console.log("5 x "+ mult +" = " + 5*mult);
}

console.log("-------------------------------------")

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do For)
for(i = 1; i <= 99; i++){
    if(i % 2 === 1){
        console.log(`Ímpar ${i}`)
    }
}

console.log("--------------------------------------")

// Exercícios III: Conte de 50 até 75
for(n = 50; n <= 75; n++){
    console.log(n);
}
