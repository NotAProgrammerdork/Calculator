let btn = document.querySelectorAll('.btn');
let output = document.querySelector('#out');
let eq = document.querySelector('#eq');
let adas = '+';

btn.forEach((element) => {
    element.addEventListener('click', () => {
        let values = element.dataset.value;
        if (!values.includes(' = ')) {
            adas += String(element.dataset.value);
        }
        // if (classes.includes('op')) console.log('hi');
        output.textContent += element.textContent;
    })
})

function getResult() {
    output.textContent = adas;
    let temp = adas.split(' +');
    let result = 0;
    temp.forEach((element) => {
        let alpha;
        switch (element[0]) {
            case '*':
                alpha = element.replace(/\*/g, '');
                result = result * alpha;
                output.textContent = result;
                break;
            case '/':
                alpha = element.replace(/\//g, '');
                result = result / alpha;
                output.textContent = result;
                break;
            default:
                result += Number(element);
                output.textContent = result;
        }
    })
}

eq.addEventListener('click', getResult)