return; { 
else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "")  
    area_default.classList.remove("invisible");
    area_result.classList.add("invisible"); }

 return;{ 

area_default.classList.add("invisible");
area_result.classList.remove("invisible");
texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
texto_out.innerHTML = texto;
 }

return;{ 

function clipboard()   
const texto_out = document.querySelector("#texto_out");
navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};



enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard(); } );
