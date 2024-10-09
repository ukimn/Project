const button = document.querySelector("button");
const newButton = document.querySelector(".dont");

button.addEventListener('click', function(e){
    alert("You clicked the button");
})

newButton.addEventListener('click', function(e){
    alert("I told you don't click it!")
})