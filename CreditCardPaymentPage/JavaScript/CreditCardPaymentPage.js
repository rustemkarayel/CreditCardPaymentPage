//create spans
var keysRows = document.getElementsByClassName("keys");
for(var i=0;i<keysRows.length;i++){
     var keysRow=keysRows[i];
     keysRow.style.display="inline-block";
    for(var j=0;j<4;j++){
        var span=document.createElement("span");
        span.innerHTML="#";
        keysRow.appendChild(span);
    }
}

function cardNumberFocus(toClass){
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.style.border = "2px solid white";
    divElement.style.borderRadius = "5px";
}

function cardNumberChange(fromClass, toClass){
    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContent = inputElement.value;
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = inputContent;    
}

function cardNumberLoseFocus(toClass){
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.style.border = "none";
}

function cardDayChange(fromClass, toClass){

    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContent = inputElement.value;

    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = inputContent;
}

function cardRotate(toClass1, toClass2){

    var frontCard = document.getElementsByClassName(toClass1)[0];
    var backCard = document.getElementsByClassName(toClass2)[0];
    
    frontCard.style.transform = "rotateY(180deg)";
    frontCard.style.transition = "1s";
    frontCard.style.zIndex = "-1";
    frontCard.style.opacity="0";

    backCard.style.transform = "rotateY(360deg)";
    backCard.style.transition = "1s";
    backCard.style.zIndex = "1";
    backCard.style.opacity="1";
}

function cardCvvChange(fromClass, toClass){

    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContentCount = inputElement.value.length;

    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = "";

    for(var i = 0; i < inputContentCount; i++){
        divElement.style.fontSize="37px";
        divElement.innerHTML += "*";
    }
}

function cardCvvLoseFocus(toClass1, toClass2){
    var frontCard = document.getElementsByClassName(toClass1)[0];
    var backCard = document.getElementsByClassName(toClass2)[0];

    frontCard.style.transform = "rotateY(0deg)";
    frontCard.style.transition = "1s";
    frontCard.style.zIndex = "1";
    frontCard.style.opacity="1";

    backCard.style.transform = "rotateY(180deg)";
    backCard.style.transition = "1s";
    backCard.style.zIndex = "-1";
    backCard.style.opacity = "0";



}

