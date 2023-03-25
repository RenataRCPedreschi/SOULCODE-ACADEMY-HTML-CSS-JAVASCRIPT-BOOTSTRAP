//Estruturas condicionais
/* 1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba qual destes números é o maior. */
let a = 25; 
let b = 45;
let c = 59;

if (a>b && a>c){
    console.log("o a é maior.");
}else if (b>a && b>c){
console.log("O b é maior.");
}else if(c>a && c>b){
    console.log("O c é maior.");
}

console.log("===============================================");

/* 2. Crie três variáveis que representam os três lados de um triângulo. Aplica a seguinte regra para definir se o triângulo é possível: Se a soma de dois lados é maior que o terceiro lado. */
let ladoA = 50;
let ladoB = 80;
let ladoC = 50;


if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA){
    console.log("Não é possível.");
}else{
    console.log("É possível.");
}

console.log("===============================================");

/* 3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso. */

let idade = -35;


if(idade > 130 || idade < 0){
    console.log("Essa idade é inválida.");
}else{
    console.log("Essa idade é válida.");
}


console.log("===============================================");

/* 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.*/

let salario = 1500;
let quantidadeDependentes = 7;

if(quantidadeDependentes === 0){
    console.log(`Não houve reajuste no seu salário. Ele permanece R$ ${salario.toFixed(2)}`);
}else if(quantidadeDependentes >=1 && quantidadeDependentes <=5){
    salario = salario * 1.3
    console.log(`Seu salário teve um reajuste de 30% e ficou R$ ${salario.toFixed(2)}`);
}else if(quantidadeDependentes > 5){
    salario = salario * 1.4
    console.log(`Seu salário teve um reajuste de 40% e ficou R$ ${salario.toFixed(2)}`);
}


console.log("===============================================");

/* 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana ou dia de útil. */

let diaSemana = 7;

if(diaSemana >= 2 && diaSemana <=6){
console.log("Hoje é dia útil.");
}else if(diaSemana === 1 || diaSemana ===7){
    console.log("Hoje é final de semana.");
}else{
    console.log("Este dia é inválido.");
}


console.log("===============================================");

/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: Caso 1) É um número divisível por 4, mas não é divisível por 100. Caso 2) É um número divisível por 4, por 100 e por 400. */

let ano = 2024;

if(ano %4 == 0 && ano %100 != 0){
console.log(`O ano ${ano} é bissexto.`);
}else if(ano %4 == 0 && ano %100 == 0 && ano %400 == 0){
    console.log(`O ano ${ano} é bissexto.`);
}else{
    console.log(`O ano ${ano} não é bissexto.`);
}


console.log("===============================================");