const search_bar = document.getElementById("search_bar");
const cards = document.querySelectorAll(".custom_card");

search_bar.addEventListener("keyup", function(e){
    let value = e.target.value.toLowerCase();
    Array.from(cards).forEach( card =>{
        let textElement = card.getElementsByTagName("h4")[0].textContent;
        if(textElement.toLowerCase().indexOf(value) !== -1){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    })
})
