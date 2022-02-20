let el = document.getElementsByClassName("buttons")

let currentButton = ""
let input = ""
let result = ""

for (let i = 0; i < el.length; i++) {
    let number = ''
    let count = 0
    el[i].addEventListener("click", () => {
        currentButton = el[i].textContent
        console.log(currentButton)
        if (currentButton == 'C') {
            count = 0
            input = document.getElementById("inputField").innerHTML = ""
        }
        else if (currentButton == '=') {
            let done = doTheThing(input);
            result = document.getElementById("result_text").innerHTML = done
        }   
        else {
            input = document.getElementById("inputField").innerHTML += currentButton
        }
    }, false)
}

function doTheThing(input) {
    let temp = input.split(' ')
    if (temp[1] == '+') {
        console.log(Number(temp[0]) + Number(temp[2]))
        let res = Number(temp[0]) + Number(temp[2])
        return res
    }
    
}

