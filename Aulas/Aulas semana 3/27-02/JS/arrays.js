//Aula 27-02
//Tópicos: Arrays

//Declaração de arrays
let figuras = ["coracao", "estrela", "ok", "não", "joinha", "sorriso"];
/* console.log(figuras); *///representação em texto

let numeros = [3,1,5,7,2];
/* console.log(numeros); */

//Acessando elementos

/* console.log(figuras[5]);
console.log(figuras[1]);
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[3]);
console.log(numeros[1000]); *///undefined


//Alterando valor de um elemento
/* console.log(numeros);
numeros [2] = 700; //alterar o valor armazenado no índice 2 - atribuição
console.log(numeros);
numeros [2]++;
console.log(numeros);

figuras[5] = "batata";
console.log(figuras); */


//Percorrer array
/* console.log(numeros.length);//Quantos elementos existem no array
console.log(figuras.length);


for (let i = 0; i < numeros.length; i++){
console.log(i);
}

for (let i = 0; i < figuras.length; i++){
console.log(`O valor do index ${i} é ${figuras[i]}.`);
} */

let nomes = ["José", "Carlos", "André", "Pedro"];
let notas = [7.5, 8.7, 9.0, 10.0]
/* for(let nome of nomes){//A variável nome assume um elemento diferente a cada laço
console.log(nome);
}
//Percorre o array até o final dele
for(let notaAluno of notas){
//para cada nota no array, faça isso
console.log(notaAluno);
}

for(let i = 0; i < notas.length; i++){
notas [i]++;//Se for preciso alterar o valor, é necessário o index
}
console.log(notas); */



/* Inserir/Remover */
let listaProdutos = [];
console.log(listaProdutos.length);

listaProdutos.push("Smart Band"); //adicionar o elemento no final
listaProdutos.push("Bolo de cenoura");
listaProdutos.push("Batata remasterizada");
listaProdutos.push("Smartphone 2mb", "HD 500 kb", "RAM 200b")
console.log(listaProdutos);


let produto1 = listaProdutos.pop();//Remove o último elemento
let produto2 = listaProdutos.pop();//Remove o último elemento
console.log(listaProdutos);

console.log(listaProdutos.includes("Bolo de cenoura"));//Verifica se há um elemento igual
console.log(produto1, produto2);


