let el = document.getElementsByClassName("buttons")

let currentButton = ""
let input = ""
let result = ""

for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", () => {
        currentButton = el[i].textContent
        console.log(currentButton)
        if (currentButton == 'C') {
            input = ""
            result = ""
            updateDisplay(input, result)
        }
        else if (currentButton == '=') {
            result = evaluateExpression(input)
            updateDisplay(input, result)
            input = result
        }   
        else {
            input += currentButton
            updateDisplay(input, result)
        }
    }, false)
}

function evaluateExpression(input) {
    let expression = input.replace(/÷/g, '/').replace(/x/g, '*')
    try {
        return eval(expression)
    } catch (error) {
        console.log(error)
        return 'Error'
    }
}

function updateDisplay(input, result) {
    document.getElementById("inputField").textContent = input
    document.getElementById("result_text").textContent = result
}
