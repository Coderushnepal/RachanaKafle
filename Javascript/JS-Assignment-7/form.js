
function Form() {
    var x=document.getElementById('form');
    var form=document.createElement('form');
    form.setAttribute("action","");
    // form.setAttribute("method","post");
    x.appendChild(form);
    form.setAttribute("onsubmit","validate()");

    //heading
    var heading=document.createElement("h1");
    heading.innerHTML="Register with Us";
    heading.style.textAlign="center";
    form.appendChild(heading);

    //username;
    var username=document.createElement('label');
    username.innerHTML="Username";
    form.appendChild(username);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    var input_username = document.createElement("input");
    input_username.setAttribute("type", "text");
    input_username.setAttribute("id", "username");
    input_username.placeholder = "Enter username";
    // console.log(input_username)
   
    form.appendChild(input_username);
    // var linebreak=document.createElement('br');
    // form.appendChild(linebreak);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    //error message
    var error_message=document.createElement("p");
    error_message.innerHTML="Username must be at least 3 characters";
    error_message.style.display="none";
    error_message.setAttribute("id", "err_username");
    error_message.style.color="red";
    form.appendChild(error_message);

    // email
    var email=document.createElement("label");
    email.innerHTML="Email";
    form.appendChild(email);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    var input_email=document.createElement("input")
    input_email.placeholder="Enter email";
    input_email.setAttribute("type","email");
    input_email.setAttribute("id", "email");
    form.appendChild(input_email);

    var linebreak=document.createElement('br');
    form.appendChild(linebreak)
    // var linebreak=document.createElement('br');
    // form.appendChild(linebreak)

    var error_message=document.createElement("p");
    error_message.innerHTML="Email is not valid";
    error_message.style.display="none";
    error_message.setAttribute("id", "err_email");
    error_message.style.color="red";
    form.appendChild(error_message);

//password
    var password=document.createElement("label");
    password.innerHTML="Password"
    form.appendChild(password);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak)

    var input_password=document.createElement("input")
    input_password.placeholder="Enter password"
    input_password.setAttribute("type","password")
    input_password.setAttribute("id", "password");
    form.appendChild(input_password)
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);
    // var linebreak=document.createElement('br');
    // form.appendChild(linebreak);

    var error_message=document.createElement("p");
    error_message.innerHTML="password must be atleast 6 characters";
    error_message.style.display="none";
    error_message.setAttribute("id", "err_password");
    error_message.style.color="red";
    form.appendChild(error_message);

//confirm password
    var confirm_password=document.createElement("label");
    confirm_password.innerHTML="Confirm Password"
    form.appendChild(confirm_password);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak)

    var input_confirm_password=document.createElement("input")
    input_confirm_password.placeholder="Enter password again"
    input_confirm_password.setAttribute("type","password")
    input_confirm_password.setAttribute("id", "confirm_password");
    form.appendChild(input_confirm_password)
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);
    // var linebreak=document.createElement('br');
    // form.appendChild(linebreak);

    var error_message=document.createElement("p");
    error_message.innerHTML="password do not match";
    error_message.style.display="none";
    error_message.setAttribute("id", "err_confirm_password");
    error_message.style.color="red";
    form.appendChild(error_message);  

    //submit button
    btn = document.createElement("button"); 
    btn.innerHTML = "Submit";
    btn.setAttribute("id", "btn");
    btn.style.backgroundColor="#00B2FF";
    btn.style.color="white";
    btn.style.padding="5px 70px";
    btn.style.margin="5px";
    form.appendChild(btn);        
}
Form();

btn.addEventListener("click",function(e) {
    validate();
      e.preventDefault();
  });









