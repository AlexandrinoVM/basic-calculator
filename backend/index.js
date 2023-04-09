var clear = document.getElementById('clear')
var divresult =document.getElementById("result")
var back = document.getElementById("back")
var  conclusion  = document.getElementById("final-result")
function insert(number){
   var firstNum = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = firstNum + number
}


clear.addEventListener("click",()=>{
    divresult.innerHTML= "";
})

back.addEventListener("click",()=>{
    var result = divresult.innerHTML
    divresult.innerHTML= result.substring(0,result.length -1)
})
conclusion.addEventListener("click",calculate)

function calculate(){
    var result = divresult.innerHTML
    if(result){
        divresult.innerHTML = eval(result)

    }else{
       document.getElementById("result").innerHTML = "empty"
    }

}

