// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
 alert("Hello world!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numA = prompt("What's the first number?")
const numB = prompt("What's the second number?")
const sum = Number(numA) + Number(numB)
alert(`The sum is ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const value = 10
if (typeof value == Number) {
  alert("It's a number")
} else {
  alert("It's not a number")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = "Hello world!"
if(typeof isString == String) {
  alert("It's a string")
} else { 
  alert("It's not a string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true 
if(typeof isBoolean == Boolean) {
  alert("It's a boolean")
} else {
  alert("It's not a boolean")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = numA - numB
alert(`The subtraction is ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = numA * numB
alert(`The multiplication is ${mult}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = numA / numB 
alert(`The division is ${div}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isEvenNumber = 6
if(isEvenNumber % 2 == 0) {
  alert("It's an even number")
} else {
  alert("It's not an even number")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é impar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 7
if(isOddNumber %2 != 0){
  alert("It's an odd number")
} else {
  alert("It's not an odd number")
}