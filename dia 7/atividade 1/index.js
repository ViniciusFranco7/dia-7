let mediaGeral = 0
let qntsHomens = 0
let mulheresAcimaDe7 = 0
let maiorNotaHomens = 0
contador = 1

 while(contador <=10){
    nota = parseInt(prompt("digite a nota do " + contador + "° aluno "))
    sexo = prompt("digite o sexo do aluno (m ou f)")

    if (sexo == "m") {
    if (nota > maiorNotaHomens) {
        maiorNotaHomens = nota

    }

    qntsHomens++


}
 
 if(sexo == "f" && nota > 7) {

    mulheresAcimaDe7++
 }

    mediaGeral += nota
    contador++

 }

 mediaGeral = mediaGeral / 10

 console.log("A média geral dos alunos foi: " + mediaGeral)
 console.log("A quantidade de homens cadastrados foi: " + qntsHomens)
 console.log("A quantidade de mulheres que tiveram nota acima de 7 foram: " + mulheresAcimaDe7)
 console.log("A maior nota entre homens foi: " + maiorNotaHomens)