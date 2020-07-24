
function Form() {
    //id ..
    var x=document.getElementById('form');
    var form=document.createElement('form');
    form.setAttribute("action","");
    form.setAttribute("method","post");
    x.appendChild(form);
    
    //heading
    var heading=document.createElement("h1");
    heading.innerHTML="Register with Us";
    heading.style.textAlign="center";
    form.appendChild(heading);

    //username
    var username = document.createTextNode("Username");
    form.appendChild(username);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    var input_username = document.createElement("input");
    input_username.setAttribute("type", "text");
    input_username.setAttribute("id", "username");
    //error in placeholder
    // input_username.placeholder(Enter)
    form.appendChild(input_username);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    // email
    var email=document.createTextNode("Email");
    form.appendChild(email);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    var input_email=document.createElement("input")
    input_email.setAttribute("type","email");
    input_email.setAttribute("id", "email");
    form.appendChild(input_email);

    var linebreak=document.createElement('br');
    form.appendChild(linebreak)
    var linebreak=document.createElement('br');
    form.appendChild(linebreak)

//password
    var password=document.createTextNode("password");
    form.appendChild(password);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak)

    var input_password=document.createElement("input")
    input_password.setAttribute("type","password")
    input_password.setAttribute("id", "password");
    form.appendChild(input_password)
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

//confirm password
    var confirm_password=document.createTextNode("Confirm Password");
    form.appendChild(confirm_password);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak)

    var input_confirm_password=document.createElement("input")
    input_confirm_password.setAttribute("type","password")
    input_confirm_password.setAttribute("id", "confirm_password");
    form.appendChild(input_confirm_password)
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);
    var linebreak=document.createElement('br');
    form.appendChild(linebreak);

    //submit button
    btn = document.createElement("BUTTON"); 
    btn.innerHTML = "Submit";
    btn.style.backgroundColor="#00B2FF";
    btn.style.color="white";
    btn.style.padding="5px 70px";
    btn.style.margin="5px";
    form.appendChild(btn);     
        
	}
Form();













