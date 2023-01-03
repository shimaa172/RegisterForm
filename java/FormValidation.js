// Elements
var FristNameElement = document.querySelector("#text_FirstName");
var LastNameElement = document.querySelector("#text_LastName");
var EmailElement = document.querySelector("#text_Email");
var PassElement = document.querySelector("#pass");
var ConfirmPassElement = document.querySelector("#ConfirmPass");

//AddEventListener
FristNameElement.addEventListener("keyup", ValidateFristName);
LastNameElement.addEventListener("keyup", ValidateLastName);
EmailElement.addEventListener("keyup", ValidateEmail);
PassElement.addEventListener("keyup", CheckPassword);
ConfirmPassElement.addEventListener("keyup", ValidateConfirmPass);

// colors we need
var green = "#008000";
var red = "#ff0000";
var blue = "#6985d7";

//messages of span
var FristNameMsg = document.getElementById("FristName-Strength");
var LastNameMsg = document.getElementById("LastName-Strength");
var EmailMsg = document.getElementById("email-Strength");
var PassMsg = document.getElementById("pass-Strength");
var confirmPassMsg = document.getElementById("ConfirmPass-Strength");

// to change the content of the message
function ChangePassMsg(_element, _display, _text, _color) {
    _element.style.display = _display;
    _element.textContent = _text;
    _element.style.color = _color;
}

// to change the border of the input 
function ChangeBoeder(_element, _border, _outline) {
    _element.style.border = _border;
    _element.style.outline = _outline;
}

// RegExp for all inputs
let reName = new RegExp(/^[a-zA-Z\-]+$/);
let reEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))");

//ValidateName
// FristName
function ValidateFristName(e) {
    if (reName.test(FristNameElement.value)) {
        ChangePassMsg(FristNameMsg, "inline", "This is a right name.", "green");
        return (true)
    } else {
        ChangePassMsg(FristNameMsg, "inline", "*This is not a valid name format!", "red");
        return (false)
    }
}
// LastName
function ValidateLastName(e) {
    if (reName.test(LastNameElement.value)) {
        ChangePassMsg(LastNameMsg, "inline", "This is a right name.", "green");
        return (true)
    } else {
        ChangePassMsg(LastNameMsg, "inline", "*This is not a valid name format!", "red");
        return (false)
    }
}

// ValidateEmail
function ValidateEmail(e) {
    if (reEmail.test(EmailElement.value)) {
        ChangePassMsg(EmailMsg, "inline", "This is a right email.", "green");
        return (true)
    } else {
        ChangePassMsg(EmailMsg, "inline", "*This is not a valid email format!", "red");
        return (false)
    }
}

// ValidatePassword
function CheckPassword(e) {
    var PassBorder = document.getElementById("pass");
    if (strongPassword.test(EmailElement.value)) {
        // strong
        ChangePassMsg(PassMsg, "inline", "This is a strong password.", "green");
        ChangeBoeder(PassBorder, "3px solid green", "none");
    } else if (mediumPassword.test(EmailElement.value)) {
        // meduim
        ChangePassMsg(PassMsg, "inline", "*This is a meduim password!", "blue");
        ChangeBoeder(PassBorder, "3px solid blue", "none");
    } else {
        // weak
        ChangePassMsg(PassMsg, "inline", "*This is a weak password!", "red");
        ChangeBoeder(PassBorder, "3px solid red", "none");
    }
}

// ValidateConfirmPass
function ValidateConfirmPass(e) {
    if (PassElement.value != ConfirmPassElement.value) {
        ChangePassMsg(confirmPassMsg, "inline", "*Passwords do not match!", "red");
        return (false)
    } else {
        ChangePassMsg(confirmPassMsg, "inline", "Passwords match.", "green");
        return (true)
    }
}

// FormCheckValidation
function CheckValidation() {
    if (FristNameElement.value == '') {
        ChangePassMsg(FristNameMsg, "inline", "*Please enter your name!", "red");
        return (false)
    } else if (LastNameElement.value == '') {
        ChangePassMsg(LastNameMsg, "inline", "*Please enter your name!", "red");
        return (false)
    } else if (EmailElement.value == '') {
        ChangePassMsg(EmailMsg, "inline", "*Please enter your email!", "red");
        return (false)
    } else if (PassElement.value == '') {
        ChangePassMsg(PassMsg, "inline", "*Please enter your password!", "red");
        return (false)
    } else if (ConfirmPassElement.value == '') {
        ChangePassMsg(confirmPassMsg, "inline", "*Please confirm your password!", "red");
        return (false)
    } else {
        alert("You have been Registered.")
        return (true)
    }
}
