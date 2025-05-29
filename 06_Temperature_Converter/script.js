let c = document.getElementById("tof");
let f = document.getElementById("toc");

let tb = document.getElementById("textbox");
// let submit = document.getElementById("submit");
let result = document.getElementById("result");
let temp;
function convert(){
    if(c.checked){
        temp = Number(tb.value);
        temp = (9/5)*temp + 32 
        result.textContent=temp + " F";
    }
    else if(f.checked){
        temp = Number(tb.value);
        temp = (5/9)*(temp - 32) 
        result.textContent=temp + " °C";
    }
    else{
        result.textContent="Select a unit"
    }
}