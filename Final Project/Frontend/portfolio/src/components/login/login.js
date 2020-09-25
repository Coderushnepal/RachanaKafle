
import React, { Component} from 'react';
import iziToast from 'izitoast';
import './login.css';
import {login} from '../../services/loginService';
class Login extends Component { 
        constructor(props){
            super(props);
            this.state = {
                formData: {
                    email: "",
                    password: "",
                },
              };
           
        }

    submitData=async() =>{
      try {
        const loginCredentials = await login(this.state.formData.email, this.state.formData.password);
        localStorage.setItem('Token', loginCredentials.token);
        this.props.history.push('/');
      } catch (err) {
          iziToast.error({
              ttile:"Login Failed",
             message:"Invalid credentials" 
          })
      }
    //   this.setState({ loginCredentials});
    }
  

  handleChange = (event) => {
      console.log("reached")
    this.setState({
        formData : {
            ...this.state.formData,
            [event.target.name]:event.target.value
        }
    })
    console.log(this.state.formData)
}
handleSubmit = (event) => {
    event.preventDefault();
    
}


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
                                                onClick={this.submitData}
                                            > 
                                                Login
                                            </button>
                                           


                                    </div>
                                </form>
                            </div>
    
    )
        }
    }
    
export default Login;
