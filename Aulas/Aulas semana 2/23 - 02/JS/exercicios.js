// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).


function calculaImc(peso, altura){
   
    let imc = peso/(altura*altura);
    console.log(`O IMC é ${imc.toFixed(2)}.`);

    return imc;
}

/* let imcBatata = imc(25, 1.20);
let imcArroz = imc(35, 1.25); */


// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem(num){
    let p = num * 100; 
    return `${p.toFixed(1)}%`;
}

/* let valorFormatado = porcentagem(0.555);
console.log(valorFormatado); */



// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function isNegative(numero){
    if(numero < 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isNegative(30));


// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function valor(n){
    
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(n);
}

let valorMonetario = valor(10);
// console.log(valorMonetario); 


// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.


function contar(maximo){
for(let i= 0; i <= maximo; i++){
console.log(i);
}
}

contar(10);



// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

function nomeCompleto(nome, sobrenome){
return `${nome} ${sobrenome}`;
}

// console.log(nomeCompleto("Renata", "Rabelo"));
// let seuNomeCompleto = nomeCompleto("Ana", "Santos");




// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

function areaCirculo(raio){
    return Math.PI * (raio * raio)
}



// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(1)))