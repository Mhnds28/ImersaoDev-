var valorEmDolar = prompt ("Qual o valor em dolar ?");
var valorEmDolar = parseFloat (valorEmDolar);
var valorEmReal = valorEmDolar * 5.50;
var valorEmDecimal = valorEmReal.toFixed(2)

alert(valorEmDecimal);