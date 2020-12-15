const footer_logo = document.getElementById("footer_logo");

footer_logo.addEventListener("mouseover", function(){
    footer_logo.style.transition = "all 0.4s ease";
    footer_logo.style.transform = "scale(1.2)";
})
footer_logo.addEventListener("mouseout", function(){
    footer_logo.style.transition = "all 0.4s ease";
    footer_logo.style.transform = "scale(1)";
})