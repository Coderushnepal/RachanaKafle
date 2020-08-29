import React,{Component} from "react";
import { Header } from "../common";
import ContactHeader from "./ContactHeader";
import "./Contact.css";
// import {Link} from "react-router-dom";

class Contact extends Component {
    render(){
        return(
            <div>
               <ContactHeader />
               <div className="container__contact clearfix">
                   <div className="contact__information left">
                        <div className="contact__medium">
                            <i class="fas fa-envelope-square"></i>rachanakafle32@gmail.com
                        </div> 
                        <div className="contact__medium">
                        <i class="fas fa-phone"></i>+977 98111111111
                        </div>  
                        <div class="social__icons">
                        <div class='social__media'>
                            <a href="https://www.facebook.com/profile.php?id=100005656457913"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div class='social__media'>
                            <a href="https://www.instagram.com/rachana_kafle/?hl=en">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class='social__media'>
                            <a href="https://www.linkedin.com/in/rachanakafle/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
               </div>



                   </div>
                <div className="contact__form right">
                    <h1>Contact Form</h1>
                   <form>
                <label>
                    Full Name:
                    <input type="text" name="name" placeholder="Enter your fullname" />
                </label><br></br>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="Enter your email" />
                </label><br></br>
                <label>
                Message:
                 <textarea name="message" placeholder="Enter your message here"></textarea>
                 </label><br></br>
                <input type="submit" value="Submit" />
                </form>

                   </div>
               </div>
                
            </div>
        )

    }
}
export default Contact

