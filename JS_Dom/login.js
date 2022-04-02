document.getElementById('form').addEventListener('submit', validate)
function validate(e) {
  e.preventDefault()
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var re_password = document.getElementById("re_password").value;
  if(username== "") {
    // alert("Please enter Username");
    document.getElementById("message").innerHTML = "<b>Điền username đê</b>"; 
    return false;
  }
    if(password== "") {
    // alert("Please enter Password");
    document.getElementById("message").innerHTML = "<b>Điền password đê</b>"; 
    return false;
  }
    if(username!="" & password!= "") {
    // document.getElementById("message").style.color = 'green';
    // document.getElementById("message").innerHTML = "Tốt lắm con trai"; 
    document.getElementById("message").innerHTML = "<span style='color: green;'> <b> Mày được </b> </span>";
    return true;
  }  
  
//  Validate pass
  if(password !== re_password) {
    alert("Passwords do not match");
    return false;
  }  
 if (!password.match(/^[A-Za-z0-9]{8,}$/)){
  alert("Password must be at least 8 characters, with at least one uppercase letter and one number")
 }
}