// Criando a calculadora de porcentagens

let valorConta = 0
let gorjeta = 0
let valorTotal = 0

valorConta = parseFloat(prompt('Digite o Valor da Compra ;'))
gorjeta = parseFloat(prompt('Digite o Valor da gorjeta (decimal)% ;'))
gorjeta = (valorConta * gorjeta ) / 100 
valorTotal = valorConta + gorjeta 
alert('O valor Total da Gorjeta é $ '  + valorTotal )











