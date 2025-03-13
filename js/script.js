// Ini file javascript
// start of carousel code
let carouselIndex = 0;
carousel();

// Index addition
function nextPic() {
    carouselIndex += 1;
    carousel();
}

function prevPic() {
    carouselIndex += -1;
    carousel();
}

// view picture one by one
function carousel() {
    // create array of pic
    const carouselArray = document.getElementsByClassName("banner-img");

    // Lower or Bigger index handler
    if (carouselIndex >= carouselArray.length) {
        carouselIndex = 0;
    }
    if (carouselIndex < 0) {
        carouselIndex = carouselArray.length - 1;
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

// start of welcome speech code
// Pop up greet for welcome speech
function greetUser() {
    let name = prompt("Greetings, may i know your name?", "Anonymous");
    let greetingsText = name ? `Hello ${name}, Welcome!` : "Hello Visitor, Welcome!";
    document.getElementById("greetings").innerText = greetingsText;
}

window.onload = greetUser;
//end of welcome speech code

let clock;

function checkTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    h = addZero(h);
    m = addZero(m);
    clock = h + ":" + m;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//start of form validation code
function validateForm() {
    // Get value from input
    const nameId = document.getElementById("name-id");
    const emailId = document.getElementById("email-id");
    const countryId = document.getElementById("country-id");
    const messageId = document.getElementById("message-id");

    // check if input is empty
    if (nameId.value == "" && emailId.value == "" && messageId.value == "") {
        alert("Your didn't write anything");
        return 0;
    } else {
        if (nameId.value == "") {
            alert("Name must not be empty");
            return 0;
        } else

            if (emailId.value == "") {
                alert("Email must not be empty");
                return 0;
            } else

                if (messageId.value == "") {
                    alert("Message must not be empty");
                    return 0;
                } else {
                    document.getElementById("header-message").style.display = "block";

                    const node = document.createElement("p");
                    checkTime();
                    const textnode = document.createTextNode(nameId.value + " (" + countryId.value + ", " + clock + ")" + " : " + messageId.value);
                    node.style.textTransform = "capitalize";
                    node.appendChild(textnode);
                    document.getElementById("display-name").appendChild(node);
                    // document.getElementById("display-name").innerText = nameId.value + " : " + messageId.value + " (" + countryId.value + ")";
                }
    }
    document.getElementById("form-id").reset()
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}