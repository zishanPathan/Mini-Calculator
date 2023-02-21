let num1 = 8
let num2 = 2

document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2
function add(){
   let result = num1+num2
   document.getElementById("sum-el").innerText = "Sum : "+result
   
}
function sub(){
    let result = num1-num2
   document.getElementById("sum-el").innerText = "Sum : "+result
   
}
function div(){
    let result = num1/num2
   document.getElementById("sum-el").innerText = "Sum : "+result
   
}
function mul(){
    let result = num1*num2
   document.getElementById("sum-el").innerText = "Sum : "+result
   
}