var emailLogin =document.getElementById("loginEmail")
var passwordlLogin =document.getElementById("loginPassword")
var btnLogin =document.getElementById("login")
var message =document.getElementById("alert")

var allUser= JSON.parse(localStorage.getItem("allUser"));

function checkEmail(){
    for(var i=0; i<allUser.length; i++){
        if(allUser[i].email ==emailLogin.value && allUser[i].password == passwordlLogin.value){
            localStorage.setItem("Valid-User", `${allUser[i].name}`)
         return "exists";
        }
    }
    return "not existed";
}

btnLogin.addEventListener('click',function(){
    if(emailLogin.value== "" || passwordlLogin.value ==""){
        message.innerHTML= `<p class="text-dark">All inputs is required</p>`;
    }
    else{
        if(checkEmail() == "exists"){
            btnLogin.setAttribute("href","./home.html")
        }
        else if (checkEmail() == "not existed") {
            message.innerHTML = '<p class="text-warning">Incorrect Email or Password</p>';
        }
    }
})