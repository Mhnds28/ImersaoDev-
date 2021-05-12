var cartaPaulo = {
    nome: "Naruto",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
   
} 

var cartaMarcos ={
    nome:"Super man",
    atributos:{
        ataque: 99,
        defesa: 80,
        magia: 10
    }
    
}

var cartaHenrique = {
    nome:"deappool",
    atributos:{
        ataque: 88,
        defesa: 62,
        magia: 60
    
    }
    
}

var cartaMaquina

var cartaJogador

var cartas = [cartaPaulo, cartaMarcos, cartaHenrique]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas [numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3)
        
        }
        cartaJogador = cartas[numeroCartaJogador]
    
        document.getElementById('btnSortear').disable = true
        document.getElementById('btnJogar').disable = false
    }

    function exibirOpcoes(){
        var opcoes = document.getElementById(opcoes)
        var opcoesTexto=""
        for (var atributos in cartaJogador.atributos){
            opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
        }
        opcoes.innerHTML = opcoesTexto
    }

    function obtemAtributo(){
        var radioAtributo = document.getElementsByName('atributo')
        for ( var i = 0; i < radioAtributo.length; i++){
            if (radioAtributo[i].checked){
                return radioAtributo[i].value
            }
        }
    }

    function jogar(){
        var atributoSelecionado = obtemAtributo()

        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
            alert ("Venceu")
        }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
            alert('Perdeu')
        }else{
            alert ('Empatou!')
        }

    }