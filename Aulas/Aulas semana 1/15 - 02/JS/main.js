//Operadores lógicos: NOT(!), AND(&&), OR(||)
//Operador NOT(!) = Inverte o valoer lógico

let ligado = true;
let desligado = !ligado;

/*
Tabela NOT
!true = false
!false = true
*/

//Operador AND(&&) = Todas as expressões tem que ser true

let gasolinaTanque = 1;
let naReserva = gasolinaTanque < 5;
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva;
let ficaEmCasa = !podeViajar;

/*
    Tabela Verdade (E)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

//Operador OR(||) = Basta uma expressão ser true que o todo se torna true

let taPodendo = podeViajar || podeAbastecer;

/* 
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59; // de 18 até 59
//Basta idade >= 18
let podeDirigir = idade >= 18 || idade <= 59;

// console.log(podeBeber);
// console.log(podeDirigir);

let media = 7;
let sabeIngles = true;
let aprovado = media >= 7;

//O candidato será contratado caso esteja aprovado e saiba inglês

let contratado = aprovado && sabeIngles;
// console.log(aprovado || sabeIngles);

let x = 5;
let y = 10;

let expressao = x > 3 && y < 20; //true
let expressao2 = y != 20 || x >= 5; //true
let expressao3 = y == 20 || x < 10; //true
let expressao4 = !(x === 5); // false

//Estruturas condicionais (IF - ELSE)

/* if(condicao){
//faz algo se a condição for verdadeira
}
*/

let idadeUsuario = 65;

if (idadeUsuario >= 18) {
  //executa se for verdade
  console.log("Você é maior de idade!");
} else {
  //caso contrário
  console.log("Você é menor de idade.");
}

console.log("Vish!!!");

let nota = 10;

if (nota >= 7) {
  //executa se for verdade
  console.log("Você está aprovado com nota " + nota + "!");
} else {
  //caso contrário
  console.log("Você está reprovado, tente de novo.");
}

let numero = 10;

if (numero > 0) {
  console.log("O número é positivo!");
} else if (numero < 0) {
  console.log("O número é negativo!");
} else {
  //se nenhuma das condições acima for verdadeira
  console.log("O número é zero.");
}

if (idadeUsuario >= 18 && idadeUsuario <= 59) {
  console.log("Você pode beber com moderação.");
} else {
  console.log("Você não pode beber.");
}
