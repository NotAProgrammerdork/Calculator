function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
    }
}

let btn = document.querySelectorAll('.btn');
let sop = document.querySelector('#sop');
let eq = document.querySelector('#eq');
let adas = '';

btn.forEach((element) => {
    element.addEventListener('click', () => {
        let classes = String(element.classList);
        if (classes.includes('gray')) {
            adas += String(element.textContent);
        }
        // if (classes.includes('op')) console.log('hi');
        sop.textContent += element.textContent;
    })
})

eq.addEventListener('click', () => {
    sop.textContent = adas;
    console.log(Number(adas) + 10)
})