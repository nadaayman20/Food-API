var userName=document.getElementById('signName');
var userEmail=document.getElementById('signEmail');
var userPassword=document.getElementById('signPassword');
var useralert=document.getElementById('alert');
var allUser=[];
if(localStorage.getItem("allUser") != null){
    allUser = JSON.parse(localStorage.getItem("allUser"))
}
else{
    allUser=[];
}

function signUp(){

   if(userName.value =="" || userEmail.value=="" || userPassword.value ==""){
    useralert.innerHTML= `<p class="text-dark">All inputs is required</p>`;
   }
   else{
    var user={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
        if(searchEmail() == "exists"){
            useralert.innerHTML= `<p class="text-warning">Email already exists</p>`;
        }
        else if(searchEmail() == "not existed"){
            allUser.push(user);
            localStorage.setItem("allUser",JSON.stringify(allUser));
            useralert.innerHTML= `<p class="text-info">Success</p>`;
        }
    }
   }


function searchEmail(){
    for(var i=0; i<allUser.length ;i++){
        if(allUser[i].email == userEmail.value){
            return "exists";
        }
    }
    return "not existed";
}

