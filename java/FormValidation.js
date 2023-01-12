// Elements
var FristNameElement = document.querySelector("#text_FirstName");
var LastNameElement = document.querySelector("#text_LastName");
var EmailElement = document.querySelector("#text_Email");
var PassElement = document.querySelector("#pass");
var ConfirmPassElement = document.querySelector("#ConfirmPass");

//AddEventListener For Name
FristNameElement.addEventListener("blur",ValidateName);
LastNameElement.addEventListener("blur",ValidateName);
ConfirmPassElement.addEventListener("blur",ValidateConfirmPass);

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
function ChangeSpanMsg(_element, _display, _text, _color) {
  _element.style.display = _display;
  _element.textContent = _text;
  _element.style.color = _color;
}

// RegExp for all inputs
let reName = new RegExp(/^[a-zA-Z\-]{3,20}$/);
let reEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))");

//ValidateName
function ValidateName(e) {
     // FristName
    if (e.target.id == "text_FirstName"){
        if(e.target.value !=""){
            if (reName.test(e.target.value)){
                ChangeSpanMsg(FristNameMsg, "inline", "This is a right name.", "green");
                isValidName = true;
            }else{
                ChangeSpanMsg(FristNameMsg,"inline","*This is not a valid name format!","red");
                isValidName = false;
            }
        }
        else{
            ChangeSpanMsg(FristNameMsg,"inline","*Please enter your name!","red");
            isValidName = false;
        }
    }
    // LastName
    else if (e.target.id == "text_LastName"){
        if(e.target.value !=""){
            if (reName.test(e.target.value)){
                ChangeSpanMsg(LastNameMsg, "inline", "This is a right name.", "green");
                isValidName = true;
            }else{
                ChangeSpanMsg(LastNameMsg,"inline","*This is not a valid name format!","red");
                isValidName = false;
            }
        }
        else{
            ChangeSpanMsg(LastNameMsg,"inline","*Please enter your name!","red");
            isValidName = false;
        }
    }
}

// ValidateEmail
function ValidateEmail() {
    if(EmailElement.value !=""){
        if (reEmail.test(EmailElement.value)) {
            ChangeSpanMsg(EmailMsg, "inline", "This is a right email.", "green");
            isValidEmail = true;
        } else {
            ChangeSpanMsg(EmailMsg,"inline","*This is not a valid email format!","red");
            isValidEmail = false;
        }
    }else{
        ChangeSpanMsg(EmailMsg, "inline", "*Please enter your email!", "red");
        isValidEmail = false;
    }
}

// ValidatePassword
function CheckPassword() {
    if(PassElement.value !=""){
        if (strongPassword.test(PassElement.value)) {
            // strong
            ChangeSpanMsg(PassMsg, "inline", "This is a strong password.", "green");
            isValidPassword = true;
        } else if (mediumPassword.test(PassElement.value)) {
            // meduim
            ChangeSpanMsg(PassMsg, "inline", "*This is a meduim password!", "blue");
            isValidPassword = true;
        } else {
            // weak
            ChangeSpanMsg(PassMsg, "inline", "*This is a weak password!", "red");
            isValidPassword = false;
        }
    }else{
        ChangeSpanMsg(PassMsg, "inline", "*Please enter your password!", "red");
            isValidPassword = false;
    }
}

// ValidateConfirmPass
function ValidateConfirmPass(e) {
    if(isValidPassword){
        // yes
        if(e.target.value !=""){
            if (PassElement.value != e.target.value) {
                ChangeSpanMsg(confirmPassMsg, "inline", "*Passwords do not match!", "red");
                isValidConfirmPassword = false;
            } else {
                ChangeSpanMsg(confirmPassMsg, "inline", "Passwords match.", "green");
                isValidConfirmPassword = true;
            }
        }else{
            ChangeSpanMsg(confirmPassMsg,"inline","*Please confirm your password!","red");
            isValidConfirmPassword = false;
        }
    } else{
        // no
        ChangeSpanMsg(confirmPassMsg,"inline","*Firstly,Write a valid password!","red");
        isValidConfirmPassword = false;
    }
}

// default values for flags of the form
var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidConfirmPassword = false;

// FormCheckValidation
function CheckFormValidation() {
    if(isValidName == false || isValidEmail == false || isValidPassword == false || isValidConfirmPassword == false){
        // form won't be submitted
        return false;
    }
    else {
        // can be submitted
        alert("You have been Registered.");
        return true;
    }
}
