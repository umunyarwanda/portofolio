var navBtn = document.querySelector("#navMenu");
var navLink = document.querySelector("#navLink");
navBtn.addEventListener("click", function(){
    this.classList.toggle("nav-menu-toggled");
    navLink.classList.toggle("navLinkOn");
})

var cyanBtn = document.getElementById("togglerCyan");
cyanBtn.addEventListener('click', function(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains('pink')){
        document.body.classList.remove('pink');
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains('steel')){
        document.body.classList.remove('steel');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains('blanche')){
        document.body.classList.remove('blanche');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    document.body.classList.toggle('cyan');
})

var pinkBtn = document.getElementById("togglerPink");
pinkBtn.addEventListener('click', function(){
    document.body.classList.toggle('pink');
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    if(document.body.classList.contains('cyan')){
        document.body.classList.remove('cyan');
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains('steel')){
        document.body.classList.remove('steel');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains('blanche')){
        document.body.classList.remove('blanche');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
})

var set = document.getElementById('set');
var fix = document.getElementById("fixed");

set.onclick = function(){
    fix.classList.toggle("fixedOn");
}

var darkbtn = document.getElementById("toggler");
darkbtn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        darkbtn.src = './img/icons8_sun.svg';
    }else{
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    if(document.body.classList.contains('pink')){
        document.body.classList.remove('pink');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    if(document.body.classList.contains('cyan')){
        document.body.classList.remove('cyan');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    if(document.body.classList.contains("blanche")){
        document.body.classList.remove("blanche");
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    if(document.body.classList.contains("steel")){
        document.body.classList.remove("steel");
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    // document.body.classList.toggle('dark');
})

var blancheBtn = document.getElementById("blanche");
blancheBtn.addEventListener('click', function(){
    document.body.classList.toggle('blanche');
    if(document.body.classList.contains('dark')){
        darkbtn.src = './img/icons8_sun.svg';
    }else{
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    if(document.body.classList.contains('pink')){
        document.body.classList.remove('pink');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    if(document.body.classList.contains('cyan')){
        document.body.classList.remove('cyan');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }

    if(document.body.classList.contains("steel")){
        document.body.classList.remove("steel");
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    // document.body.classList.toggle('dark');
})

var steelBtn = document.getElementById("steel");
steelBtn.addEventListener('click', function(){
    if(document.body.classList.contains('dark')){
        darkbtn.src = './img/icons8_sun.svg';
        document.body.classList.remove('dark');
    }else{
        darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    if(document.body.classList.contains('pink')){
        document.body.classList.remove('pink');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    if(document.body.classList.contains('cyan')){
        document.body.classList.remove('cyan');
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    if(document.body.classList.contains("blanche")){
        document.body.classList.remove("blanche");
        // darkbtn.src = './img/icons8_crescent_moon_4.svg';
    }
    
    document.body.classList.toggle('steel');
    // document.body.classList.toggle('dark');
})