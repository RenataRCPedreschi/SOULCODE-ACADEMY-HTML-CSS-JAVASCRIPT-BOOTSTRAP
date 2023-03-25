//Soulcode Magazine

//Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);

let nomeDoProduto = "Tablet educativo";
let precoProduto = 250.5;
//let porcentagem = 25;
//let descontoProduto = precoProduto*(porcentagem/100);
let descontoProduto = 25; //porcento
let descontoValido = true;
//let descontoValido = false;

//Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;
let precoFinal;

if (descontoValido) {
  precoFinal = precoProduto - precoProduto * (descontoProduto / 100);
  //precoFinal = precoProduto * (1-(descontoProduto/100));
  console.log(precoFinal.toFixed(2));
} else {
  precoFinal = precoProduto;
  console.log(precoFinal.toFixed(2));
}

console.log("========================================================");

//Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;

if (precoFinal > 1000) {
  precoFinal = precoFinal - 50;
  console.log(precoFinal.toFixed(2));
} else {
  console.log(precoFinal.toFixed(2));
}

console.log("========================================================");

//Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.

let demandas = [10, 2, 1, 30, 5];

console.log(
  "O primeiro cliente está solicitando " + demandas[0] + " produtos."
);

console.log("========================================================");

//Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.

let totalCliente = [];

/* for (let i = 0; i < demandas.length; i++) {
  console.log(
    "O cliente " + (i + 1) + " deverá pagar: R$ " + precoProduto * demandas[i].toFixed(2));
  totalCliente.push(precoProduto * demandas[i]);
} */

while (i < demandas.length) {
  console.log(`O cliente ${i + 1} deverá pagar R$ ${precoProduto * demandas}.`);
  totalCliente.push(precoProduto * demandas[i]);
  i++;
}

console.log(totalCliente);

console.log("=========================================================");

//Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo.

/*let totalLucro = totalCliente.reduce (function(totalLucro, valoresClientes){
    return totalLucro + valoresClientes;
});

console.log("O total de lucro é de R$ " + totalLucro + ".");*/

/* let soma = 0;

for(let i = 0; i< totalCliente.length; i++){
    soma += totalCliente[i];
}

console.log(`O total de lucro é de R$ ${soma}`);
 */

while (i >= totalCliente) {
  soma += totalCliente;
  i++;
  console.log(`O total de lucro é de R$ ${soma}`);
}
