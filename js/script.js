// Ini file javascript
var myIndex = 0;

function greetUser() {
    let name = prompt("Greetings, may i know your name?","Anonymous");
    let greetingsText = name ? `Hello ${name}, Welcome.` : "Hello Visitor, Welcome";
    document.getElementById("greetings").innerText = greetingsText;
    carousel();
}

window.onload = greetUser;

function carousel() {
    var i;
    var x = document.getElementsByClassName("banner-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block"
    setTimeout(carousel, 3000)
}