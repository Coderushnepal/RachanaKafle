
import React, { Component, Fragment } from 'react';
import iziToast from 'izitoast';
import './login.css';
import axios from 'axios';
class Login extends Component { 
    constructor(props){
        super(props);
        this.state = {
            formData: {
                email: "",
                password: ""
            }
        };
    }
    fetchData = () => {
        axios({
          method: "POST",
          url: "http://localhost:8848/admin/login",
          data: {
            email: this.state.formData.email,
            password: this.state.formData.password,
          },
        })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
        console.log(err);
        });
    }
    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]: event.target.value,
            }
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state.formData;
        if( !email || !password ){
            let fieldName;
            if (!email) {
                fieldName = "Email";
            } else {
                fieldName = "Password"
            }
            iziToast.error({
                title: 'Sorry!',
                message: `Can you please fill up the ${fieldName} field`,
            });
        } else {
            setTimeout(()=> {
                iziToast.success({
                    title: 'Logged in!',
                    message: `Redirecting to  blog page.`,
                });
                this.props.history.push('/blogs');
            }, 100);
        }  
    };
    render(){
        const { email, password } = this.state.formData;
        return(
         
                        <div className="login__form">                    
                            <form onSubmit={this.handleSubmit}>
                                <span className="login-form-title"> Admin Login </span><br></br>
                                <span className="txt"> Email </span>
                                <div className="wrap-input">
                                    <input onChange={this.handleChange} 
                                        className="input" 
                                        type="email" 
                                        id="email" 
                                        name="email"  
                                        value={email} 
                                        required 
                                    />
                                </div>
                                <span className="txt"> Password </span>
                                <div className="wrap-input">
                                    {/* <span className="btn-show-pass">
                                        <i id="eyeIcon" className="fa fa-eye" 
                                            //  onClick="myFunction()"
                                        ></i>
                                    </span> */}
                                    <input 
                                        onChange={this.handleChange} 
                                        className="input" 
                                        type="password" 
                                        name="password" 
                                        id="myInput" 
                                        value={password}
                                    />
                                </div>
                                <div className="container-login-form-btn">
                                        <button type="submit" 
                                            className="login__btn"
                                            onClick={this.fetchData}
                                        > 
                                            Login
                                        </button>
                                </div>
                            </form>
                        </div>

        );
    }
}
export default Login;


