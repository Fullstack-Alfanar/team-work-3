setTimeout(function rerouteHomePage() {
  {
    if (getCookies()) {
      window.location.replace(".../pages/dashboard.html");
    } else {
      window.location.replace(".../pages/signUp-signIn.html");
    }
  }
}, 2000);


function getCookies() {
  let cookies = document.cookie;
  let splitCookies = cookies.split("=")
  console.log(splitCookies);
  if (cookies) {
    if (splitCookies[1] == "") {
      return false;
    }
    else return true;
  }
  return false;
}
