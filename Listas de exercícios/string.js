//1. Escreva uma função que receba uma string e retorne o número de caracteres contidos nela.



//2. Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas.




//3. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.



//4. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.



//5. Escreva uma função que receba uma string e um número e retorne os últimos caracteres da string de acordo com o número informado.



//6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase com as ocorrências da palavra censuradas/trocadas por ***. Exemplo: censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo *** e valorant, mas *** é melhor". Dica: use a função replaceAll.
function censura(frase, palavra){
return frase.replaceAll(palavra, "***")
}
console.log(censura("Eu jogo lol e valorant, mas lol é melhor.", "lol"));





//7. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function retornaOcorrencia(string, caractere){
    //jessica s = 2

    let repete = 0; //conta a qtd de vezes
    for(let i=0; i < string.length; i++){
        if(string[i] === caractere){
            repete ++;
        }else{
            repete = "Não existe esse caracter!";
        }
    }

    return (console.log(repete));
};

retornaOcorrencia("jessica", "s");





