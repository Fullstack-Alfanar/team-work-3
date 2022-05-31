setTimeout(function rerouteHomePage() {
  {
    if (document.cookie) {
      window.location.replace("../pages/dashboard.html");
    } else {
      window.location.replace("../pages/signUp-signIn.html");
    }
  }
}, 3000);
