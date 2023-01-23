const codigoJS = 
`function bubbleSort(array){
    for(var i = 0; i <= array.length-1; i++){
        for(var j = 0; j < (array.length - i -1); j++){
            if(array[j] > array[j+1]){
                var temp = array[j];
                tarray[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}`;

const codigoHTML = 
`<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Documento</title>
    <head>
    <body>
    </body>
</html>`;            

const codigoCSS = 
`*{
    margin: 0;
    padding: 0;
}

body{

}`;

function mudaTextoBase(linguagem){
    const textoCodigo = document.querySelector('textarea[id="textoCodigo"]');

    if(linguagem === "JavaScript"){
        textoCodigo.placeholder = codigoJS;
    }else if(linguagem === "HTML"){
        textoCodigo.placeholder = codigoHTML;
    }else{
        textoCodigo.placeholder = codigoCSS;
    }
}

const seletor = document.querySelector('select[id="seletorLinguagem"]');

mudaTextoBase(seletor.value);
seletor.onchange = function (){
    mudaTextoBase(seletor.value);
}
