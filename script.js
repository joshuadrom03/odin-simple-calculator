let operator ="";
let previousValue ="";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function(){
    //Store the components
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equals");
    let numbers = document.querySelectorAll(".nums");
    let operators = document.querySelectorAll(".operator");
    let screen = document.querySelector(".display");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        screen.textContent = currentValue;

    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        screen.textContent = previousValue + " " + operator;


    }))

    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        screen.textContent = "00";
    })

    equal.addEventListener("click", function(e){
        operate();
        screen.textContent = previousValue;

    })

})

function handleNumber(num){
    if(currentValue.length <= 7){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    switch(operator){
        case "+":
            previousValue += currentValue;
            break;
        
        case "-":
            previousValue -= currentValue
            break;

        case "*":
            previousValue *= currentValue;
            break;

        case "/":
            previousValue /= currentValue;
            break;
    }

    previousValue = previousValue.toString();
}

