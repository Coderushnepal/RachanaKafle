import React ,{Component} from 'react';
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer';
import "./About.css";


class About extends Component {
    render(){
        const token= localStorage.getItem('Token');
        return (
            <div>
                 <Header /> 
                 <div className="container__about">
                 {token?
                    <button className="btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    :null
                 }
                    <div className="profile">
                            <img src="https://i.postimg.cc/bw3XRb8q/rachana-kafle.jpg" alt="Rachana kafle"></img> 
                    </div>
                    <div className="description">
                            <p>
                            I am a BSc.CSIT Graduate from Tribhuwan University. I am looking to obtain the position of a 
                            software developer. I want to work with an organization 
                            that can give me ample opportunities to grow so that
                            I will be able to help in the growth of that organization 
                            and will be able to enhance my skills and my capabilities.
                            </p>        
                    </div>                  
                 </div>
                 <Footer />
            </div>
        )
    }
}

export default About