// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
// let idade = 18;
// let dinheiro = 100;


// if (idade >= 18 && dinheiro >= 20){
//     console.log("Pode comprar bebida.");
//     dinheiro = dinheiro - 20;//dinheiro -=20;
//     console.log(`Você ficou com ${dinheiro} reais.`)
// }else{
//     console.log("Não pode comprar bebida.")
// }


// console.log("------------------------------------------------------------------")


// // Exercício II: Defina uma variável salário, caso o salário
// // Seja menor que 500 = acrescentar 50 reais ao salario atual
// // Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// // Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// // Mostre ao fim o salário ajustado.

// let salario = 200;

// if(salario < 500){
//     salario += 50;
//     //console.log(`Seu salário ficou em ${salario} reais.`)
// }
// else if (salario >=500 && salario <=1000){
//     salario += 25;
//     //console.log(`Seu salário ficou em ${salario} reais.`)
// } else{
//     console.log(`Não houve aumento de salário.`)
// }
// console.log(`Seu salário é de ${salario} reais.`)



// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.


let comida = "sopa";

if(comida === "batata"||comida === "carne"|| comida ==="chocolate"){
console.log("Humm, adoro!");
}else if(comida === "pizza"||comida === "sanduíche"){
    console.log("Às vezes...");
}else{
    console.log("Quero não!");
}


//Switch case

switch(comida){
    case "batata":
    case "carne":
    case "chocolate":
        console.log("Humm, adoro!");
        break;
    case "pizza":
    case "sanduíche":
        console.log("Às vezes!");
        break;
    default:
        console.log("Quero não!");
}


// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let numero = 150;

if(numero === 0){
    console.log("O número é zero.")
}else if(numero % 2 === 0){
    console.log("Esse número é par.")
}else{
    console.log("O número é impar.")
}
