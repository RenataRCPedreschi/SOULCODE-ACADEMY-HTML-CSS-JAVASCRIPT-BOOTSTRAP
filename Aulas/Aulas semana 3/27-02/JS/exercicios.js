// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

function exercicio1() {
  let numeros = [25, 30, 60, 47, 79, 30, 14, 16, 27, 32];
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
  }
  console.log(soma);
}

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.
function exercicio2() {
  let notas = [10.0, 8.5, 9.3, 6.0, 5.8];
  let total = 0;

  for (let i = 0; i < notas.length; i++) {
    total += notas[i] / 5;
  }
  console.log(total.toFixed(2));
}

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

function exercicio3() {
  let nums = [12, 45, 85, 96, 75, 65, 66];
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  console.log(`O número maior é ${max} e o menor é ${min}`);
}

/* let numeros1 = [5, 12, 16, 33, 8, 10, 6];
let maiorNumero = numeros1[0];
for (let i = 0; i < numeros1.length; i++) {
    if( numeros1[i] > maiorNumero){
        maiorNumero = numeros1[i];
    }
    
}
console.log(`O maior número do Array é: ${maiorNumero}`); */

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.
function exercicio4() {
  let frutas = ["maçã", "pera", "banana", "abacaxi"];
  for (let fruta of frutas) {
    console.log(`${fruta} tem ${fruta.length}`);
  }
}

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

/* let numerosAleatórios = Array(5);
for (let i = 0; i < numerosAleatórios.length; i++) {
    numerosAleatórios[i] = Math.floor(Math.random() * 100);
}

let numerosPares = [];

for (let i = 0; i < numerosAleatórios.length; i++) {
    if (numerosAleatórios[i] % 2 === 0) {
        numerosPares.push(numerosAleatórios[i]);
    }
}

console.log(somaArray(numerosPares));


function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
} */
function exercicio5() {
  let numeros2 = [];
  for (let i = 0; i < 5; i++) {
    numeros2.push(Math.floor(Math.random() * 100));
  }
  console.log(numeros2);

  let pares = [];
  for (let num of numeros2) {
    if (num % 2 === 0) {
      pares.push(num);
    }
  }
  console.log(pares);

  let somaPares = 0;
  for (let par of pares) {
    somaPares += par;
  }
  console.log(somaPares);
}

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)
function exercicio7() {
  if (nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav")) {
    return true;
  } else {
    return false;
  }
}
/* console.log(verificarTipoArquivo("Linkin Park - In The End.mp3")); */

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

/* const extrairDigitosVerificadores = (cpf) => {
    const digitosVerificadores = cpf.slice(-2);
    return digitosVerificadores;
  };
  
  console.log(extrairDigitosVerificadores("056.985.990-23")); */

const extrairDigitosVerificadores = (cpf) => {
  return cpf[12] + cpf[13];
};
/* console.log(extrairDigitosVerificadores("056.985.990-23")); */

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB  REVERSE STRING

function inverterString(string) {
    var stringInvertida = '';
//do último índice até o 0
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
  }
  
  console.log(inverterString('BATATA'));


// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

const inverteArray = (array) => {
   
    array.reverse();
    console.log("A ordem invertida é: " + array);
    return array;
}
inverteArray([1,2,3,4]);