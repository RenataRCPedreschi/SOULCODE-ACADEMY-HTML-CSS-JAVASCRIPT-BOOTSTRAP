//MÉTODOS = ação de um objeto
 
let pet = {
    //Atributos
    nome: "Amendoim",
    idade: 5,
    peso: 3.5,
    //Métodos
    dormir(){
        console.log("zzzzzzzzzzZZZZZZZZZZZ");
    },
    comer(comida){
        console.log(`Estou comendo ${comida}.`);
    },
    brincar(brincadeira){
        console.log(`Estou brincando ${brincadeira}`);
    }
};

// .  lista as propriedades e métodos de um objeto
/* pet.dormir();//Invocação da função/Método
pet.comer("batata");
pet.comer("peixe");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log
pet.brincar("com uma bolinha");  */

let pessoa = {
  //Atributos
  nome: "Renata",
  idade: 30,
  nacionalidade: "brasileira",
  //Métodos
  dizerOi() {
    //this (referencia o objeto) = representa o objeto dono do método
    console.log(
      `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}!`
    );
  },
  envelhecer() {
    this.idade++;
  },
  cuidarPet(animal) {

    console.log(`Estou cuidando do ${animal.nome}.`);
    animal.comer("Batata");
    animal.peso += 0.2; 
  },
};

pessoa.cuidarPet(pet);
console.log(pet.peso);

// Tip: Melhore o método de dizerOi
// Adicione a mensagem neste formato:
// "Oi, meu nome é João, tenho 25 anos e sou brasileiro";

/* pessoa.dizerOi();
pessoa.nome = "Maria";
pessoa.dizerOi();//Chama o método com o nome alterado
pessoa.envelhecer();
pessoa.envelhecer();
pessoa.envelhecer();
pessoa.dizerOi(); */
