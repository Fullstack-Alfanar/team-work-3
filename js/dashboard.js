$(document).ready(() => {
  $("#logoutBtn").click(() => {
    document.cookie = "Email =" + "" + ";" + "expires=" + ";path=/";
    window.location.replace("/index.html");
  });
  function getUser() {
    let cookies = document.cookie;
    let splitCookies = cookies.split("=");
    return splitCookies[1];
  }
  email = getUser();
  if (email == "") {
    window.location.replace("../index.html");
  }
  getData();

  let data = $(`<i class="fa fa-fw fa-user"></i>`);
  $("#username").text(user).append(data);
});

let user, email;
//sets data in the array from local storage whenever the page rerun
function getData() {
  let usersArray = [];
  if (localStorage.getItem("userList"))
    usersArray = JSON.parse(localStorage.getItem("userList"));
  for (let i of usersArray) {
    if (i.Email == email) {
      user = i.UserName;
      break;
    }
  }
}
