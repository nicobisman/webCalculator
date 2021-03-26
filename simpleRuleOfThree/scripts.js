function calculate(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value
    var result = n2*n3/n1
    if (result !== result){
        document.getElementById("result").innerHTML = "<br/>"
    } else{
        document.getElementById("result").innerHTML = result
        }
    }
function clean(){
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("n3").value = ""
    document.getElementById("result").innerHTML = "<br/>"
    }