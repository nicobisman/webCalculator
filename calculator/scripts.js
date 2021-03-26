function start(){
    window.temp = "temp"
    }
function number(functionNumber){
    if (temp == "temp"){
        clean()
        window.temp = functionNumber
        document.getElementById("result").innerHTML = temp
    } else{
        window.temp = (temp + (functionNumber))
        document.getElementById("result").innerHTML = temp
        }
    }
function modifiers(modifier){
    if (modifier === "dot"){
        var tempModifier = "."
    } else if (modifier === "add"){
        var tempModifier = "+"
    } else if (modifier === "substract"){
        var tempModifier = "-"
    } else if (modifier === "divide"){
        var tempModifier = "/"
    } else {
        var tempModifier = "*"
    }
    var tempLastCharacter = temp.slice(temp.length-1)
    if (temp == "temp" && tempModifier !== "-"){
    } else if (temp == "temp" && tempModifier == "-"){
        window.temp = tempModifier
        document.getElementById("result").innerHTML = temp
    } else if (tempLastCharacter == "+" || tempLastCharacter == "-" || tempLastCharacter == "/" ||tempLastCharacter == "*"){
    } else {
        window.temp = temp + tempModifier
        document.getElementById("result").innerHTML = temp
        }
    }
function calculate(){
    var tempLastCharacter = temp.slice(temp.length-1)
    if (tempLastCharacter == "+" || tempLastCharacter == "-" || tempLastCharacter == "/" ||tempLastCharacter == "*") {
    } else if (temp == "temp"){
    } else if (eval(temp) !== eval(temp)){
        document.getElementById("result").innerHTML += "=NoNumérico"
        window.temp = "temp"
    }
    else {
        window.temp = eval(temp)
        document.getElementById("result").innerHTML += "=" + temp
        window.temp = "temp"
        }
    }
function clean(){
    document.getElementById("result").innerHTML = "<br>"
    temp = "temp"
    }