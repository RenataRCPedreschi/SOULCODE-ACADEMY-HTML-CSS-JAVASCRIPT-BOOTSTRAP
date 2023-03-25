//Variáveis e operadores

/* 1 - Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é:
C = F − 32 / 1.8 */

let fahrenheit = 65;

let celsius =  (fahrenheit - 32)/1.8;

console.log(`A temperatura ficou ${celsius.toFixed(1)} ºC`);

console.log("===============================================");

/* 2 - Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada nomeCompleto e realize a concatenação de nome e sobrenome com template strings. */

let nome = "Renata";
let sobrenome = "Rabelo";

let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

console.log("===============================================");

/* 3 - Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.
 */

let n1 = 3;
let n2 = 2;
let n3 = 1;
let n4 = 4;
let n5 = 5;
let mediaNotas = (n1, n2, n3, n4, n5)/5;

console.log(`A média das notas é: ${mediaNotas}`);

console.log("===============================================");

/* 4 - Crie duas variáveis que representam as dimensões (em km) de um terreno: comprimento e largura. Calcule a área deste terreno, em seguida converta para hectares. Nota: 1 km2 equivale a 100 hectares. */

let comprimento = 35;
let largura = 50;

let areaTerreno = comprimento * largura;

let converterKmparaHectare = areaTerreno*100;


console.log(`O terreno tem ${areaTerreno} Km, que seria ${converterKmparaHectare} em Hectare.`);

console.log("===============================================");

/* 5 - Crie uma variável que armazena uma temperatura em Kelvin. Converta para Celsius. A equação é: C = K − 273 */

let k = 350;
let c = k - 273;

console.log(`A temperatura está em ${c}ºC.`);


console.log("===============================================");