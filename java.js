/*Math functions */
function add(a,b){ 
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

let display = "placeholder"
document.getElementById("screen").innerHTML=display


function reset(){
    let display = 0
    document.getElementById("screen").innerHTML=display
        
}

function changeDisplay(num){
    display=num;
    document.getElementById("screen").innerHTML=display
}





function operate(operator, a, b){
    if (operator==="add"){
        return add(a,b)
    } else if (operator==="subtract"){
        return subtract(a,b)
    } else if (operator==="multiply"){
        return multiply(a,b)
    } else if (operator==="divide"){
        return divide(a,b)
    }
}


/* working on keystroke of button to show on display
function displayKey(e){
    let num = document.querySelector(`num[data-key]="${e.keyCode}"`)
    console.log(num)
}
window.addEventListener('keydown', function (e) {
    const num=document.querySelector(`button[data*="${e.keyCode}"]`)
    console.log(num)

})
*/
