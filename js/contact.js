const myForm = document.getElementById("myForm");
const firstName = myForm.querySelectorAll("input")[0]; 
const lastName = myForm.querySelectorAll("input")[1]; 

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert(`Thank you ${firstName.value} ${lastName.value} for contacting us , We will respond you ASAP`);
})