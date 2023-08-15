
var allMenu =[];
(async function(){
    var req=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
    finalResult =await req.json();
   allMenu= finalResult.recipes;
   displayMenu()
})()

 async function choseCategory(query){
 
    var req=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    finalResult =await req.json();
   allMenu= finalResult.recipes;
   displayMenu();
}

function displayMenu(){
    var cartona ="";
   for(var i=0; i<allMenu.length ; i++){
    cartona += `  <div class="col-lg-4">
    <a href="${allMenu[i].source_url}" target="_blank" class="text-decoration-none text-dark">
    <div class="card text-center p-2 overflow-hidden">
       <div class="overflow-hidden">
       <img src="${allMenu[i].image_url}" class="w-100" alt="food" style="height: 277px;">   </div>
        <h4 class="p-2">${allMenu[i].title}</h4>
    </div>
    </a>
  </div>`
   }
   document.querySelector('.row').innerHTML = cartona;
}