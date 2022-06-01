$(document).ready(() => {
  $("#signInBtn").click(() => {
    $("#signUpDiv").hide();
    $("#signInDiv").show().css("display", "flex");
  });
  $("#signUpBtn").click(() => {
    $("#signUpDiv").show().css("display", "flex");
    $("#signInDiv").hide();
  });
  $("#dSignupBtn").click(() => {
    if (checkUserName($("#uUserName"), $("#uEmail"))) {

    }

  })

});
/*signUp*/
let usersArray = [];
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var english = /^[A-Za-z0-9]*$/;
//function for userName validation
//This function first need to check if thi user name already exits in the database
//, then it must be only in english and number no special characters
function checkUserName(userName, email) {
  let errLabel = document.getElementById("errMsgUp");
  errLabel.style.color = "red";
  if (!english.test(userName.val()) || (userName.val().length < 3 && userName.val().length >= 15) || userName.val() == "") {
    errLabel.innerHTML = "Invalid username";
  }
  else if (searchUser(userName.val())) {
    errLabel.innerHTML = "Username Already exist";
  }
  else if (!checkEmail(email.val())) {
    errLabel.innerHTML = "Invalid Email";
  }
  else if (searchEmail(email.val())) {
    errLabel.innerHTML = "Email Already exist";
  }
  else
    checkPassword();
}

// function for email add validation
// this function will first check if this email address already exists in our database
//then it must be according to the universal email address validation
function checkEmail(email) {
  let isValid = true;
  let isQuoted = false;
  let special = false;
  let at = [];
  let quotation = [];

  for (let index = 0; index < email.length; index++) {
    if (email[index] == "@") {
      at.push(index);
    }

    if (email[index] == '"') {
      quotation.push(index);
    }
  }
  for (let i = 0; i < at[at.length - 1]; i++) {
    if (
      email[i] == "[" ||
      email[i] == "]" ||
      email[i] == '"' ||
      email[i] == "," ||
      email[i] == ":" ||
      email[i] == ";" ||
      email[i] == "<" ||
      email[i] == ">" ||
      email[i] == "(" ||
      email[i] == ")" ||
      email[i] == "\\" ||
      email[i] == " "
    ) {
      special = true;
    }
  }
  for (let i = at[at.length - 1]; i < email.length; i++) {
    if (email[i] == "_") isValid = false;
  }

  if (
    quotation[0] == 0 &&
    at[at.length - 1] - 1 == quotation[quotation.length - 1]
  ) {
    isQuoted = true;
  }

  if (at.length != 1 && !isQuoted) {
    isValid = false;
  }
  if (special && !isQuoted) isValid = false;
  if (at[at.length - 1] >= 63) isValid = false;

  return isValid;
}



//function for password validation
//this function will check id password is valid according to our rules
//our rules is: to be more than 8 characters, only english, at least one capital character ans one lower,at least one number, no special character
function checkPassword() {
  let password = document.getElementById("uPassword");
  let errLabl = document.getElementById("errMsgUp");
  errLabl.style.color = "red";
  if (password.value.length >= 8) {
    //check if there is at lest on capital letter
    if (/[A-Z]/.test(password.value)) {
      if (/[a-z]/.test(password.value)) {
        if (format.test(password.value)) {
          if (/[0-9]/.test(password.value)) {
            if (checkEnglishLetters(password.value)) {
              confirmPass(password.value, errLabl);
            } else errLabl.innerHTML = "The password must english characters .";
          } else errLabl.innerHTML = "The password must contain at least one numbers in row .";
        } else errLabl.innerHTML = "The password must contain special character at least one.";
      } else errLabl.innerHTML = "The password must contain lower letter at least one.";
    } else errLabl.innerHTML = "The password must contain capital letter at least one.";
  } else errLabl.innerHTML = "The password must be minimum 8 letters";
}

//function for confirmation the password 
function confirmPass(pass, errLabl) {
  let confPass = document.getElementById("uConfPassword");
  if (confPass.value == "" || pass.localeCompare(confPass.value)) {
    errLabl.innerHTML = "The password isn't the same !"
  } else {
    errLabl.hidden = "true";
    saveUser();
    setToCookies();
  }

}

//saving the user in the array of objects and local storage 

function saveUser() {
  let obj = {
    UserName: document.getElementById("uUserName").value,
    Email: document.getElementById("uEmail").value,
    Password: document.getElementById("uPassword").value
  }
  usersArray.push(obj);
  localStorage.setItem("userList", JSON.stringify(usersArray));

}
// this function save logged in user to the cookies for 2 hours

function setToCookies() {
  let user = document.getElementById("uUserName").value;
  let d = new Date();
  d.setTime(d.getTime() + 2 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = "User =" + user + ";" + expires;
  window.location.replace("../pages/dashboard.html");
}

function checkEnglishLetters(value) {
  for (const i of value) {
    if (!/[a-zA-Z]|[0-9]|[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i)) {
      return false;
    }
  }
  return true;
}
//search if the userName exists in the database 
function searchUser(usr) {
  if (localStorage.getItem("userList")) {
    let users = JSON.parse(localStorage.getItem("userList"));
    for (let i of users) {
      if (i.UserName == usr)
        return true;
    }
  }
  return false;

}
//search if the email address exists in the database 
function searchEmail(eml) {
  if (localStorage.getItem("userList")) {
    let users = JSON.parse(localStorage.getItem("userList"));
    for (let i of users) {
      if (i.Email == eml)
        return true;
    }
  }
  return false;
}

