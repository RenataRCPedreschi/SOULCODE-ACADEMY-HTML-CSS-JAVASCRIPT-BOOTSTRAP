//Estrutura de seleção

let lang = "batata";//pt, es, en

// if(lang === "pt"){
//     console.log("Olá Mundo!");
// }else if((lang === "es")){
//     console.log("¡Hola mundo!");
// }else if((lang === "en")){
//     console.log("Hello, World!");
// }else{
//     console.log("Não há suporte para o idioma " + lang + "!");
// }


//switch-case = escolha caso
switch(lang){
    case "pt":
        console.log("Olá Mundo!");
        break;
    case "es":
        console.log("¡Hola mundo!");
        break;
    case "en":
        console.log("Hello, World!");
        break;
        default: //caso não encontre nenhuma
        console.log(`Não há suporte para o idioma ${lang}!`);
}


// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let diaSemana = 8;

switch(diaSemana){
case 1: 
console.log("Domingo");
break;
case 2:
console.log("Segunda");
break;
case 3: 
console.log("Terça");
break;
case 4: 
console.log("Quarta");
break;
case 5: 
console.log("Quinta");
break;
case 6: 
console.log("Sexta");
break;
case 7: 
console.log("Sábado");
break;
default:
    console.log(`Esse dia da semana ${diaSemana} não existe!`)
}