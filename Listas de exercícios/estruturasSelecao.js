//1. Defina uma variável para armazenar um caractere e determine se é uma vogal ou uma consoante. Use um switch-case para implementar a lógica.

let letra = "z";

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("É vogal");
    break;
  default:
    console.log("É consoante.");
}

console.log("===============================================");

//2. Defina uma variável para armazenar um mês do ano (em número) e imprima o nome do mês correspondente. Use um switch-case para implementar a lógica.

let mes = 10;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês invalido");
}

console.log("===============================================");

//3. Defina uma variável para armazenar um número de 1 a 12 e imprima o número de dias correspondente ao mês. Use um switch-case para implementar a lógica. Considere que fevereiro tem 28 dias em anos não bissextos.

let mesCorrespondente = 10;

switch (mesCorrespondente) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("O mês tem 31 dias.");
    break;
  case 2:
    console.log(
      "O mês tem 28 dias em anos não bissextos e 29 dias em anos bissextos."
    );
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("O mês tem 30 dias.");
    break;
  default:
    console.log("Mês inválido.");
}

console.log("===============================================");

//4. Defina uma variável para armazenar um número de 1 a 4 e imprima o nome da estação do ano correspondente. Use um switch-case para implementar a lógica.

let estacao = 3;

switch (estacao) {
  case 1:
    console.log("Outono");
    break;
  case 2:
    console.log("Inverno");
    break;
  case 3:
    console.log("Primavera");
    break;
  case 4:
    console.log("Verão");
    break;
  default:
    console.log("Estação inválida");
}

console.log("===============================================");

//5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a menção correspondente. Use um switch-case para implementar a lógica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

let nota = 5;

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Insuficiente.");
    break;
  case 0:
  case 5:
  case 6:
    console.log("Regular.");
    break;
  case 7:
  case 8:
    console.log("Bom.");
    break;
  case 9:
  case 10:
    console.log("Excelente.");
    break;
    default:
      console.log("Nota inválida.");
}
