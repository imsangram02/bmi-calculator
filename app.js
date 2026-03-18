let result=document.getElementById("value")
let summit=document.getElementById("calbtn")
summit.addEventListener("click",function(){
let height=Number(document.getElementById("heightvalue").value);
let weight=Number(document.getElementById("weightvalue").value);
let calculate=weight/(height*height)
result.innerHTML=calculate.toFixed(2);
})

let resetbox=document.getElementById("reset");
resetbox.addEventListener("click",function(){
    document.getElementById("heightvalue").value="";
    document.getElementById("weightvalue").value="";
    result.innerText=""
})