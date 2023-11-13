
let resultado = saldo(131, 1)

verificaNivel()





// Função de calculo das vitorias
function saldo (vitorias, derrotas){
    let saldoRank =  vitorias - derrotas
    return saldoRank
}

// Função que classifica rank de acordo com numero de vitorias
function verificaNivel () {
switch (true){
    case resultado <= 10:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Ferro")
        break
    case resultado >= 11 && resultado <= 20:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Bronze")
        break    
    case resultado >= 21 && resultado <= 50:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Prata")
        break
    case resultado >= 51 && resultado <= 80:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Ouro")
        break  
    case resultado >= 81 && resultado <= 90:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Diamante")
        break
    case resultado >= 91 && resultado <= 100:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Lendário")
        break
    case resultado >= 101:
        console.log("O Herói tem de saldo de " + resultado + " vitorias está no nível de " + "Imortal")
        break                  
}
}