const btn = document.getElementsByClassName("enter")
btn[0].addEventListener('click',(e)=>{
    document.body.className ="fade-out";
    setTimeout(()=>{
      window.location.href ="/welcome/userverification/verification.html"
    },500)
})