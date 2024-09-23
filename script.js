// var num1 = document.getElementById("number1").value
// var num2 = document.getElementById("number2").value

// function add(a,b){
//     return a+b
// }

// var result = add(num1,num2)
// console.log(result)

var result_p = document.getElementById("result_p")
var result_i = document.getElementById("result_i")

var div_button = document.getElementById("divide")
div_button.addEventListener("click",divide)

var mul_button = document.getElementById("multiply")
mul_button.addEventListener("click",()=>{
    var num1 = parseInt(document.getElementById("number1").value) // int
    var num2 = parseInt(document.getElementById("number2").value) // int
    result_i.value = num1 * num2
    result_p.innerText = num1 * num2
})

// callback function

function add(){
    var num1 = parseInt(document.getElementById("number1").value) // int
    var num2 = parseInt(document.getElementById("number2").value) // int
    result_i.value = num1 + num2
    result_p.innerText = num1 + num2
}

function sub(){
    var num1 = parseInt(document.getElementById("number1").value) // int
    var num2 = parseInt(document.getElementById("number2").value) // int
    result_i.value = num1 - num2
    result_p.innerText = num1 - num2
}

function divide(){
    var num1 = parseInt(document.getElementById("number1").value) // int
    var num2 = parseInt(document.getElementById("number2").value) // int
    result_i.value = num1 / num2
    result_p.innerText = num1 / num2
}
