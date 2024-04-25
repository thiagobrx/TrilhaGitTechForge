let minhaString = "Esta é uma string de exemplo";

console.log("Comprimento da string:", minhaString.length);

let stringMaiuscula = minhaString.toUpperCase();

console.log("String em letras maiúsculas:", stringMaiuscula);


let palavras = minhaString.split(" ");

console.log("Palavras da string:");
palavras.forEach(palavra => {
    console.log(palavra);
});