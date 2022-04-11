var navBtn = document.querySelector("#navMenu");
var navLink = document.querySelector("#navLink");
navBtn.addEventListener("click", function(){
    this.classList.toggle("nav-menu-toggled");
    navLink.classList.toggle("navLinkOn");
})