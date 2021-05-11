


var num1 = parseInt (prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digie o segundo valor : "));


var operacao = prompt("Digite 1 para divisão, 2 para multiplicação, 3 soma e o 4 para subitração: ");

if (operacao == 1) {
    var resultado = num1 / num2;
    document.write("<h2>" + num1 + " / " + num2 + " = " + resultado + "</h2>");

}else if (operacao == 2){
    var resultado = num1 * num2;
    document.write("<h2>" + num1 + " X " + num2 + " = " + resultado + "</h2>");

}else if (operacao == 3){
    var resultado = num1 + num2;
    document.write("<h2>" + num1 + " + " + num2 + " = " + resultado + "</h2>");

}else if (operacao == 4){
    var resultado = num1 - num2;
    document.write("<h2>" + num1 + " - " + num2 + " = " + resultado + "</h2>");

}else{
    document.write("<h2> Opção invalida! </h2>");
} 



//if = se 
//else = senão
//else if = senão se 
