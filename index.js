var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
function RolaParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top: 55px"   
}
function RolarParaEsquerda(){
    leonardo.style ="displayflex"
    bruna.style ="displaynone"
    SetaDireita.style ="display:flex; margin-top:55px"
    SetaEsquerda.style ="display:none"
}