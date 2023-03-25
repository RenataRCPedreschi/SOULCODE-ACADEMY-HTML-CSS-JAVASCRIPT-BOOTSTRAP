// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let contaBancaria = {
  //propriedades
  código: 1257,
  saldo: 3500.0,
  cpfTitular: "256.256.266-00",
  nomeTitular: "José Alves",
  //Métodos
  saque(valor) {
    this.saldo -= valor;
    /* console.log(`Saque de R$ ${valor}. Valor em conta: R$ ${this.saldo - valor}.`); */
  },
  deposito(valor) {
    this.saldo += valor;
    /* console.log(`Deposito de R$ ${valor}. Valor em conta: R$ ${this.saldo + valor}`); */
  },
};

/* console.log(contaBancaria); */
/* contaBancaria.saque(25);
contaBancaria.deposito(350); */

/* console.log(contaBancaria.saldo);
contaBancaria.saque(50);
console.log(contaBancaria.saldo);
contaBancaria.deposito(5000);
console.log(contaBancaria.saldo); */

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
  //propriedades
  nome: "amendoim",
  descricao: "alimento",
  quantidade: 500,
  precoOriginal: 2.5,
  desconto: 0.5,

//métodos
calcularPrecoDesconto(){
let valorAtual = this.precoOriginal - this.desconto
return valorAtual
},
apresentacao(){
    console.log("Este produto não é recomendado para alérgicos à amendoim.");
},
comprar(total){
this.quantidade -= total  ;
}
};


produto.apresentacao();
produto.comprar(50);
console.log(produto.quantidade);
console.log(produto.calcularPrecoDesconto());



/* let produto = {
    nome: "Notebook",
    descricao: "ACER Notebook Nitro 5 AN515-44-R4KA, AMD R7 4800H, 8GB, 512GB SDD, (GTX 1650 com 4 GB) Windows11. 15,6” LED FHD IPS, preto",
    quantidade: 100,
    precoOriginal: 5999,
    desconto: 300,
    calcularPrecoDesconto () {
        (precoDescontado = this.precoOriginal - this.desconto)
        console.log(`O preço do ${this.nome} com desconto aplicado é de ${precoDescontado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        return precoDescontado
    },
    apresentacao () {
        console.log (produto)
    },
    comprar(total) {
        this.quantidade -= total;
        console.log(`Foi realizada a compra de ${total} unidades do ${this.nome}, temos agora em estoque o total de ${this.quantidade} unidades.`)
    }
} */

