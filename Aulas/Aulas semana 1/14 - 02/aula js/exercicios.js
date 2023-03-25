//Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

let peso = 69;
let altura = 1.60;
let imc = peso / (altura * altura);
console.log(`Meu imc é ${imc.toFixed(2)}.`);
//Resolução
//let peso = 69;
// let altura = 1.60;
// let imc = peso / altura **2;
// console.log(`Meu imc é ${imc.toFixed(2)}.`);

// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R
let raio = 25;
const pi = 3.14;
let calculoArea = pi * raio * raio;
console.log(`A área do círculo é ${calculoArea}.`);


// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R

let r = 2;
const pi2 = 3.14;
let circunferencia = 2 * pi2 * r;
console.log(`A circunferência é ${circunferencia}.`);

// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32

let temperaturaCelsius = 33;
let conversao = temperaturaCelsius * 1.8 + 32;
console.log(`A temperatura em fahrenheit é ${conversao} Fº.`);