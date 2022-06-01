$(document).ready(() => {
  $("#signInBtn").click(() => {
    $("#signUpDiv").hide();
    $("#signInDiv").show().css("display", "flex");
  });
  $("#signUpBtn").click(() => {
    $("#signUpDiv").show().css("display", "flex");
    $("#signInDiv").hide();
  });
});

//signUp
var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
var english = /^[A-Za-z0-9]*$/;
//function for userName validation
//This function first need to check if thi user name already exits in the database
//, then it must be only in english and number no special characters
function checkUserName() { }

// function for email add validation
// this function will first check if this email address already exists in our database
//then it must be according to the universal email address validation
function checkEmail() {

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
    if (checkCap(password.value, password.value.length) == true) {
      if (checkLow(password.value, password.value.length) == true) {
        if (checkSpecialChar(password.value, password.value.length) == true) {
          if (threeNums(password.value, password.value.length) == true) {
            if (checkEnglish(password.value, password.value.length) == true) {
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
  if (pass.localeCompare(confPass.value) != 0)
    errLabl.innerHTML = "The password isn't the same !"
  saveUser();
}

//saving the user in the array of objects and local storage 

function saveUser() {


}

/* help functions*/
//check if capital letter
function checkCap(str, size) {
  if (size - 1 == -1) return false;
  if (str[size - 1] >= "0" && str[size - 1] <= "9")
    return checkCap(str, size - 1);
  else if (str[size - 1].toUpperCase() == str[size - 1] && str[size - 1].match(/[A-Z]/i))
    return true;
  else return checkCap(str, size - 1);
}
//check if lowercase letter
function checkLow(str, size) {
  if (size - 1 == -1) return false;
  if (str[size - 1] >= "0" && str[size - 1] <= "9")
    return checkLow(str, size - 1);
  else if (str[size - 1].toLowerCase() == str[size - 1] && str[size - 1].match(/[a-z]/i))
    return true;
  else return checkLow(str, size - 1);
}
//check if special character
function checkSpecialChar(str, size) {
  if (size - 1 == -1) return false;
  str[size - 1].match(format);
  if (str[size - 1].match(format)) return true;
  else return checkSpecialChar(str, size - 1);
}
//check if special character
function checkNum(str, size) {
  if (size - 1 == -1) return false;
  if (str[size - 1] >= "0" && str[size - 1] <= "9") return true;
  else return threeNums(str, size - 1);
}
//check if it is in english
function checkEnglish(str, size) {
  if (size - 1 == -1) return true;
  //console.log(str[size-1].match(english));
  if (str[size - 1].match(english) || str[size - 1].match(format))
    return checkEnglish(str, size - 1);
  else return false;
}
