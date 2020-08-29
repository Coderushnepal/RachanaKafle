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
               <div className="container__contact">
                   <div className="contact__information">
                   <i class="fas fa-envelope-square"></i> rachanakafle32@gmail.com<br></br>
                   <i class="fas fa-phone"></i>+977 98111111111<br></br>
                   <div class="contact_icons">
{/* <Link href=""> <i class="fab fa-facebook">https://www.facebook.com/profile.php?id=100005656457913</i></Link> */}
                    <i class="fab fa-facebook"></i>
                   <i class="fab fa-twitter-square"></i>
                   <i class="fab fa-linkedin"></i>
                   </div>
                   </div>
                <div className="contact__form">
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

