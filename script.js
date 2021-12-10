

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");



document.addEventListener("keyup", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == "65") {
        textbox.value =  "y";  
    }  
    if (key.keyCode == "66") {
        textbox.value =  "g";  
    } 
    if (key.keyCode == "67") {
        textbox.value =  "p";  
    }  
    if (key.keyCode == "68") {
        textbox.value =  "t";  
    } 
    if (key.keyCode == "69") {
        textbox.value =  "h";  
    }  
    if (key.keyCode == "70") {
        textbox.value =  "k";  
    } 
    if (key.keyCode == "71") {
        textbox.value =  "n";  
    }  
    if (key.keyCode == "72") {
        textbox.value =  "u";  
    } 
    if (key.keyCode == "73") {
        textbox.value =  "z";  
    }  
    if (key.keyCode == "74") {
        textbox.value =  "b";  
    } 
    if (key.keyCode == "75") {
        textbox.value =  "o";  
    }  
    if (key.keyCode == "76") {
        textbox.value =  "f";  
    } 
    if (key.keyCode == "77") {
        textbox.value =  "a";  
    }  
    if (key.keyCode == "78") {
        textbox.value =  "c";  
    } 
    if (key.keyCode == "79") {
        textbox.value =  "e";  
    }  
    if (key.keyCode == "80") {
        textbox.value =  "r";  
    } 
    if (key.keyCode == "81") {
        textbox.value =  "d";  
    }  
    if (key.keyCode == "82") {
        textbox.value =  "l";  
    } 
    if (key.keyCode == "83") {
        textbox.value =  "v";  
    }  
    if (key.keyCode == "84") {
        textbox.value =  "q";  
    } 
    if (key.keyCode == "85") {
        textbox.value =  "x";  
    }  
    if (key.keyCode == "86") {
        textbox.value =  "j";  
    } 
    if (key.keyCode == "87") {
        textbox.value =  "m";  
    }  
    if (key.keyCode == "88") {
        textbox.value =  "s";  
    } 
    if (key.keyCode == "89") {
        textbox.value =  "w";  
    }  
    if (key.keyCode == "90") {
        textbox.value =  "i";  
    }  
    
    var encrypted = document.createElement("spam");
    encrypted.innerHTML = textbox.value;
    messages.appendChild(encrypted);
    textbox.value = "";
    textbox.onkeyup =  function(){
    }   

  
};







