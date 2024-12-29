
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
const block = "block";
const none = "none";

let patterns = [
    /^[a-zA-Z]{7,}$/,  
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/ 
];


function validateInput(input, msg, display) {
    let warning = document.getElementById(input.id + "p");
    warning.innerText = msg;
    warning.style.display = display;
}


function isRequired() {
    let valid = true;
    inputs.forEach((input, index) => {
        // Check for empty fields
        if (input.value === "") {
            input.classList.add("warning");
            validateInput(input, `${input.id} is required`, block);
            valid = false;
        } 
        // Check for pattern mismatch (except for confirm-password)
        else if (input.id !== "confirm-password" && !input.value.match(patterns[index])) {
            let errorMsg = "";
            if (input.id === "username") errorMsg = "Username must be at least 7 characters.";
            if (input.id === "email") errorMsg = "Please enter a valid email address.";
            if (input.id === "password") errorMsg = "Password must be at least 8 characters long, with at least one letter and one number.";
            validateInput(input, errorMsg, block);
            valid = false;
        } 
    
        else if (input.id === "confirm-password" && input.value !== document.getElementById("password").value) {
            validateInput(input, "Passwords do not match. Try again!", block);
            valid = false;
        } else {
            input.classList.remove("warning");
            validateInput(input, "", none); 
        }
    });

    
    if (valid) {
        window.location.href = "../html/home.html"; 
    }
}


function clearWarnings() {
    let warnings = document.querySelectorAll("p");
    warnings.forEach(warning => {
        warning.style.display = none;
    });
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    isRequired();  
});


inputs.forEach((input) => {
    input.addEventListener("input", function () {
        if (input.id === "username" ) {
            if (!input.value.match(patterns[0])) {
                validateInput(input, "Username must be at least 7 characters with no spaces", block);
            } else {
                localStorage.setItem("user-name",input.value)
                validateInput(input, "", none);
            }
        } else if (input.id === "email") {
            if (!input.value.match(patterns[1])) {
                validateInput(input, "Please enter a valid email address", block);
            } else {
                validateInput(input, "", none);
            }
        } else if (input.id === "password") {
            if (!input.value.match(patterns[2])) {
                validateInput(input, "Password must be at least 8 characters long, with at least one letter and one number", block);
            } else {
                validateInput(input, "", none);
            }
        } else if (input.id === "confirm-password") {
            if (input.value !== document.getElementById("password").value) {
                validateInput(input, "Passwords do not match. Try again!", block);
            } else {
                validateInput(input, "", none);
            }
        }
    });
});
