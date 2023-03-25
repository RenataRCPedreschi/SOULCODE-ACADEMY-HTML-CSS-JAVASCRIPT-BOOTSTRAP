//Aula 01-03
//Tópicos: Objetos

//Objetos = servem para estruturar dados
// - propriedades (características)
// - Métodos (ações)

let pet = {
  nome: "Bisteca", //propriedade - valor
  idade: 1, //propriedade - valor
  peso: 6.5,
  especie: "gato",
}; //{} indica que estou declarando um objeto

let pet2 = {
  nome: "Bisnaguinha",
  idade: 1,
  peso: 4.5,
  especie: "gato",
};

// Tip: crie um objeto "pet3" com seu pet e coloque uma
// nova propriedade: comida favorita
let pet3 = {
  nome: "Agnes",
  idade: 9,
  peso: 2.5,
  especie: "gato",
  comidaFavorita: "sachê",
};

let pet4 = {
  nome: "Pandora",
  idade: 11,
  peso: 12,
  especie: "cachorro",
  comidaFavorita: "sopa",
  cor: "bege",
};

//Acesso de propriedade
console.log(pet.nome);
console.log(pet.idade);
console.log(pet.peso);
console.log(pet.especie);
console.log(pet.fullstack); //essa propriedade não existe

console.log(pet2["nome"]); //equivale a pet.nome

//Alterar valores das propriedades

pet.nome = "Pepezinha"; //Alteração nome pet
/* pet.idade = 13;
pet.peso = 2; */
pet.idade++;
pet.peso = pet.peso + 3;
console.log(pet);
//pet = {};//com const podemos alterar as propriedades

pet["nome"] = "Batata"; //peso.nome = "Batata"
console.log(pet);

//Adicionando nova propriedade

pet.cor = "laranja";
console.log(pet);

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.raca = "vira-lata";
pet3.cor = "Bege";
pet3.idade++;

console.log(pet3);
