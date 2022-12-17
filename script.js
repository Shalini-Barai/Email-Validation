var btn = document.getElementById("btn");
let emailres = document.getElementById("emailres");
let passres = document.getElementById("passres");

btn.addEventListener("click", () => {
    let mes=document.getElementById("message");
  if (confirm("Are You Confirm ?")) {
    alert("Successful SignUp!");
    mes.innerHTML="Successfully Submitted !";
  } else {
    let email = document.getElementById("email1");
    let pass = document.getElementById("pass");
    email.value = "";
    pass.value = "";
    passres.innerHTML="";
  }
});
var bool = "no";
var bool1 = "no";

function emailChange() {
  let email = document.getElementById("email1");
  if (
    email.value.length > 3 &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) 
  {
    emailres.innerHTML = "";
    bool = "yes";
  } 
  else 
  {
    emailres.style.color = "red";
    emailres.innerHTML =
      "Make sure email is more than 3 characters and has @ and a .";
  }
}
function passChange() {
  let pass = document.getElementById("pass");
  if(pass.value.length > 8) {
    passres.innerHTML = "";
    bool1 = "yes";
    
    if(bool == "yes" && bool1 == "yes")
     {
      passres.style.color = "green";
      passres.innerHTML = "All good to go!";
      btn.removeAttribute("disabled");
      
    }
  } 
  else
   {
    passres.style.color = "red";
    passres.innerHTML = "Make sure password is more than 8 characters.";
  }
}
