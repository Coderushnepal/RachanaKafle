
    function validate() {
        var username=document.getElementById("username");
        var error_username=document.getElementById("err_username");
        var email=document.getElementById("email")
        var error_email=document.getElementById("err_email")
        var password=document.getElementById("password");
        var error_password=document.getElementById("err_password")
        var confirm_password=document.getElementById("confirm_password")
        var error_confirm_password=document.getElementById("err_confirm_password")


        if (username.value==""||username.value.length<3) {
            // alert("No blank value allowed")
                error_username.style.display="block"; 
                username.style.border="3px solid red";                  
        }
        else {
            error_username.style.display="none"; 
            username.style.border="3px solid green";                    
        } 

        if(email.value==="" ){
            error_email.style.display="block";
            email.style.border="3px solid red";
            
        }
        else if(!isEmail(email.value)){
            error_email.style.display="block";
            email.style.border="3px solid red";
        }
        else{
            error_email.style.display="none";
            email.style.border="3px solid green";
        }
        function isEmail(email) 
		{
			return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
		}

        if(password.value.length<6) {
            error_password.style.display="block";  
            password.style.border="3px solid red";
            }
            else {
            error_password.style.display="none";
            password.style.border="3px solid green";
           }   
           
            if(confirm_password.value==password.value && confirm_password.value!==""){ 
               
                error_confirm_password.style.display="none";  
                 confirm_password.style.border="3px solid green"; 
            }     
                                          
            else {
                error_confirm_password.style.display="block"; 
                confirm_password.style.border="3px solid red";
                }   

    }
   
    