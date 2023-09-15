/*
var nome="Anna"
var anoC=19
var avo=9
var idade
alert("Olá Mundo \n" + nome + (anoC-avo));
idade= anoC-avo;
if( idade>5 ){
    document.write("crianca \n");
}
else {
    document.write("Dança")
}
for (let i=1; i<=12; i++){
    const result = 7*i;
    document.write(`7 x ${i} = ${result} <br> `);
}
*/

const botao = document.getElementById('botao');
const resultado=document.getElementById('resultado');
let contador=0;

botao.addEventListener('click', function(){
contador++;


    resultado.textContent=`Voce clicou ${contador} vezes` ;

});