const  btn = document.getElementById("here");
const input  = document.getElementById("inputArea");
btn.addEventListener("click",(e)=>{
    let value  = input.value;
    if(value.length>6){
    window.location.href = "/welcome/level-one/alert.html";
    }
    else{
     alert("Enter Your name!.Are you Hacker na! ")
    }
})