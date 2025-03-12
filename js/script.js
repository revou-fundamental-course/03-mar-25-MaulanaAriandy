// Ini file javascript
// start of carousel code
let carouselIndex = 0;
carousel();

// Index addition
function nextPic() {
    carouselIndex += 1;
    carousel();
}

// view picture one by one
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

// start of welcome speech code
// Pop up greet for welcome speech
function greetUser() {
    let name = prompt("Greetings, may i know your name?", "Anonymous");
    let greetingsText = name ? `Hello ${name}, Welcome!` : "Hello Visitor, Welcome!";
    document.getElementById("greetings").innerText = greetingsText;
}

window.onload = greetUser;
//end of welcome speech code

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
            const textnode = document.createTextNode(nameId.value + " : " + messageId.value + " (" + countryId.value + ")");
            node.style.textTransform = "capitalize";
            node.appendChild(textnode);
            document.getElementById("display-name").appendChild(node);
            // document.getElementById("display-name").innerText = nameId.value + " : " + messageId.value + " (" + countryId.value + ")";
        }
    }
    document.getElementById("form-id").reset()
}

function writeOther() {

}