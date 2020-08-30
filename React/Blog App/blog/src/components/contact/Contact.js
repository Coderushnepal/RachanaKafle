import React,{Component} from "react";
import { Header, Loader } from "../common";
import ContactHeader from "./ContactHeader";
import "./Contact.css";
import iziToast from 'izitoast';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: "",
                email: "",
                phonenumber: "",
                message: "",
            },
            isLoading: false,
        };
    }
    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]:event.target.value
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email,phonenumber,message } = this.state.formData;
        if(!name || !email || !phonenumber || !message){
            let fieldName;
            if (!name) {
                fieldName = "Name";
            } else if (!email) {
                fieldName = "Email";
            } else if (!phonenumber) {
                fieldName = "Phonenumber";
            } else {
                fieldName = "Message"
            }
            // iziToast.setGravity(Gravity.CENTER, 0, 0);
            iziToast.show({
                title: 'Form wasnot submitted',
                message: ` please fill up the ${fieldName} field`,
            });
        } else {
            this.setState({
                isLoading: true
            })
            setTimeout(()=> {
                this.setState({
                    isLoading: false
                })
                iziToast.show({
                    message: `Form was successfully submitted`,
                });
                // iziToast.settings ({
                //     position:"topCenter",
                // })
                this.props.history.push('/contact');
            }, 4000)
        }  
    }

    render(){
        const { name, email,phonenumber,message } = this.state.formData;
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
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Full Name</label><br/>
                        <input onChange={this.handleChange} type="text" id="name" name="name" value={name} placeholder="Enter your fullname"/><br/>                    
                        <label htmlFor="email">Email</label><br/>
                        <input onChange={this.handleChange} type="email" id="email" name="email" value={email} placeholder="Enter your email" /><br/>                                      
                        <label htmlFor="number">Phone Number</label><br/>
                        <input onChange={this.handleChange} type="text" id="phonenumber" name="phonenumber" value={phonenumber} placeholder="Enter your phonenumber"/><br/> 
                        <label htmlFor="number">Message</label><br/>
                        <textarea htmlFor="message" onChange={this.handleChange} id="message" name="message" value={message} placeholder="Enter your message"></textarea><br/>
                        <button type="submit">Submit{this.state.isLoading && <Loader />}</button>    
                    </form>
                   </div>
               </div>             
            </div>
        )

    }
}
export default Contact

