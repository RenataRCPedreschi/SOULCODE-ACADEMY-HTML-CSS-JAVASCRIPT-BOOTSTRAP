// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.
function calculadora(a,b,operador){
   if(operador === "+"){
console.log(`${a} + ${b} = ${a+b}`);
   }else if(operador === "-"){
    console.log(`${a} - ${b} = ${a-b}`);
   }else if(operador === "*"){
    console.log(`${a} * ${b} = ${a*b}`);
   }else if(operador === "/"){
    console.log(`${a} / ${b} = ${a/b}`);
   }else{
    console.log(`Operador não definido`);
   }
}
calculadora(30,20,"-");

/* function calculadora(num1, num2, operador){
    switch(operador){
        case "+": console.log(`${num1 + num2}`);
            break;
        case "-": console.log(`${num1 - num2}`);
            break;
        case "*": console.log(`${num1 * num2}`);
            break;
        case "/": console.log(`${num1 / num2}`);
            break;
        default: console.log("operador não definido");
    }
}
calculadora(2, 2, "*");
 */


// Exercício II: Crie uma função que converte fahrenheit em celsius
// C = (F - 32) / 1.8. Retorna a temperatura convertida.
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura
// como parâmetro:
// Caso esteja abaixo de 11: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"


/* function toCelsius(tempF) {
    let tempC = (tempF - 32) / 1.8;
    return tempC;
  }
  
  let tempCidade = toCelsius(75);
  
  function checarTemperatura(temp) {
    if (temp < 11) {
      console.log("Muito frio!");
    } else if (temp >= 11 && temp < 16) {
      console.log("Clima bom!");
    } else if (temp >= 16 && temp < 31) {
      console.log("Agradável!");
    } else {
      console.log("Hell!");
    }
  }
  
  checarTemperatura(tempCidade);
  checarTemperatura(toCelsius(100));
 */

  // Exercício: Transforme as funções abaixo em arrow
  //Retorno imediato

  const criarNomeCompleto = (nome, sobrenome) => nome + " " + sobrenome;
  console.log(criarNomeCompleto("Renata", "Rabelo"));
  
  
  const contar = (maximo) =>{
    for (let i = 1; i <= maximo; i++) {
      console.log(i);
    }
  }
  
  
  const imc = (peso, altura) => {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
  
    return calculo;
  }