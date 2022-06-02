let usersArray = [];
$(document).ready(() => {
    $("#reNewPass").hide();
    $("#resPass").click(() => {
        let ExistEmail = false;
        for (let i of usersArray) {
            if (i.Email == $("#checkEmail").val()) {
                ExistEmail = true;
                break;
            }
        }
        if (ExistEmail) {
            $("#checkEmailDiv").hide();
            $("#reNewPass").show();
        }
        else {
            $("#ErrorMsg").text("Email doesn't Exist").css("color", "red");
        }
    })
    $("#Submit").click(() => {
        if (checkPassword()) {
            for (let i of usersArray) {
                if (i.Email == $("#checkEmail").val()) {
                    i.Password = $("#NewPassword1").val();
                    localStorage.setItem("userList", JSON.stringify(usersArray));
                    setToCookies(i.Email);
                    break;
                }
            }
        }
    })
})

// this function save logged in user to the cookies for 2 hours

function setToCookies(email) {
    let d = new Date();
    d.setTime(d.getTime() + 2 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "Email =" + email + ";" + expires + ";path=/";
    window.location.replace("../pages/dashboard.html");
}
//function for password validation
//this function will check id password is valid according to our rules
//our rules is: to be more than 8 characters, only english, at least one capital character ans one lower,at least one number, no special character
function checkPassword() {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let password = $("#NewPassword1");
    let errLabel = $("#ErrorMsg2");
    errLabel.css("color", "red");
    if (password.val().length >= 8) {
        //check if there is at lest on capital letter
        if (/[A-Z]/.test(password.val())) {
            if (/[a-z]/.test(password.val())) {
                if (format.test(password.val())) {
                    if (/[0-9]/.test(password.val())) {
                        if (checkEnglishLetters(password.val())) {
                            if (confirmPass(password.val(), errLabel))
                                return true;
                        } else errLabel.text("The password must english characters .");
                    } else errLabel.text("The password must contain at least one numbers in row .");
                } else errLabel.text("The password must contain special character at least one.");
            } else errLabel.text("The password must contain lower letter at least one.");
        } else errLabel.text("The password must contain capital letter at least one.");
    } else errLabel.text("The password must be minimum 8 letters");
}

//function for confirmation the password 
function confirmPass(pass, errLabel) {
    let confPass = $("#IPassword");
    if (confPass.val() == "" || pass.localeCompare(confPass.val()) != 0) {
        errLabel.text("The password isn't the same !");
    } else {
        errLabel.hide();
        return true;
    }

}
function checkEnglishLetters(value) {
    for (const i of value) {
        if (!/[a-zA-Z]|[0-9]|[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i)) {
            return false;
        }
    }
    return true;
}

//sets data in the array from local storage whenever the page rerun
function getData() {
    if (localStorage.getItem("userList"))
        usersArray = JSON.parse(localStorage.getItem("userList"));
}
getData();