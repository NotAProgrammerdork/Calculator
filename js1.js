let btn = document.querySelectorAll('.btn');
let ce = document.querySelector('#ce');
let output = document.querySelector('#out');
let eq = document.querySelector('#eq');
let mathOp = '+';

btn.forEach((element) => {
    element.addEventListener('click', () => {
        let values = element.dataset.value;
        if (!values.includes(' = ')) {
            mathOp += String(element.dataset.value);
        }
        output.textContent += element.textContent;
    })
})

function getResult() {
    let temp = mathOp.split(' +');
    let result = 0;
    temp.forEach((element) => {
        let alpha;
        switch (element[0]) {
            case '*':
                alpha = element.replace(/\*/g, '');
                result *= alpha;
                break;
            case '/':
                alpha = element.replace(/\//g, '');
                result /= alpha;
                break;
            default:
                result += Number(element);
        }
    })
    output.textContent = result;
}

function clearOutput() {
    output.textContent = '';
    mathOp = 0;
}

eq.addEventListener('click', getResult);
ce.addEventListener('click', clearOutput)