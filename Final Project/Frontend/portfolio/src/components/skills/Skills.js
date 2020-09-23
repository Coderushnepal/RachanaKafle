import React ,{Component} from 'react';
import Header from '../common/header/Header'

import Footer from '../common/footer/Footer';

import "./Skills.css"

class Skills extends Component {
    render(){
        return (
            <div>
                <Header />
                    <div class="skills__container">
                    <div className="skills__section">
                            <div className="skill left">
                                <img src="https://i.postimg.cc/5y6xTpPf/html.jpg"></img><br></br>
                                <span>HTML</span>
                            </div>
                            <div className="skill left">
                                <img src="https://i.postimg.cc/8PZbMck4/css.jpg"></img><br></br>
                                <span>CSS</span>
                            </div>
                            <div className="skill left">
                                 <img src="https://i.postimg.cc/wMdCcVSW/bootstrap.png"></img><br></br>
                                <span>BOOTSTRAP</span>
                        </div>
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/RZcV263Q/js.png"></img><br></br>
                                <span>JAVASCRIPT</span>
                        </div>
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/QdmjNHFB/react1.png"></img><br></br>
                                <span>REACT</span>
                        </div>  
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/sDnnVzVj/node.png"></img><br></br>
                                <span>NODE</span>
                        </div>  
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/MKxTWk9F/python.jpg"></img><br></br>
                                <span>PYTHON</span>
                        </div>  
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/4xfQHSx8/DJANGO.jpg"></img><br></br>
                                <span>DJANGO</span>
                        </div> 
                    </div>  
                    </div> 



                <Footer/>
            </div>
          
    
        )
    }
}

export default Skills