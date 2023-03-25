// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 3;
let nota2= 7;
let nota3 = 5;
let media = (nota1 + nota2 + nota3)/3;

if(media >=7){
    console.log("Você foi aprovado!")
}else if (media >=5 && media < 7){
    console.log("Você está de reforço.")
}else{
    console.log("Você foi reprovado!")
}



console.log("=====================================================================")


// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 95;
let altura = 1.69;
let imc = peso / (altura *altura);

console.log(imc.toFixed(2))

if(imc < 18.5) {
  console.log("Abaixo do peso.");
}
else if (imc >=18.5 && imc < 25) {
  console.log("Peso normal.");
}
else if (imc >=25 && imc < 30) {
  console.log("Sobrepeso.");
}
else if (imc >= 30 && imc < 35) {
  console.log("Obesidade grau 1.");
}
else if (imc >= 35 && imc < 40) {
  console.log("Obesidade grau 2.");
}
else{
  console.log("Obesidade grau 3 / Obesidade mórbida.");
}




console.log("=====================================================================")

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 40;
let b = 37;

if (a > b) {
    console.log("O a é maior do que b.");
  } else if (a < b) {
    console.log("O b é maior do que a.");
  } else {
    console.log("O a e b são iguais.");
  }