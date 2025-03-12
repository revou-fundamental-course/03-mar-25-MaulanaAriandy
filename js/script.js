// Ini file javascript
// start of carousel code
let carouselIndex = 0;
carousel();

// Index addition
function nextPic() {
    carouselIndex += 1;
    carousel();
}

function carousel() {
    // create array of pic
    const carouselArray = document.getElementsByClassName("banner-img");
    
    // Bigger index handler
    if (carouselIndex >= carouselArray.length) {
        carouselIndex = 0;
    }

    // Loop through all carousel elements
    for (let i = 0; i < carouselArray.length; i++) {
        carouselArray[i].style.display = "none"
    }

    // Show first carrousel array
    carouselArray[carouselIndex].style.display = "block"
}

// pic change interval 3 seconds
setInterval(nextPic, 3000);
// end of carrousel code

function greetUser() {
    let name = prompt("Greetings, may i know your name?","Anonymous");
    let greetingsText = name ? `Hello ${name}, Welcome!` : "Hello Visitor, Welcome!";
    document.getElementById("greetings").innerText = greetingsText;
}

window.onload = greetUser;