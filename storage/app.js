// localStorage.setItem('name','Saad')
// sessionStorage.setItem('name', 'ali')

function signup() {
  var getName = document.getElementById("sname");
  var getEmail = document.getElementById("semail");
  var getPass = document.getElementById("spass");

  localStorage.setItem("name", getName.value);
  localStorage.setItem("email", getEmail.value);
  localStorage.setItem("pass", getPass.value);

  alert("user Signedup successfully");
}

function login() {
  var getEmail = document.getElementById("lemail");
  var getPass = document.getElementById("lpass");

  if (
    getEmail.value == localStorage.getItem("email") &&
    getPass.value == localStorage.getItem("pass")
  ) {
    alert("User login successfully");
    location.href = "./welcome.html";
  } else {
    alert("incorrect email/password");
  }
}

function logout() {
  localStorage.clear();
  location.href = "./login.html";
}
