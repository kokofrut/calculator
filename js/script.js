let el = document.getElementsByClassName("buttons")

let currentButton = ""
let input = ""
let result = ""

for (let i = 0; i < el.length; i++) {
    let number = ''
    let count = 0
    let done = ''
    el[i].addEventListener("click", () => {
        currentButton = el[i].textContent
        console.log(currentButton)
        if (currentButton == 'C') {
            count = 0
            input = document.getElementById("inputField").innerHTML = ""
            done = document.getElementById("result_text").innerHTML = ""
            console.log("done ok")
        }
        else if (currentButton == '=') {
            done = ''
            if (input != '')
                done = doTheThing(input);
            result = document.getElementById("result_text").innerHTML = done
        }   
        else {
            input = document.getElementById("inputField").innerHTML += currentButton
        }
    }, false)
}

function doTheThing(input) {
    let res = 0;
    let temp = input.split(' ')
    if (!temp) return ""
    console.log(temp)
    for (let e = 1; e < Number(temp.length) - 1; e += 2) {
        if (e == 1){
            if (temp[e] == '+') {
                console.log(res)
                res += Number(temp[e - 1]) + Number(temp[e + 1])
            }
            else if (temp[e] == '-') {
                console.log(res)
                res += Number(temp[e - 1]) - Number(temp[e + 1])
            }
            else if (temp[e] == '*') {
                console.log(res)
                res += Number(res) * Number(temp[e + 1])
            }
            else if (temp[e] == '÷') {
                console.log(res)
                res += Number(res) / Number(temp[e + 1])
            }
            else if (temp[e] == '%') {
                console.log(res)
                res += Number(res) % Number(temp[e + 1])
            }
        }
        else{
            if (temp[e] == '+') {
                console.log(res)
                res = Number(res) + Number(temp[e + 1])
            }
            else if (temp[e] == '-') {
                console.log(res)
                res = Number(res) - Number(temp[e + 1])
            }
            else if (temp[e] == '*') {
                console.log(res)
                res = Number(res) * Number(temp[e + 1])
            }
            else if (temp[e] == '÷') {
                console.log(res)
                res = Number(res) / Number(temp[e + 1])
            }
            else if (temp[e] == '%') {
                console.log(res)
                res = Number(res) % Number(temp[e + 1])
            }
        }
    }
    return res
    
}