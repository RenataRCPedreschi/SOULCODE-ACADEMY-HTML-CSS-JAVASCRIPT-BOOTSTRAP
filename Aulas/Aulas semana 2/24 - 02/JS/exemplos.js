// Arrow = flecha
// Arrow function = Sintaxe +curta

// function ola() {
//   console.log("Hello!");
// }

// First-class citizen = funções são tratadas como valor
// Posso passar função como parâmetro de outra função
// Posso retornar uma função dentro de outra função
let ola = () => {
    console.log("Hello!");
  };
  
  ola(); // invocação
  
  // function soma(a, b) {
  //   console.log(`A soma é ${a + b}`);
  //   return a + b;
  // }
  
  const soma = (a, b) => {
    console.log(`A soma é ${a + b}`);
    return a + b;
  };
  
  let resultadoSoma = soma(1, 2);