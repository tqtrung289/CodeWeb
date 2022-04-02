document.getElementById('form').addEventListener('submit', validate)
function validate(e) {
  e.preventDefault()
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var re_password = document.getElementById("re_password").value;
  if(username== "") {
    alert("Please enter Username");
    return false;
  }
  if(password !== re_password) {
    alert("Passwords do not match");
    return false;
  }  
 if (!password.match(/^[A-Za-z0-9]{8,}$/)){
  alert("Password must be at least 8 characters, with at least one uppercase letter and one number")
 }
}