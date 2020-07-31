document.getElementById("left").style.display = 'none';

// generate pin handler

const  generateBtn = document.getElementById("generate-pin").addEventListener("click",function(){
    let randomNewNumber = Math.floor(1000 + Math.random() * 9000);
    let inputPin =  document.getElementById("generate-number").Value = randomNewNumber;
})

// funcation for input pin

document.getElementById("generate-pin").Value;
document.getElementById("screen-pin").Value;
let result = document.getElementById("generate-pin");

function button(num){
    let inputPin = result;
    inputPin.Value +=num;
}

// funcation  back 

function back(){
    let screen = document.getElementById("screen-pin").Value;
    let back = screen.slice( 0, -1);
    document.getElementById("screen-pin").Value = back;
}
// funcation cancel 

function cancel( ) {
    let screen = document.getElementById("screen-pin").Value;
    let cancel = ("");
    document.getElementById("screen-pin").Value = cancel;
    document.getElementById("pin-matched").style.display = 'none';
    document.getElementById("pin-wrong").style.display = 'none';

}

// funcation pin macthing

let screen = document.getElementById("screen-pin").Value;
let submitBtn=document.getElementById('submit-button');
submitBtn.addEventListener("click",function(){
    let randomValue = document.getElementById("generate-number").Value;
    let totalResult = result.Value;
    
    let matched = document.getElementById("pin-matched");
    let wrong = document.getElementById("pin-wrong");
    
    if (totalResult == randomValue) {
        matched.style.display='block';
    }
    else{
        matched.style.display='none';
        wrong.style.display='block';
    }
})